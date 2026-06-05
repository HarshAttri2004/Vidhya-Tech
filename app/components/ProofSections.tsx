'use client';

import Link from 'next/link';
import {
  BUSINESS_TYPES,
  CERTIFICATES,
  CLIENT_VALUE_CARDS,
  SITE_STAT_CARDS,
} from '@/lib/site-data';
import { SITE_EMAIL } from '@/lib/seo';

const industryCards = BUSINESS_TYPES.map((industry) => {
  const descriptions: Record<string, string> = {
    'Schools and educational institutions':
      'Admission sites, course pages, and parent-friendly school portals.',
    'E-commerce brands':
      'Product pages, checkout flows, and conversion-focused storefronts.',
    'Fitness studios and coaches':
      'Booking sites, membership pages, and trainer lead capture flows.',
    'Restaurants and cafes':
      'Menus, reservations, local SEO, and online ordering support.',
    'Service businesses':
      'Lead-focused websites, quote forms, and trust-building service pages.',
    'Startups and creators':
      'Fast launch pages, personal brands, and clear sales journeys.',
  };

  return {
    title: industry,
    result: descriptions[industry],
  };
});

const deliveryPrinciples = [
  'Discovery first process',
  'Responsive design delivery',
  'AI ready business workflows',
];

export function ClientsShowcase() {
  return (
    <section id="clients" className="border-b border-white/10 bg-[#030303] px-5 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Industries"
          title="Industries We Build For"
          text="A clear view of the business types we support with design, development, and automation."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industryCards.map((client) => (
            <article key={client.title} className="rounded-lg border border-white/12 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#ffcc00]/65">
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-[#ffcc00] text-lg font-black text-black">
                  {client.title.slice(0, 2).toUpperCase()}
                </div>
                <span className="rounded-full border border-[#ffcc00]/35 px-3 py-1 text-xs font-black uppercase text-[#ffcc00]">
                  Supported
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-black leading-tight text-white">{client.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{client.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SocialProofSection() {
  return (
    <section id="proof" className="relative overflow-hidden border-b border-white/10 bg-[#080808] px-5 py-24 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,204,0,.14),transparent_34%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Studio Stats"
          title="Numbers That Support The Story"
          text="A quick snapshot of current project counts, service lines, and the response time we aim to keep."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {SITE_STAT_CARDS.map((stat) => (
            <article key={stat.label} className="rounded-lg border border-white/12 bg-black/35 p-7 text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#ffcc00]/40 bg-[#ffcc00]/10 text-sm font-black tracking-[0.2em] text-[#ffcc00]">
                {stat.icon}
              </div>
              <p className="text-4xl font-black text-[#ffcc00]">{stat.number}</p>
              <p className="mt-3 text-sm font-bold uppercase text-white/58">{stat.label}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {deliveryPrinciples.map((item) => (
            <div key={item} className="rounded-lg border border-[#ffcc00]/25 bg-[#ffcc00]/10 px-5 py-4 text-sm font-bold text-white">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BusinessStorySection() {
  return (
    <section id="story" className="border-b border-white/10 bg-[#050505] px-5 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-lg font-black uppercase text-[#ffcc00] sm:text-xl">Our Business Story</p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">
            A small agency system built for practical digital growth.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/64">
            Vidhya Tech started with straightforward websites and grew into a wider mix of design, development, automation, and marketing support.
          </p>
          <Link href="/contact" className="vt-gold-button mt-8 px-7 py-3 text-sm font-black">
            Start A Project
          </Link>
        </div>

        <div className="grid gap-5">
          {[
            {
              year: '01',
              title: 'Started With Practical Websites',
              text: 'The early focus was simple: build clean websites that help small brands look credible and generate enquiries.',
            },
            {
              year: '02',
              title: 'Added Automation And AI',
              text: 'As client needs grew, form flows, chatbot logic, AI content support, and workflow automation became part of delivery.',
            },
            {
              year: '03',
              title: 'Built A Full Growth System',
              text: 'Today the service mix spans design, development, marketing, video, and AI integration so launches feel connected.',
            },
          ].map((step) => (
            <article key={step.title} className="grid gap-5 rounded-lg border border-white/12 bg-white/[0.045] p-6 sm:grid-cols-[84px_1fr]">
              <div className="grid h-20 w-20 place-items-center rounded-md bg-[#ffcc00] text-2xl font-black text-black">
                {step.year}
              </div>
              <div>
                <h3 className="text-2xl font-black leading-tight text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CertificatesSection() {
  return (
    <section id="certificates" className="border-b border-white/10 bg-[#030303] px-5 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Certificates"
          title="Credential Style Cards"
          text="Verified training and skills that support the work we deliver."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {CERTIFICATES.map((certificate) => (
            <article key={certificate.title} className="relative overflow-hidden rounded-lg border border-[#ffcc00]/30 bg-[linear-gradient(145deg,rgba(255,204,0,.16),rgba(255,255,255,.04)_48%,rgba(0,0,0,.2))] p-6">
              <div className="absolute right-5 top-5 h-16 w-16 rounded-full border-4 border-[#ffcc00]/45" />
              <p className="text-base font-black uppercase text-[#ffcc00]">Verified Skill</p>
              <div className="mt-6 overflow-hidden rounded-xl bg-white p-2">
                <img src={certificate.img} alt={certificate.title} className="h-[180px] w-full rounded-lg object-contain" />
              </div>
              <h3 className="mt-8 text-2xl font-black leading-tight text-white">{certificate.title}</h3>
              <p className="mt-3 text-sm font-bold text-white/72">{certificate.subtitle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-[#080808] px-5 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="What Clients Appreciate"
          title="Delivery Themes"
          text="The practical themes we hear most often: communication, clear design, and dependable follow-through."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {CLIENT_VALUE_CARDS.map((card, index) => (
            <article key={`${card.title}-${index}`} className="rounded-lg border border-white/12 bg-white/[0.045] p-7">
              <div className="flex items-center justify-between gap-4">
                <div className={`grid h-12 w-12 place-items-center rounded-full ${card.avatarClass} text-sm font-black text-white`}>
                  {card.initials}
                </div>
                <span className="rounded-full border border-[#ffcc00]/35 px-3 py-1 text-xs font-black uppercase text-[#ffcc00]">
                  Theme
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-black text-white">{card.title}</h3>
              <p className="mt-1 text-sm font-bold text-[#ffcc00]">{card.context}</p>
              <p className="mt-4 text-base leading-8 text-white/72">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocationSection() {
  return (
    <section id="location" className="border-t border-white/10 bg-[#05080c] px-5 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-lg font-black uppercase text-[#ffcc00] sm:text-xl">Location</p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">India Based, Remote Friendly</h2>
          <p className="mt-6 text-base leading-8 text-white/65">
            Vidhya Tech works from India and supports online business projects through calls, shared documents, and clear delivery checkpoints.
          </p>

          <div className="mt-8 grid gap-4 text-sm text-white/70">
            <a href="tel:+917817097517" className="transition hover:text-[#ffcc00]">Phone: +91 7817097517</a>
            <a href={`mailto:${SITE_EMAIL}`} className="transition hover:text-[#ffcc00]">Email: {SITE_EMAIL}</a>
            <p>Service Area: India and remote clients</p>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-white/12 bg-[#090909] p-6">
          <div className="absolute inset-0 opacity-40 vt-map-grid" />
          <div className="absolute left-[48%] top-[48%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ffcc00]/45 bg-[#ffcc00]/10" />
          <div className="absolute left-[48%] top-[48%] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffcc00] shadow-[0_0_40px_rgba(255,204,0,.9)]" />
          <div className="relative z-10 mt-auto flex h-full min-h-[312px] flex-col justify-end">
            <div className="max-w-sm rounded-lg border border-white/12 bg-black/70 p-5 backdrop-blur">
              <p className="text-base font-black uppercase text-[#ffcc00]">Office Marker</p>
              <h3 className="mt-2 text-2xl font-black text-white">Vidhya Tech</h3>
              <p className="mt-3 text-sm leading-7 text-white/62">Digital services delivered from India with remote-first project communication.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-lg font-black uppercase text-[#ffcc00] sm:text-xl">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-white/65">{text}</p>
    </div>
  );
}
