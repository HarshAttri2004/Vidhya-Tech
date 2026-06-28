import Link from 'next/link';
import { SITE_EMAIL } from '@/lib/seo';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030303] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.2fr_.8fr_.9fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3 text-xl font-black">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-[#ffcc00] text-black">
              VT
            </span>
            Vidhya <span className="text-[#ffcc00]">Tech</span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/58">
            Premium websites, AI automation, marketing systems, and digital launch support for modern brands.
          </p>

          <div className="mt-8">
            <h4 className="text-sm font-black uppercase text-[#ffcc00]">Follow Us</h4>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg shadow-sky-500/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#166fe5]"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 4.99 3.66 9.13 8.44 9.92v-7.03H7.9v-2.9h2.54V9.41c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.9h-2.32v7.03C18.34 21.2 22 17.06 22 12.07z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/vidhyatech/ "
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-lg shadow-blue-800/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#0959a8]"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24V7.98h5V24H0zm7.5-16.02h4.78v2.18h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.65V24h-5V15.5c0-2.04-.04-4.67-2.85-4.67-2.85 0-3.28 2.23-3.28 4.53V24h-5V7.98z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/vidhyatechofficial"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#f77737] via-[#e1306c] to-[#c13584] text-white shadow-lg shadow-pink-500/15 transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.056 1.96.24 2.42.4.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.16.46.34 1.27.4 2.42.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.24 1.96-.4 2.42-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.16-1.27.34-2.42.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.96-.24-2.42-.4-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.16-.46-.34-1.27-.4-2.42C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.06-1.17.24-1.96.4-2.42.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.16 1.27-.34 2.42-.4C8.42 2.17 8.8 2.16 12 2.16zm0-2.16C8.74 0 8.32.01 7.05.07 5.74.14 4.62.33 3.7.65c-.96.33-1.78.77-2.6 1.6C.27 3.5-.17 4.32.16 5.28c.32.93.51 2.05.58 3.36C.76 9.68.77 10.1.77 12s-.01 2.32-.03 3.64c-.07 1.31-.26 2.43-.58 3.36-.33.96-.77 1.78-1.6 2.6-.81.81-1.64 1.26-2.6 1.6-.93.32-2.05.51-3.36.58C.32 23.99.74 24 2 24h20c1.26 0 1.68-.01 2.99-.07 1.31-.07 2.43-.26 3.36-.58.96-.33 1.78-.77 2.6-1.6.82-.82 1.26-1.64 1.6-2.6.32-.93.51-2.05.58-3.36.06-1.32.07-1.74.07-3.99s-.01-2.68-.07-3.99c-.07-1.31-.26-2.43-.58-3.36-.33-.96-.77-1.78-1.6-2.6-.82-.82-1.64-1.26-2.6-1.6-.93-.32-2.05-.51-3.36-.58C19.68.01 19.26 0 18 0H6z" />
                  <path d="M12 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8z" />
                  <circle cx="18.36" cy="5.64" r="1.44" />
                </svg>
              </a>
              <a
                href="https://wa.me/917817097517"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe57]"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.149-.672.149-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.1-.198.05-.372-.025-.521-.075-.149-.672-1.612-.92-2.207-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347z" />
                  <path d="M12.002 2.003C6.486 2.003 2.002 6.488 2.002 12.003c0 2.114.694 4.066 1.87 5.683L2 22l4.41-1.159a9.964 9.964 0 0 0 5.592 1.592c5.516 0 10-4.485 10-10s-4.484-10-9.998-10zm0 18.2c-1.695 0-3.285-.48-4.644-1.307l-.33-.194-2.619.689.698-2.554-.215-.363A7.995 7.995 0 0 1 4.002 12.002c0-4.411 3.59-8.002 8-8.002s8 3.591 8 8.002-3.591 7.998-8 7.998z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase text-[#ffcc00]">Quick Links</h3>
          <div className="mt-5 grid gap-3 text-sm text-white/62">
            <Link href="/#home" className="transition hover:text-[#ffcc00]">Home</Link>
            <Link href="/services" className="transition hover:text-[#ffcc00]">Services</Link>
            <Link href="/design" className="transition hover:text-[#ffcc00]">Design</Link>
            <Link href="/portfolio" className="transition hover:text-[#ffcc00]">Portfolio</Link>
            <Link href="/pricing" className="transition hover:text-[#ffcc00]">Pricing</Link>
            <Link href="/contact" className="transition hover:text-[#ffcc00]">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase text-[#ffcc00]">Contact Info</h3>
          <div className="mt-5 grid gap-3 text-sm text-white/62">
            <a href={`mailto:${SITE_EMAIL}`} className="transition hover:text-[#ffcc00]">{SITE_EMAIL}</a>
            <a href="tel:+917817097517" className="transition hover:text-[#ffcc00]">+91 7817097517</a>
            <p>India</p>
          </div>

        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-white/45">
        <p>Copyright 2026 Vidhya Tech. All rights reserved.</p>
      </div>
    </footer>
  );
}
