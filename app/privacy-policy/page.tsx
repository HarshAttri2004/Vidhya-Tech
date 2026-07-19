import { LegalDocument, type LegalSection } from '@/app/components/LegalDocument';

const privacySections: LegalSection[] = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    paragraphs: [
      'We collect information you share directly when you contact us, request a quote, fill out a form, or work with our team.',
      'This may include your name, email address, phone number, company name, project details, billing information, and any files or messages you send us.',
      'We may also collect technical information automatically, such as IP address, browser type, device type, pages visited, referring pages, and cookie data.',
    ],
    bullets: [
      'Contact details you submit through forms, email, or calls.',
      'Project briefs, invoices, and supporting files.',
      'Analytics data that helps us understand website performance.',
      'Information shared through third-party platforms you use to reach us.',
    ],
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Information',
    paragraphs: [
      'We use the information we collect to reply to your questions, prepare quotes, deliver services, and manage ongoing projects.',
      'We also use it to improve our website, keep records, send important updates, and meet legal, tax, or accounting requirements.',
    ],
    bullets: [
      'Respond to leads, support requests, and project inquiries.',
      'Create proposals, invoices, and project updates.',
      'Improve our website, services, and content.',
      'Send marketing messages only when allowed by law or with your consent.',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies',
    paragraphs: [
      'Our website uses cookies and similar tools to improve your browsing experience.',
      'Cookies help us remember preferences, measure traffic, and understand how people use our site.',
      'You can control cookies through your browser settings. If you disable some cookies, parts of the site may not work as expected.',
    ],
    bullets: [
      'Essential cookies for site features.',
      'Analytics cookies for performance tracking.',
      'Preference cookies where needed.',
    ],
  },
  {
    id: 'third-party-services',
    title: 'Third-Party Services',
    paragraphs: [
      'We may use trusted third-party services such as hosting providers, analytics tools, email services, CRM tools, payment gateways, and social media platforms.',
      'These services may collect or process data on our behalf. Each third party has its own privacy policy, and we recommend that you review those policies before using their services.',
    ],
    bullets: [
      'Website hosting and infrastructure.',
      'Analytics and performance tracking.',
      'Email, contact forms, and customer support tools.',
      'Payment processing and invoicing tools.',
      'Social media or messaging platforms.',
    ],
  },
  {
    id: 'data-security',
    title: 'Data Security',
    paragraphs: [
      'We use reasonable technical and organizational measures to protect your information from unauthorized access, loss, misuse, or disclosure.',
      'No online system is completely secure, so we cannot guarantee absolute security. We encourage you to use strong passwords and share sensitive data only when necessary.',
    ],
    bullets: [
      'Access is limited to people who need it.',
      'We use secure tools and trusted providers.',
      'We review our systems and update controls when needed.',
    ],
  },
  {
    id: 'user-rights',
    title: 'User Rights',
    paragraphs: [
      'Depending on applicable law, you may ask us to access, correct, update, or delete your personal information.',
      'You may also withdraw consent for marketing messages at any time, or ask us to stop processing certain information where the law allows.',
    ],
    bullets: [
      'Request a copy of the information we hold about you.',
      'Ask us to correct incomplete or inaccurate information.',
      'Request deletion where we are allowed to do so.',
      'Opt out of marketing emails and promotional messages.',
    ],
  },
  {
    id: 'contact-information',
    title: 'Contact Information',
    paragraphs: [
      'If you have questions about this Privacy Policy or how we handle your data, contact us using the details below.',
    ],
    bullets: [
      'Email: vidhyatech1@gmail.com',
      'Phone: +91 7817097517',
      'Location: India',
    ],
  },
  {
    id: 'changes-to-policy',
    title: 'Changes to Policy',
    paragraphs: [
      'We may update this policy from time to time to reflect changes in our services, technology, or legal requirements.',
      'When we make changes, we will post the updated version on this page. Continued use of our website after an update means you accept the revised policy.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      badge="Privacy Policy"
      title="Privacy Policy for Vidhya Tech"
      intro={[
        'Vidhya Tech respects your privacy. This Privacy Policy explains what information we collect when you visit our website, contact our team, or use our services, and how we use that information.',
        'By using our website or sharing your details with us, you agree to the practices described in this policy. If you do not agree, please stop using the website.',
      ]}
      updatedLabel="Last updated: July 19, 2026"
      summaryTitle="Privacy at a Glance"
      summaryPoints={[
        'We only collect information that helps us answer inquiries, deliver projects, and improve our services.',
        'We may use cookies and analytics tools to understand site performance and user behavior.',
        'We do not sell your personal information as part of normal business operations.',
        'You can contact us anytime to ask about your data or privacy rights.',
      ]}
      helpText="If you have a privacy question, please contact us and we will help as quickly as we can."
      sections={privacySections}
    />
  );
}
