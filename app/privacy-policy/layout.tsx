import type { Metadata } from 'next';

import { buildRouteMetadata } from '@/lib/seo';

export const metadata: Metadata = buildRouteMetadata({
  title: 'Privacy Policy',
  description:
    'Read how Vidhya Tech collects, uses, stores, and protects information shared through our website and services.',
  path: '/privacy-policy',
  keywords: ['privacy policy', 'data protection', 'cookies policy', 'user rights'],
});

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
