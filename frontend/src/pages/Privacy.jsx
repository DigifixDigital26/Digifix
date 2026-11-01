import LegalPage from '../components/LegalPage.jsx';
import { site } from '../config/site.js';

const contact = [
  site.email && `Email: ${site.email}`,
  site.phone && `Phone: ${site.phone}`,
]
  .filter(Boolean)
  .join(' | ') ||
  'Please use the contact form on this website and mark your message as a privacy request.';

const sections = [
  {
    heading: '1. Who We Are',
    paragraphs: [
      `This website is operated by ${site.legalName}, trading as ${site.name}. ${site.name} is an independently operated digital services business based in ${site.address}. This Privacy Policy explains what information we collect through this website and how we use, store, and protect it.`,
    ],
  },

  {
    heading: '2. Information We Collect',
    paragraphs: [
      'We collect information that you voluntarily provide through our website contact form, including:',
    ],
    items: [
      'Full name',
      'Business name (optional)',
      'Email address',
      'Phone number (optional)',
      'The service you are interested in',
      'Estimated project budget (optional)',
      'Project details and other information you choose to share',
    ],
  },

  {
    heading: '3. Technical Information',
    paragraphs: [
      'When you visit our website, our hosting and infrastructure providers may process certain technical information required to deliver and secure the website. This may include IP address, browser information, device information, request details, and basic server logs.',
      'We do not intentionally collect this information to identify visitors for advertising or behavioural profiling.',
    ],
  },

  {
    heading: '4. Why We Collect Your Information',
    paragraphs: [
      'We use the information you submit to:',
    ],
    items: [
      'Review and respond to your enquiries.',
      'Understand your business and project requirements.',
      'Prepare service proposals, quotations, and project discussions.',
      'Communicate with you about requested services.',
      'Maintain website security and prevent misuse of our contact form.',
      'Meet applicable legal obligations where necessary.',
    ],
    footer: 'We do not sell your personal information or use enquiry details for unrelated marketing without an appropriate basis or your consent.',
  },

  {
    heading: '5. Storage and Handling',
    paragraphs: [
      'Contact form submissions are stored in a database hosted by MongoDB Atlas. The website hosting and application infrastructure may be provided through Render.',
      `Access to enquiry information is intended to be limited to ${site.name} personnel who need it to respond to enquiries or manage requested services.`,
      'We use reasonable technical and organisational measures to protect information. However, no method of internet transmission or electronic storage can be guaranteed to be completely secure.',
    ],
  },

  {
    heading: '6. Third-Party Services',
    paragraphs: [
      'Our website may rely on third-party providers to operate its services. These currently include:',
    ],
    items: [
      'Hostinger: domain registration and domain-related services.',
      'Render: website and application hosting infrastructure.',
      'MongoDB Atlas: database storage for contact form submissions.',
      'Google Fonts: font delivery when fonts are requested by your browser.',
    ],
    footer: 'These providers may process certain technical or personal information as necessary to provide their services. Their own privacy policies and terms also apply. Data may be processed in locations outside India depending on the providers’ infrastructure and configurations.',
  },

  {
    heading: '7. Cookies and Tracking',
    paragraphs: [
      'We do not intentionally use analytics or advertising tracking tools such as Google Analytics or Meta Pixel on this website.',
      'Our website may use essential technical storage or similar technologies where necessary for basic functionality, security, or service delivery. Third-party infrastructure providers may also use technical mechanisms as part of their services.',
      'If we introduce analytics, advertising tracking, or other non-essential cookies in the future, this policy will be updated accordingly.',
    ],
  },

  {
    heading: '8. How Long We Keep Information',
    paragraphs: [
      'Contact form enquiries are intended to be retained for up to 20 days after submission and then deleted automatically, unless continued retention is necessary for responding to an ongoing discussion, providing services, resolving a dispute, or meeting a legal obligation.',
      'Information relating to active client projects, payments, invoices, agreements, or legal matters may be retained separately for as long as reasonably necessary.',
    ],
  },

  {
    heading: '9. Sharing of Information',
    paragraphs: [
      'We do not sell, rent, or trade your personal information.',
      'We may share limited information with service providers involved in operating our website, storing enquiries, or delivering requested services.',
      'Information may also be disclosed where required by applicable law, a valid legal process, or to protect our legal rights and website security.',
    ],
  },

  {
    heading: '10. Your Privacy Requests',
    paragraphs: [
      'Depending on applicable law, you may request access to personal information we hold about you, ask us to correct inaccurate information, or request deletion of information that we no longer need to retain.',
      `To submit a privacy-related request, contact us using the details below. We may need to verify your identity before processing certain requests.`,
      contact,
    ],
  },

  {
    heading: '11. Data Security',
    paragraphs: [
      'We take reasonable steps to protect submitted information against unauthorised access, alteration, disclosure, or loss.',
      'However, no website, database, or electronic communication system is completely secure. You should avoid submitting passwords, financial account credentials, or other highly sensitive information through our contact form.',
    ],
  },

  {
    heading: '12. Children’s Privacy',
    paragraphs: [
      'Our website and services are intended for businesses and individuals seeking digital services. We do not knowingly request personal information from children through our contact form.',
      'If you believe a child has submitted personal information to us, please contact us so we can review the matter.',
    ],
  },

  {
    heading: '13. Changes to This Privacy Policy',
    paragraphs: [
      'We may update this Privacy Policy when our website, services, data practices, or applicable legal requirements change.',
      'Any updated version will be published on this page. The last-updated date displayed above indicates when this policy was most recently revised.',
    ],
  },

  {
    heading: '14. Contact Information',
    paragraphs: [
      `For questions, concerns, or requests relating to this Privacy Policy, contact ${site.name}:`,
      contact,
      `Website: ${site.url}`,
      `${site.name} is independently operated by ${site.legalName}.`,
    ],
  },
];

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description={`Learn how ${site.name} collects, uses, stores, and protects information submitted through its website.`}
      updated={site.lastUpdated}
      sections={sections}
    />
  );
}