import type { Metadata } from 'next';

import { buildRouteMetadata } from '@/lib/seo';

export const metadata: Metadata = buildRouteMetadata({
  title: 'Terms & Conditions',
  description:
    'Review Vidhya Tech Terms & Conditions for service scope, payments, timelines, revisions, refunds, cancellation, and governing law in India.',
  path: '/terms-and-conditions',
  keywords: [
    'terms and conditions',
    'service agreement',
    'project payments',
    'refund policy',
    'cancellation policy',
  ],
});

export default function TermsAndConditionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
