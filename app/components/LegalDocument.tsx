import Link from 'next/link';

import { SITE_EMAIL, SITE_PHONE } from '@/lib/seo';

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type LegalDocumentProps = {
  badge: string;
  title: string;
  intro: string[];
  updatedLabel: string;
  summaryTitle: string;
  summaryPoints: string[];
  helpText: string;
  sections: LegalSection[];
};

export function LegalDocument({
  badge,
  title,
  intro,
  updatedLabel,
  summaryTitle,
  summaryPoints,
  helpText,
  sections,
}: LegalDocumentProps) {
  return (
    <div className="bg-[#030303] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,204,0,0.16),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
            <div className="space-y-6">
              <p className="inline-flex rounded-full border border-[#ffcc00]/30 bg-[#ffcc00]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#ffcc00]">
                {badge}
              </p>

              <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                {title}
              </h1>

              <div className="space-y-4">
                {intro.map((paragraph, index) => (
                  <p key={`${index}-${paragraph}`} className="max-w-3xl text-base leading-8 text-white/70">
                    {paragraph}
                  </p>
                ))}
              </div>

              <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/45">
                {updatedLabel}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/contact" className="vt-gold-button px-6 py-3 text-sm font-black">
                  Contact Us
                </Link>
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-black text-white transition duration-200 hover:border-[#ffcc00]/40 hover:text-[#ffcc00]"
                >
                  Email Us
                </a>
              </div>
            </div>

            <aside className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-[0_30px_80px_rgba(0,0,0,.35)] backdrop-blur">
              <h2 className="text-sm font-black uppercase tracking-[0.25em] text-[#ffcc00]">
                {summaryTitle}
              </h2>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-white/72">
                {summaryPoints.map((point, index) => (
                  <li key={`${index}-${point}`} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#ffcc00] shadow-[0_0_12px_rgba(255,204,0,0.9)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white/45">
                  Need Help?
                </p>
                <p className="mt-3 text-sm leading-7 text-white/70">{helpText}</p>
                <div className="mt-4 grid gap-2 text-sm">
                  <a
                    href={`mailto:${SITE_EMAIL}`}
                    className="transition-colors hover:text-[#ffcc00]"
                  >
                    {SITE_EMAIL}
                  </a>
                  <a
                    href="tel:+917817097517"
                    className="transition-colors hover:text-[#ffcc00]"
                  >
                    {SITE_PHONE}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[280px_1fr]">
          <nav className="lg:sticky lg:top-28 self-start rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_60px_rgba(0,0,0,.22)]">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#ffcc00]">
              On This Page
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/65">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-white/10 hover:bg-white/5 hover:text-white"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-6">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_60px_rgba(0,0,0,.22)] md:p-8"
              >
                <h2 className="text-2xl font-black leading-tight text-white">
                  {section.title}
                </h2>

                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={`${index}-${paragraph}`} className="text-base leading-8 text-white/70">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.bullets && section.bullets.length > 0 ? (
                  <ul className="mt-6 space-y-3 text-sm leading-7 text-white/70">
                    {section.bullets.map((bullet, index) => (
                      <li key={`${index}-${bullet}`} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#ffcc00] shadow-[0_0_12px_rgba(255,204,0,0.9)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
