import { LegalDocument, type LegalSection } from '@/app/components/LegalDocument';

const termsSections: LegalSection[] = [
  {
    id: 'acceptance-of-terms',
    title: 'Acceptance of Terms',
    paragraphs: [
      'By visiting our website, requesting a quote, or hiring Vidhya Tech for any service, you agree to these Terms & Conditions.',
      'If you do not agree, please do not use our website or services.',
    ],
  },
  {
    id: 'services',
    title: 'Services',
    paragraphs: [
      'We provide website design and development, AI automation, digital marketing, software solutions, video editing, and related creative services.',
      'The exact scope, deliverables, features, and support terms for each project will be listed in a proposal, invoice, or written agreement.',
    ],
    bullets: [
      'We may use trusted third-party tools when needed.',
      'We may decline work that is illegal, unsafe, or outside our capabilities.',
    ],
  },
  {
    id: 'payments',
    title: 'Payments',
    paragraphs: [
      'Payment terms, pricing, and milestones are defined in the proposal or invoice for each project.',
      'Unless stated otherwise, work may start after the agreed advance payment is received.',
    ],
    bullets: [
      'All fees must be paid on time.',
      'Late payments may pause the project.',
      'Taxes, bank charges, and payment gateway fees are extra unless clearly included.',
    ],
  },
  {
    id: 'project-timelines',
    title: 'Project Timelines',
    paragraphs: [
      'We provide estimated timelines based on the agreed scope and the information available at the start of the project.',
      'Timelines may change if you delay approvals, content, feedback, access, or payment, or if the scope changes.',
    ],
    bullets: [
      'Deadlines are estimates, not guarantees, unless we agree in writing.',
      'We will keep you informed if the timeline changes.',
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    paragraphs: [
      'After full payment, you own the final deliverables that we agree to transfer to you.',
      'We may keep ownership of our pre-existing tools, templates, code libraries, design systems, and know-how.',
    ],
    bullets: [
      'Third-party assets remain subject to their original licenses.',
      'We may showcase non-confidential work in our portfolio unless you ask us not to.',
    ],
  },
  {
    id: 'revisions',
    title: 'Revisions',
    paragraphs: [
      'The number of revisions included in a project will be stated in the proposal or invoice.',
      'Changes outside the approved scope or extra revision rounds may be billed separately.',
    ],
  },
  {
    id: 'client-responsibilities',
    title: 'Client Responsibilities',
    paragraphs: [
      'You agree to provide accurate information, approved content, and timely feedback.',
      'You are responsible for making sure that content, images, and other materials you give us can be used legally.',
    ],
    bullets: [
      'Share project details, brand assets, and login access when needed.',
      'Review and approve deliverables on time.',
      'Keep passwords and access details secure.',
      'Follow all applicable laws and platform rules.',
    ],
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    paragraphs: [
      'To the fullest extent allowed by law, Vidhya Tech is not responsible for indirect, incidental, special, or consequential losses, including lost profits or lost data.',
      'Our total liability for any claim will not exceed the amount you paid us for the specific service that gave rise to the claim.',
    ],
  },
  {
    id: 'refund-policy',
    title: 'Refund Policy',
    paragraphs: [
      'Refunds are handled on a case-by-case basis and depend on the work already completed.',
      'Unless we agree otherwise in writing, advance payments are non-refundable once work has started, and third-party costs are not refundable.',
    ],
    bullets: [
      'Approved and completed work is not refundable.',
      'Refunds, if any, will be limited to the unused portion of the project.',
    ],
  },
  {
    id: 'cancellation-policy',
    title: 'Cancellation Policy',
    paragraphs: [
      'Either party may cancel a project with written notice.',
      'If you cancel after work has begun, you must pay for the work completed and any approved expenses up to the cancellation date.',
    ],
    bullets: [
      'Deliverables completed before cancellation remain payable.',
      'We may suspend or cancel work if payments are overdue or instructions are not provided.',
    ],
  },
  {
    id: 'governing-law-india',
    title: 'Governing Law (India)',
    paragraphs: [
      'These Terms are governed by the laws of India.',
      'Any dispute relating to our services will be subject to the courts in India, unless the parties agree otherwise in writing.',
    ],
  },
  {
    id: 'contact-information',
    title: 'Contact Information',
    paragraphs: [
      'If you have questions about these Terms & Conditions, contact us using the details below.',
    ],
    bullets: [
      'Email: vidhyatech1@gmail.com',
      'Phone: +91 7817097517',
      'Location: India',
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalDocument
      badge="Terms & Conditions"
      title="Terms & Conditions for Vidhya Tech"
      intro={[
        'These Terms & Conditions explain how we work with clients, what we deliver, how payments and timelines are handled, and what both sides can expect during a project.',
        'By using our website or hiring us, you agree to follow these terms. Please read them carefully before starting a project.',
      ]}
      updatedLabel="Last updated: July 19, 2026"
      summaryTitle="Terms at a Glance"
      summaryPoints={[
        'Project scope, prices, and timelines are defined in the proposal or invoice.',
        'Payments must be made on time so work can continue without delays.',
        'Final ownership transfers after full payment, except for third-party or pre-existing assets.',
        'These Terms are governed by the laws of India.',
      ]}
      helpText="If you want to discuss a project term before we start, contact us and we can clarify it in writing."
      sections={termsSections}
    />
  );
}
