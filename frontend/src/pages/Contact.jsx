import { useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import {motion} from 'framer-motion'


import useMeta from '../hooks/useMeta.js';
import api from '../api/client.js';
import Button from '../components/Button.jsx';
import { site } from '../config/site.js';

const SERVICES = [
  'Web Development',
  'Graphic Design & Brand Identity',
  'Social Media Management',
  'Multiple Services',
  'Other',
];

const EMPTY = {
  name: '',
  businessName: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
  botcheck: '',
};

// Client-side validation
function validate(v) {
  const e = {};

  const name = v.name.trim();

  if (name.length < 2) {
    e.name = 'Enter your full name.';
  } else if (name.length > 100) {
    e.name = 'Name must be 100 characters or fewer.';
  }

  if (v.businessName.trim().length > 120) {
    e.businessName = 'Business name must be 120 characters or fewer.';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) {
    e.email = 'Enter a valid email address.';
  }

  if (
    v.phone.trim() &&
    !/^[+()\d\s-]{7,20}$/.test(v.phone.trim())
  ) {
    e.phone = 'Enter a valid phone number.';
  }

  if (!SERVICES.includes(v.service)) {
    e.service = 'Select a service.';
  }

  if (v.budget.trim().length > 60) {
    e.budget = 'Budget must be 60 characters or fewer.';
  }

  const msg = v.message.trim();

  if (msg.length < 10) {
    e.message = 'Tell us a little more about the project (at least 10 characters).';
  } else if (msg.length > 3000) {
    e.message = 'Project details must be 3000 characters or fewer.';
  }

  return e;
}

// Reusable form field
function Field({ id, label, optional, error, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="para mb-1.5 block text-base font-medium"
      >
        {label}

        {optional && (
          <span className="font-normal text-brand-green/75">
            {' '}(optional)
          </span>
        )}
      </label>

      {children}

      {error && (
        <p
          id={`${id}-error`}
          className="para mt-1.5 text-sm font-medium text-red-800"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  useMeta(
    'Contact',
    `Tell ${site.name} about your business and project. We will review your requirements and discuss the next steps.`
  );

  const [params] = useSearchParams();

  const preset = SERVICES.includes(params.get('service'))
    ? params.get('service')
    : '';

  const [values, setValues] = useState({
    ...EMPTY,
    service: preset,
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [serverError, setServerError] = useState('');

  const [privacyAcknowledged, setPrivacyAcknowledged] =
    useState(false);

  const submitting = useRef(false);

  // Update form fields
  const set = (e) => {
    const { name, value } = e.target;

    setValues((v) => ({
      ...v,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((er) => ({
        ...er,
        [name]: undefined,
      }));
    }
  };

  // Accessibility attributes
  const aria = (id) => ({
    id,
    name: id,
    value: values[id],
    onChange: set,
    'aria-invalid': errors[id] ? 'true' : 'false',
    'aria-describedby': errors[id]
      ? `${id}-error`
      : undefined,
    className: 'field-input',
  });

  // Focus first invalid field
  const focusFirst = (errs) => {
    const first = Object.keys(errs).find((k) => errs[k]);

    if (first) {
      document.getElementById(first)?.focus();
    }
  };

  // Form submission
  const onSubmit = async (e) => {
    e.preventDefault();

    // Privacy acknowledgement validation
    if (!privacyAcknowledged) {
      setServerError(
        'Please acknowledge the Privacy Policy before submitting your inquiry.'
      );

      setStatus('error');

      document.getElementById('privacyAcknowledged')?.focus();

      return;
    }

    // Prevent duplicate submissions
    if (submitting.current) return;

    // Validate form
    const errs = validate(values);

    setErrors(errs);

    if (Object.keys(errs).length) {
      setStatus('idle');
      setServerError('');
      focusFirst(errs);
      return;
    }

    submitting.current = true;

    setStatus('submitting');
    setServerError('');

    try {
      const res = await api.post('/api/contact', values);

      if (res.status === 201 && res.data?.success === true) {
        setValues({
          ...EMPTY,
        });

        setPrivacyAcknowledged(false);
        setErrors({});
        setStatus('success');
      } else {
        throw new Error('Unexpected response');
      }
    } catch (err) {
      const data = err.response?.data;

      if (data?.errors) {
        setErrors(data.errors);
        focusFirst(data.errors);
      }

      setServerError(
        data?.message ||
        (err.request
          ? 'We could not reach the server. Check your connection and try again.'
          : 'Something went wrong. Please try again.')
      );

      setStatus('error');
    } finally {
      submitting.current = false;
    }
  };

  const busy = status === 'submitting';

  return (
    <section className="container-x section-y">

      <div className="grid gap-12 lg:grid-cols-12">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >

          <h1 className="text-4xl leading-tight sm:text-5xl">
            Let&rsquo;s Build Something Meaningful.
          </h1>

          <p className="para mt-6 max-w-md text-lg leading-relaxed text-brand-green/85">
            Tell us a little about your business, your goals,
            and the project you have in mind. We&rsquo;ll review
            your requirements and discuss the next steps.
          </p>

          {(site.email || site.phone || site.address) && (
            <ul className="para mt-8 space-y-2 border-t border-brand-green/20 pt-6 text-base">

              {site.email && (
                <li>
                  <a
                    className="underline underline-offset-4"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </li>
              )}

              {site.phone && (
                <li>
                  <a
                    className="underline underline-offset-4"
                    href={`tel:${site.phone.replace(/\s/g, '')}`}
                  >
                    {site.phone}
                  </a>
                </li>
              )}

              {site.address && (
                <li>{site.address}</li>
              )}

            </ul>
          )}

        </motion.div>

        {/* RIGHT CONTENT / FORM */}

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >

          {/* SUCCESS MESSAGE */}

          {status === 'success' ? (

            <div
              role="status"
              className="border border-brand-green bg-white p-8"
            >

              <CheckCircle2
                className="h-8 w-8"
                aria-hidden="true"
                strokeWidth={1.5}
              />

              <h2 className="mt-4 text-2xl">
                Inquiry received
              </h2>

              <p className="para mt-3 text-lg leading-relaxed">
                Thank you. Your inquiry has been received.
                We will review your requirements and reply
                to the email address you provided.
              </p>

              <Button
                variant="outline"
                className="mt-6"
                onClick={() => {
                  setStatus('idle');
                  setServerError('');
                }}
              >
                Send another inquiry
              </Button>

            </div>

          ) : (

            <form
              onSubmit={onSubmit}
              noValidate
              aria-describedby={
                serverError ? 'form-error' : undefined
              }
              className="space-y-6 border border-brand-green/25 bg-white p-6 sm:p-9"
            >

              {/* HONEYPOT SPAM PROTECTION */}

              <div
                className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="botcheck">
                  Leave this field empty
                </label>

                <input
                  type="text"
                  id="botcheck"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.botcheck}
                  onChange={set}
                />
              </div>

              {/* FORM FIELDS */}

              <div className="grid gap-6 sm:grid-cols-2">

                <Field
                  id="name"
                  label="Full Name"
                  error={errors.name}
                >
                  <input
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    {...aria('name')}
                  />
                </Field>

                <Field
                  id="businessName"
                  label="Business Name"
                  optional
                  error={errors.businessName}
                >
                  <input
                    type="text"
                    autoComplete="organization"
                    maxLength={120}
                    {...aria('businessName')}
                  />
                </Field>

                <Field
                  id="email"
                  label="Email Address"
                  error={errors.email}
                >
                  <input
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    {...aria('email')}
                  />
                </Field>

                <Field
                  id="phone"
                  label="Phone Number"
                  optional
                  error={errors.phone}
                >
                  <input
                    type="tel"
                    autoComplete="tel"
                    maxLength={20}
                    {...aria('phone')}
                  />
                </Field>

                <Field
                  id="service"
                  label="Service Required"
                  error={errors.service}
                >
                  <select
                    required
                    {...aria('service')}
                  >
                    <option value="">
                      Select a service
                    </option>

                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}

                  </select>
                </Field>

                <Field
                  id="budget"
                  label="Estimated Budget"
                  optional
                  error={errors.budget}
                >
                  <input
                    type="text"
                    maxLength={60}
                    placeholder="A range and currency, if you have one"
                    {...aria('budget')}
                  />
                </Field>

              </div>

              {/* PROJECT DETAILS */}

              <Field
                id="message"
                label="Project Details"
                error={errors.message}
              >
                <textarea
                  rows={6}
                  required
                  maxLength={3000}
                  {...aria('message')}
                />
              </Field>

              {/* SERVER ERROR */}

              {serverError && (
                <div
                  id="form-error"
                  role="alert"
                  className="flex gap-3 border border-red-800 bg-red-50 p-4 text-red-900"
                >
                  <AlertCircle
                    className="mt-0.5 h-5 w-5 shrink-0"
                    aria-hidden="true"
                  />

                  <p className="para text-base">
                    {serverError}
                  </p>
                </div>
              )}

              {/* PRIVACY ACKNOWLEDGEMENT */}

              <div className="space-y-2">

                <label className="flex items-start gap-3 text-sm text-brand-green">

                  <input
                    type="checkbox"
                    id="privacyAcknowledged"
                    checked={privacyAcknowledged}
                    onChange={(e) => {
                      setPrivacyAcknowledged(e.target.checked);

                      if (e.target.checked) {
                        setServerError('');
                        setStatus('idle');
                      }
                    }}
                    required
                    aria-invalid={
                      status === 'error' && !privacyAcknowledged
                        ? 'true'
                        : 'false'
                    }
                    className="mt-1"
                  />

                  <span className="para leading-relaxed">

                    I have read the{' '}

                    <Link
                      to="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4"
                    >
                      Privacy Policy
                    </Link>

                    {' '}and understand how my information will be
                    used to respond to my enquiry and discuss
                    my project requirements.

                  </span>

                </label>

              </div>

              {/* SUBMIT BUTTON */}

              <Button
                type="submit"
                disabled={busy}
                aria-busy={busy}
                className="w-full sm:w-auto"
              >
                {busy ? 'Sending...' : 'Send Inquiry'}
              </Button>

              {/* PRIVACY NOTICE */}

              <p className="para text-sm leading-relaxed text-brand-green/80">

                Your information will be used to respond to your
                enquiry and discuss your project requirements.
                Enquiry data is intended to be retained for up to
                20 days, subject to applicable exceptions.
                Read our{' '}

                <Link
                  className="underline underline-offset-4"
                  to="/privacy-policy"
                >
                  Privacy Policy
                </Link>

                {' '}for more information.

              </p>

            </form>

          )}

        </motion.div>

      </div>

    </section>
  );
}