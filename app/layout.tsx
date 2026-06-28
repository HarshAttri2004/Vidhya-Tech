import Script from "next/script";
import type { Metadata } from 'next';
import './globals.css';
// 👇 NEW: Header aur Footer import karein
import Header from './components/Header';
import Footer from './components/Footer';

import {
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_FULL_TITLE,
  SITE_KEYWORDS,
  SITE_LINKEDIN,
  SITE_NAME,
  SITE_PHONE,
  SITE_URL,
  SITE_URL_OBJECT,
  SITE_OG_IMAGE,
  SITE_TWITTER_IMAGE,
  absoluteUrl,
} from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: SITE_URL_OBJECT,
  title: {
    default: SITE_FULL_TITLE,
    template: '%s | Vidhya Tech',
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
  manifest: '/manifest.json',
  
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'technology',
  keywords: SITE_KEYWORDS,
  
  verification: {
    // google: 'your-google-verification-code',
  },
  
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': [
        { url: '/feed.xml', title: `${SITE_NAME} Blog` },
      ],
    },
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: SITE_NAME,
    title: SITE_FULL_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: SITE_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_FULL_TITLE,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_FULL_TITLE,
    description: SITE_DESCRIPTION,
    images: [SITE_TWITTER_IMAGE],
    creator: '@vidhyatech',
    site: '@vidhyatech',
  },
  
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  
  colorScheme: 'light dark',
  
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
    date: true,
    url: true,
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': SITE_URL,
  name: SITE_NAME,
  alternateName: ['Vidhya Tech', 'vidhyatech', 'Vidhya Tech Agency'],
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: absoluteUrl('/logo.png'),
    width: 512,
    height: 512,
  },
  image: absoluteUrl('/logo.png'),
  description: SITE_DESCRIPTION,
  email: SITE_EMAIL,
  telephone: SITE_PHONE,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
  },
  sameAs: [SITE_LINKEDIN],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  foundingDate: '2023',
  knowsAbout: [
    'Web Development',
    'AI Automation',
    'Digital Marketing',
    'Software Development',
    'SEO',
  ],
  areaServed: 'IN',
  serviceType: ['Web Development', 'AI Automation', 'Digital Marketing'],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': SITE_URL,
  name: SITE_NAME,
  url: SITE_URL,
  alternateName: SITE_NAME,
  description: SITE_DESCRIPTION,
  isPartOf: {
    '@id': SITE_URL,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/?s={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/logo.png'),
    },
  },
};

const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': SITE_URL,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: absoluteUrl('/logo.png'),
    width: 512,
    height: 512,
  },
  description: SITE_DESCRIPTION,
  email: SITE_EMAIL,
  telephone: SITE_PHONE,
  areaServed: 'IN',
  availableLanguage: ['en', 'hi'],
  sameAs: [SITE_LINKEDIN],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        <script
          key="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        
        <script
          key="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        
        <script
          key="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd),
          }}
        />
      </head>

      {/* 👇 NEW: body classes for layout structure */}
      <body className="bg-black text-white antialiased min-h-screen flex flex-col">
        
        {/* 👇 NEW: Global Header added here */}
        <Header />

        {/* 👇 NEW: main wrapper with pt-24 added so content doesn't hide behind fixed header */}
        <main className="flex-1 pt-24">
          {children}
        </main>

        {/* 👇 NEW: Global Footer added here */}
        <Footer />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8H42VMYLK4"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8H42VMYLK4');
          `}
        </Script>
      </body>
    </html>
  );
}