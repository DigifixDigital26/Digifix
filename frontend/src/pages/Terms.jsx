import LegalPage from '../components/LegalPage.jsx';
import { site } from '../config/site.js';

const contact = [
  site.name && `Business: ${site.name}`,
  site.legalName && `Owner/Operator: ${site.legalName}`,
  site.address && `Location: ${site.address}`,
  site.email && `Email: ${site.email}`,
  site.phone && `Phone: ${site.phone}`,
  site.url && `Website: ${site.url}`,
]
  .filter(Boolean)
  .join(' | ') || 'Please use the contact form on this website.';

const sections = [
  {
    heading: '1. Introduction',
    paragraphs: [
      `Welcome to ${site.name}. These Terms & Conditions govern your use of our website and the digital services provided by ${site.name}, an independently operated business owned and managed by ${site.legalName}, based in ${site.address}.`,
      'By accessing this website, submitting an enquiry, or purchasing our services, you agree to these Terms & Conditions. If you do not agree, please discontinue using our website and services.',
    ],
  },

  {
    heading: '2. Services Offered',
    paragraphs: [
      `${site.name} provides digital services, including website design and development, graphic design, logo design, brand identity, branding, social media design, and social media management.`,
      'The exact services and deliverables will depend on the project requirements and the written proposal or agreement accepted by the client.',
      'We reserve the right to decline projects that are outside our capabilities, availability, or business policies.',
    ],
  },

  {
    heading: '3. Website Use',
    paragraphs: [
      'You agree to use this website only for lawful purposes. You must not attempt to disrupt the website, gain unauthorized access to its systems, introduce malicious code, submit false information, or misuse its contact forms.',
      'We may restrict access to our website or services if we identify misuse, suspicious activity, or violations of these terms.',
    ],
  },

  {
    heading: '4. Project Scope and Deliverables',
    paragraphs: [
      'Each client project will be defined through a quotation, proposal, or written agreement describing the scope of work, deliverables, pricing, and estimated timeline.',
      'Any work requested outside the originally agreed scope may involve additional charges and an adjusted delivery timeline. Such additional work will be discussed with the client before it begins.',
      'Project delivery depends on the timely availability of required content, information, approvals, feedback, and payments from the client.',
    ],
  },

  {
    heading: '5. Pricing and Payment Terms',
    paragraphs: [
      'Unless otherwise agreed in writing, our standard payment structure is 30% advance payment before the project begins and the remaining 70% after the final project preview or completion presentation has been shared and approved by the client.',
      'Payments are currently accepted through UPI or another payment method mutually agreed upon.',
      'Domain registration, hosting, premium plugins, paid fonts, stock images, third-party subscriptions, and other external costs are generally charged separately unless included in the project quotation.',
      `${site.name} may pause work or withhold final source files, production deployment, credentials, or ownership handover until all outstanding payments have been received.`,
    ],
  },

  {
    heading: '6. Revisions and Modifications',
    paragraphs: [
      'Each project includes up to two (2) free revision rounds unless otherwise agreed in writing.',
      'A revision round means a consolidated set of reasonable changes within the original project scope.',
      'Major concept changes, new design directions after approval, additional pages, new functionality, or requests outside the agreed scope may be treated as additional work and charged separately.',
      'Additional charges and revised timelines will be communicated before the extra work begins.',
    ],
  },

  {
    heading: '7. Refund and Cancellation Policy',
    paragraphs: [
      'Cancellation requests are handled according to the stage of the project and the work already completed.',
      'Before work begins: If the client cancels before any project work has started, the advance may be refunded after deducting applicable payment processing charges or other non-recoverable costs.',
      'After work begins: If the client cancels after work has started, charges may be calculated according to the work completed and costs already incurred. Any remaining unearned amount may be refunded where applicable.',
      'Client delays: If a project cannot progress because the client does not provide required content, approvals, feedback, or access, the delivery timeline may be extended or the project may be paused. Additional work caused by significant delays may involve extra charges.',
      `Cancellation by ${site.name}: If we are unable to complete an accepted project for reasons within our control, we will discuss a revised timeline, an alternative solution, handover of completed work, or a refund of the unearned portion of the payment, as appropriate.`,
      'Payments for work already completed, approved, or delivered are generally non-refundable, subject to applicable consumer protection laws and the circumstances of the project.',
      'Nothing in this policy removes any statutory rights available to clients under applicable law.',
    ],
  },

  {
    heading: '8. Project Delivery Timeline',
    paragraphs: [
      'Project timelines are mutually agreed upon before work begins.',
      'Delivery dates may depend on project complexity, client feedback, timely approvals, availability of required materials, payments, and third-party services.',
      'Delays caused by missing information, late approvals, or circumstances outside our reasonable control may extend the delivery timeline.',
    ],
  },

  {
    heading: '9. Client Responsibilities',
    paragraphs: [
      'Clients are responsible for providing accurate project information, required text, images, logos, content, and other materials needed to complete the project.',
      'Clients must ensure that any materials supplied to us are legally permitted for use and do not infringe third-party intellectual property rights.',
      'Clients are also responsible for providing necessary approvals, access, and feedback within a reasonable time and for completing payments according to the agreed schedule.',
    ],
  },

  {
    heading: '10. Intellectual Property and Ownership',
    paragraphs: [
      `The design, text, graphics, code, and other materials on the ${site.name} website are owned by or licensed to ${site.name} unless otherwise stated. They may not be copied, distributed, or reused without appropriate permission.`,
      'Project deliverables remain subject to the agreed payment and ownership terms until full payment has been received.',
      'After full payment, the agreed final deliverables and applicable rights will be transferred or licensed to the client as specified in the project agreement. Source files and editable files will be provided where included in the agreed scope.',
      `${site.name} retains ownership of its pre-existing tools, reusable code, frameworks, templates, processes, and other materials used during project development unless otherwise agreed in writing.`,
      'Third-party fonts, images, plugins, software, templates, and other licensed assets remain subject to their respective licence terms. Separate licences or subscriptions may be required.',
    ],
  },

  {
    heading: '11. Portfolio and Promotional Rights',
    paragraphs: [
      `${site.name} may display completed projects in its portfolio, website, social media accounts, and promotional materials to demonstrate its work.`,
      'We will respect written confidentiality requirements, non-disclosure agreements, and restrictions mutually agreed upon before or during the project.',
      'Clients requiring complete confidentiality should communicate this before the project begins.',
    ],
  },

  {
    heading: '12. Domain and Hosting',
    paragraphs: [
      'Domain registration and web hosting are generally separate from our design and development charges unless specifically included in the project quotation.',
      'Where possible, domain and hosting accounts should be registered in the client’s own name and remain under the client’s control.',
      'Clients are responsible for applicable domain renewals, hosting fees, subscriptions, and third-party service charges unless otherwise agreed in writing.',
      `${site.name} is not responsible for interruptions, pricing changes, account restrictions, or service policy changes imposed by third-party providers beyond our reasonable control.`,
    ],
  },

  {
    heading: '13. Maintenance and Future Support',
    paragraphs: [
      'Website maintenance, content updates, security monitoring, backups, bug fixes, and additional development are not automatically included after project completion.',
      'Ongoing maintenance and future support may be provided under a separate agreement or quotation.',
      'Any free post-delivery support period must be confirmed in writing before the project begins.',
    ],
  },

  {
    heading: '14. Social Media and Marketing Results',
    paragraphs: [
      `${site.name} may provide social media design, management, and related digital marketing services.`,
      'We do not guarantee a specific number of followers, likes, shares, leads, sales, search engine rankings, advertising results, or return on investment.',
      'Marketing results depend on several factors, including competition, market conditions, audience behaviour, platform algorithms, advertising budgets, and client participation.',
    ],
  },

  {
    heading: '15. Third-Party Services',
    paragraphs: [
      'Our services may involve third-party platforms and providers, including domain registrars, hosting services, database providers, payment services, APIs, plugins, fonts, stock assets, and social media platforms.',
      'These services are governed by their respective terms, policies, pricing, and licensing conditions.',
      `${site.name} is not responsible for interruptions, restrictions, security incidents, or changes caused by third-party providers beyond our reasonable control.`,
    ],
  },

  {
    heading: '16. Prohibited Activities',
    paragraphs: [
      'Clients must not request or use our services for unlawful, fraudulent, misleading, harmful, or infringing activities.',
      'This includes phishing, impersonation, malware distribution, copyright infringement, fraudulent websites, deceptive advertising, or any activity prohibited under applicable law.',
      'We reserve the right to refuse, suspend, or terminate work involving such activities.',
    ],
  },

  {
    heading: '17. Confidentiality',
    paragraphs: [
      'Both parties should take reasonable steps to protect confidential business information shared during a project.',
      'Confidential information should not be disclosed to unauthorized parties except where required by law or reasonably necessary to provide the agreed services.',
      'Any additional confidentiality requirements or non-disclosure obligations should be agreed upon separately in writing.',
    ],
  },

  {
    heading: '18. Limitation of Liability',
    paragraphs: [
      `${site.name} will make reasonable efforts to provide services according to the agreed project scope and requirements.`,
      'To the extent permitted by applicable law, we are not responsible for indirect or consequential losses arising from third-party service failures, inaccurate information supplied by the client, unauthorized changes made by others, or circumstances beyond our reasonable control.',
      'To the extent legally permitted, our liability for an affected project will not exceed the fees paid for that project.',
      'Nothing in these terms excludes liability that cannot legally be excluded or limits any statutory rights available to clients.',
    ],
  },

  {
    heading: '19. Force Majeure',
    paragraphs: [
      `${site.name} will not be held responsible for delays or failure to perform obligations caused by events beyond reasonable control, including natural disasters, power failures, internet outages, government restrictions, major service disruptions, or other unforeseen events.`,
      'We will make reasonable efforts to communicate such circumstances and resume work when possible.',
    ],
  },

  {
    heading: '20. Termination of Services',
    paragraphs: [
      'Either party may request termination of a project according to the cancellation terms in these conditions and any separate project agreement.',
      `${site.name} may suspend or terminate services in cases of non-payment, unlawful project requirements, abusive behaviour, repeated failure to provide necessary information, or material violations of agreed terms.`,
      'Outstanding payments and applicable cancellation charges will remain payable according to the agreed terms and applicable law.',
    ],
  },

  {
    heading: '21. Changes to These Terms',
    paragraphs: [
      'We may update these Terms & Conditions to reflect changes in our services, business practices, or legal requirements.',
      'Updated terms will be published on this page with a revised last-updated date.',
      'Existing project agreements will continue to be governed by their agreed terms unless both parties agree otherwise or applicable law requires a different result.',
    ],
  },

  {
    heading: '22. Governing Law and Disputes',
    paragraphs: [
      `These Terms & Conditions are governed by the applicable laws of ${site.jurisdiction}.`,
      `Disputes will be handled in accordance with applicable laws and before courts of competent jurisdiction in ${site.jurisdiction}, where legally appropriate.`,
      'Nothing in these terms prevents a client from exercising any consumer rights or legal remedies available under applicable law.',
    ],
  },

  {
    heading: '23. Contact Information',
    paragraphs: [
      `For questions about these Terms & Conditions or our services, contact us: ${contact}`,
      `${site.name} is an independently operated business owned and managed by ${site.legalName}.`,
    ],
  },
];

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description={`Terms governing the use of the ${site.name} website and the digital services we provide.`}
      updated={site.lastUpdated}
      sections={sections}
    />
  );
}