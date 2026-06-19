'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';
import VoiceAgent from './components/VoiceAgent';
import { heroSlides } from './heroSlides';
import {
  CERTIFICATES,
  CLIENT_VALUE_CARDS,
  FEATURED_PROJECTS,
  SITE_STAT_CARDS,
  SITE_STATS,
  TEAM_MEMBERS,
} from '@/lib/site-data';
// import { img } from 'framer-motion/client';
// Services Data
const services = [
  {
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    title: 'Web Development',
    description:
      'We build fast, responsive websites that engage and convert your business needs.',
    color: 'from-blue-500/20 to-blue-600/20',
  },

  {
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    title: 'AI Automation',
    description:
      'Automate your business workflows with cutting-edge AI solutions.',
    color: 'from-purple-500/20 to-purple-600/20',
  },

  {
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    title: 'Digital Marketing',
    description:
      'Grow your brand with result-driven marketing strategies.',
    color: 'from-pink-500/20 to-pink-600/20',
  },

  {
    image:
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
    title: 'Video Editing',
    description:
      'Professional video editing services for YouTube, Reels and social media.',
    color: 'from-cyan-500/20 to-cyan-600/20',
  },

  {
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop',
    title: 'Social Media Management',
    description:
      'We manage your social media accounts and boost your online presence.',
    color: 'from-orange-500/20 to-orange-600/20',
  },

  {
    image:
      'https://images.unsplash.com/photo-1674027392884-7513d1e5e0b6?q=80&w=1200&auto=format&fit=crop',
    title: 'AI Integration',
    description:
      'Integrate AI into your business for smarter solutions.',
    color: 'from-green-500/20 to-green-600/20',
  },
];

// Portfolio Projects
const portfolioProjects = FEATURED_PROJECTS;
const teamMembers = TEAM_MEMBERS;

// Animated Circle Component with Enhanced Zoom
const AnimatedCircle = ({ delay = 0, size = 300, opacity = 0.1 }) => {
  return (
    <motion.div
      className="absolute rounded-full border border-[#ffcc00]/40 bg-[#ffcc00]/8 blur-sm"
      style={{
        width: size,
        height: size,

      }}
      animate={{
        scale: [1, 1.5, 0.8, 1],
        opacity: [opacity, opacity * 2, opacity * 0.5, opacity],
      }}
      transition={{
        duration: 6,
        delay: delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

// Hero Carousel Component
const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-[500px] md:h-[650px] overflow-visible">


      {/* Background Glow */}
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#ffcc00]/60 bg-[#ffcc00]/20 blur-3xl z-0 shadow-[0_0_120px_rgba(255,204,0,0.4)]" />

      {/* Animated Ring */}
      <motion.div
        className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border-2 border-[#ffcc00]/60 z-0 shadow-[0_0_80px_rgba(255,204,0,0.3)]"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentIndex === index ? 1 : 0,
            scale: currentIndex === index ? 1 : 0.96,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          {/* Main Card */}
          <motion.div
            className="relative z-10 w-full max-w-[420px] h-[280px] md:h-[420px] rounded-[24px] overflow-hidden border border-white/20"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Image */}
            <Image
              src={slide.image}
              alt={slide.title || 'Hero slide'}
              className="w-full h-full object-cover"
              width={600}
              height={500}
              quality={60}
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" /> */}

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10">
              <p className="text-[#ffcc00] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-2">
                {slide.label}
              </p>

              <h3 className="text-2xl md:text-4xl font-black text-bl leading-tight mb-3">
                {slide.title}
              </h3>

              <p className="text-sm md:text-base text-[#ffcc00] max-w-md leading-relaxed">
                {slide.text}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-5 flex gap-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentIndex === index ? "true" : "false"}
            className={`transition-all duration-300 rounded-full ${currentIndex === index
                ? "w-10 h-3 bg-[#ffcc00]"
                : "w-3 h-3 bg-white/40"
              }`}
          />
        ))}
      </div>
    </div>
  );
};
// Animated Stats Component (now static for faster first paint)
const AnimatedStats = () => {
  const stats = [
    { number: SITE_STATS.projects, label: 'Projects Completed' },
    { number: SITE_STATS.clients, label: 'Happy Clients' },
    { number: SITE_STATS.years, label: 'Years Experience' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 pt-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl md:text-5xl font-black text-[#ffcc00]">{stat.number}</div>
          <p className="text-sm text-white/60 mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-hidden">
      <Header />

      {/* ============ HERO SECTION ============ */}
      <section className="relative overflow-hidden flex-1 px-5 py-16 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
            {/* Left Content (static for fast first paint) */}
            <div className="space-y-6 z-10">
              <div className="text-sm font-bold text-[#ffcc00] uppercase tracking-widest inline-block px-4 py-2 border border-[#ffcc00]/30 rounded-full">
                Digital Solutions That Drive Real Growth
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                Vidhya Tech -{' '}
                <span className="text-[#ffcc00] block">Web Development & AI Agency in India</span>
              </h1>

              <p className="text-lg text-white/70 max-w-lg leading-relaxed">
                Vidhya Tech is a leading web development and AI automation agency in India, helping businesses grow with modern websites, digital marketing, and smart technology solutions.
              </p>
              {/* SEO hidden text */}
              <p className="hidden">
                Vidhya Tech offers web development, AI automation, digital marketing,
                social media management, and video editing services in India.
              </p>

              {/* Stats */}
              <AnimatedStats />

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-8 flex-wrap">
                <Link
                  href="/services"
                  className="vt-gold-button px-8 py-3 font-black rounded-lg hover:scale-105 transition-transform"
                >
                  Our Services
                </Link>
                <Link
                  href="/portfolio"
                  className="border-2 border-[#ffcc00] px-8 py-3 font-black rounded-lg hover:bg-[#ffcc00] hover:text-black transition-all duration-300"
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* Right Carousel */}
            <div>
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES SECTION ============ */}
      {/* SERVICES SECTION */}
      <section className="w-full bg-black py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-black text-white">
              Our <span className="text-yellow-400">Services</span>
            </h2>

            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              Complete digital solutions to grow your business
              and deliver measurable results.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="group rounded-[28px] overflow-hidden border border-blue-500/40 bg-[#07152c] hover:scale-[1.02] transition duration-300">

              {/* Image */}
              <div className="relative h-[180px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600&auto=format&fit=crop"
                  alt="Web Development"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  width={600}
                  height={180}
                  quality={60}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07152c] to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-blue-600/30 border border-blue-400 flex items-center justify-center text-xs font-black tracking-[0.2em] text-white mb-4">
                  WEB
                </div>

                <h3 className="text-white text-2xl font-bold mb-3">
                  Web Development
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  We build fast, responsive websites that engage and
                  convert your business needs.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group rounded-[28px] overflow-hidden border border-purple-500/40 bg-[#210433] hover:scale-[1.02] transition duration-300">

              <div className="relative h-[180px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop"
                  alt="AI Automation"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  width={600}
                  height={180}
                  quality={60}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#210433] to-transparent" />
              </div>

              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-purple-600/30 border border-purple-400 flex items-center justify-center text-xs font-black tracking-[0.2em] text-white mb-4">
                  AI
                </div>

                <h3 className="text-white text-2xl font-bold mb-3">
                  AI Automation
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Automate your business workflows with cutting-edge
                  AI solutions.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group rounded-[28px] overflow-hidden border border-pink-500/40 bg-[#330017] hover:scale-[1.02] transition duration-300">

              <div className="relative h-[180px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
                  alt="Digital Marketing"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  width={600}
                  height={180}
                  quality={60}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#330017] to-transparent" />
              </div>

              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-pink-600/30 border border-pink-400 flex items-center justify-center text-xs font-black tracking-[0.2em] text-white mb-4">
                  MKT
                </div>

                <h3 className="text-white text-2xl font-bold mb-3">
                  Digital Marketing
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Grow your brand with result-driven marketing
                  strategies.
                </p>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="group rounded-[28px] overflow-hidden border border-cyan-500/40 bg-[#03242b] hover:scale-[1.02] transition duration-300">

              <div className="relative h-[180px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600&auto=format&fit=crop"
                  alt="Video Editing"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  width={600}
                  height={180}
                  quality={60}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#03242b] to-transparent" />
              </div>

              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-cyan-600/30 border border-cyan-400 flex items-center justify-center text-xs font-black tracking-[0.2em] text-white mb-4">
                  VID
                </div>

                <h3 className="text-white text-2xl font-bold mb-3">
                  Video Editing
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Professional video editing services for YouTube,
                  Reels and social media.
                </p>
              </div>
            </div>

            {/* CARD 5 */}
            <div className="group rounded-[28px] overflow-hidden border border-orange-500/40 bg-[#2b1200] hover:scale-[1.02] transition duration-300">

              <div className="relative h-[180px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=600&auto=format&fit=crop"
                  alt="Social Media"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  width={600}
                  height={180}
                  quality={60}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2b1200] to-transparent" />
              </div>

              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-orange-600/30 border border-orange-400 flex items-center justify-center text-xs font-black tracking-[0.2em] text-white mb-4">
                  SOC
                </div>

                <h3 className="text-white text-2xl font-bold mb-3">
                  Social Media Management
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  We manage your social media accounts and boost
                  your online presence.
                </p>
              </div>
            </div>

            {/* CARD 6 */}
            <div className="group rounded-[28px] overflow-hidden border border-green-500/40 bg-[#03240f] hover:scale-[1.02] transition duration-300">

              <div className="relative h-[180px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=600&auto=format&fit=crop"
                  alt="AI Integration"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  width={600}
                  height={180}
                  quality={60}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#03240f] to-transparent" />
              </div>

              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-green-600/30 border border-green-400 flex items-center justify-center text-xs font-black tracking-[0.2em] text-white mb-4">
                  INT
                </div>

                <h3 className="text-white text-2xl font-bold mb-3">
                  AI Integration
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Integrate AI into your business for smarter
                  solutions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      
    {/* ============ UNIQUE AGENCY TECH STACK & PORTFOLIO CTA ============ */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Background Subtle Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#ffcc00]/[0.02] to-black pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.p className="text-sm font-bold text-[#ffcc00] uppercase tracking-[0.3em] mb-4 inline-block px-5 py-2 border border-[#ffcc00]/30 rounded-full bg-[#ffcc00]/5">
              OUR DIGITAL ARSENAL
            </motion.p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-white">
              Tools That Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] to-[#ffaa00]">Results</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              We combine cutting-edge development frameworks with powerful marketing tools and AI integrations to build scalable, high-converting digital ecosystems.
            </p>
          </motion.div>
        </div>

        {/* INFINITE SCROLLING MARQUEES */}
        <div className="relative w-full flex flex-col gap-6 md:gap-8 mb-20 overflow-hidden py-4">
          {/* Fading Edges for Marquee */}
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-black via-transparent to-black" />

          {/* Row 1: Development Stack (Moves Left) */}
          <div className="flex w-max">
            <motion.div
              className="flex gap-6 md:gap-8 px-3 md:px-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            >
              {[
                'React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'TypeScript', 'Vercel', 'Node.js',
                // Duplicate for infinite loop illusion
                'React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'TypeScript', 'Vercel', 'Node.js'
              ].map((tech, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/[0.01] backdrop-blur-sm whitespace-nowrap"
                >
                  <div className="w-2 h-2 rounded-full bg-[#ffcc00] shadow-[0_0_10px_#ffcc00]" />
                  <span className="text-lg font-bold text-white/90">{tech}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Marketing & AI Stack (Moves Right) */}
          <div className="flex w-max justify-end" style={{ transform: "translateX(-50%)" }}>
            <motion.div
              className="flex gap-6 md:gap-8 px-3 md:px-4"
              animate={{ x: ["0%", "50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            >
              {[
                'Morden Websites', 'Meta Ads', 'Google Analytics', 'SEO Optimization', 'WhatsApp AI Bots', 'Figma Design', 'Video Editing', 'Lead Gen',
                // Duplicate for infinite loop illusion
                'Morden Websites', 'Meta Ads', 'Google Analytics', 'SEO Optimization', 'WhatsApp AI Bots', 'Figma Design', 'Video Editing', 'Lead Gen'
              ].map((tech, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/[0.01] backdrop-blur-sm whitespace-nowrap"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  <span className="text-lg font-bold text-white/90">{tech}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Premium CTA Banner */}
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="relative rounded-3xl overflow-hidden border border-[#ffcc00]/30 bg-gradient-to-br from-[#1a1a1a] to-black p-8 md:p-12 shadow-[0_0_50px_rgba(255,204,0,0.05)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Glow inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffcc00]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                  Want to see these technologies in action?
                </h3>
                <p className="text-gray-400 text-base md:text-lg">
                  Explore how we've used our digital arsenal to build high-performing websites and successful marketing campaigns for our clients.
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <Link
                  href="/portfolio"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-black text-black bg-[#ffcc00] rounded-xl overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,204,0,0.3)] hover:shadow-[0_0_30px_rgba(255,204,0,0.5)]"
                >
                  {/* Hover light sweep effect */}
                  <div className="absolute inset-0 -translate-x-full bg-white/30 skew-x-12 group-hover:animate-[shimmer_1.5s_infinite]" />
                  <span className="relative">Explore Full Portfolio</span>
                  <svg className="relative w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Global Keyframes for Shimmer effect (Add this if you don't have it in your globals.css, or tailwind config) */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes shimmer {
            100% { transform: translateX(200%); }
          }
        `}} />
      </section>

      {/* ============ STATS BAND ============ */}
      {/* ============ HOW WE GROW YOUR BUSINESS (PROCESS ARC) ============ */}
      <section className="px-5 py-24 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 opacity-20 pointer-events-none flex justify-center items-center">
          <motion.div
            className="w-[800px] h-[400px] bg-[#ffcc00] rounded-[100%] blur-[150px] opacity-10"
            animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-24 md:mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.p className="text-sm font-bold text-[#ffcc00] uppercase tracking-[0.3em] mb-4 inline-block px-5 py-2 border border-[#ffcc00]/30 rounded-full bg-[#ffcc00]/5">
              WHY CHOOSE US
            </motion.p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight text-white">
              Reach! Engage! Sell! Repeat!
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              A strategic journey designed to transform strangers into loyal customers and drive consistent business growth.
            </p>
          </motion.div>

          {/* Arc Layout Grid Container */}
          <div className="relative pb-24 pt-20 mt-10">
            
            {/* Desktop Curved Dashed Line */}
            <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[180px] border-t-2 border-dashed border-[#ffcc00]/30 rounded-t-[100%] z-0" />

            {/* PROCESS STEP NUMBERS (Positioned exactly above the dashed arc line) */}
            <div className="hidden md:grid grid-cols-5 gap-5 absolute top-[-10px] left-0 right-0 z-20 pointer-events-none text-center">
              {[
                { id: '01', translate: 'translate-y-[62px]' },
                { id: '02', translate: 'translate-y-[15px]' },
                { id: '03', translate: '-translate-y-[20px]' },
                { id: '04', translate: 'translate-y-[15px]' },
                { id: '05', translate: 'translate-y-[62px]' }
              ].map((num) => (
                <div 
                  key={num.id} 
                  className={`text-2xl font-black text-[#ffcc00] font-mono tracking-wider transition-all duration-300 ${num.translate}`}
                >
                  <span className="bg-black px-3 py-1 rounded-full border border-[#ffcc00]/30 shadow-[0_0_15px_rgba(255,204,0,0.2)]">
                    {num.id}
                  </span>
                </div>
              ))}
            </div>

            {/* Process Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-5 relative z-10">
              {[
                {
                  title: 'Brand Awareness',
                  desc: "Let's spread the word! We position your brand in front of the right audience.",
                  translate: 'translate-y-0 md:translate-y-[140px]',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                },
                {
                  title: 'Traffic & Engage',
                  desc: 'Make your audience fall in love with your product through targeted campaigns.',
                  translate: 'translate-y-0 md:translate-y-[60px]',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                },
                {
                  title: 'Advertise & Retarget',
                  desc: 'Chase your customer all over the internet and make them hit "Pay Now".',
                  translate: 'translate-y-0 md:-translate-y-[10px]',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                },
                {
                  title: 'Retention',
                  desc: 'Keep making your customers come back to you with automated systems.',
                  translate: 'translate-y-0 md:translate-y-[60px]',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                },
                {
                  title: 'Consistent Growth',
                  desc: 'Get busy collecting revenue 365 days a year with scaling strategies.',
                  translate: 'translate-y-0 md:translate-y-[140px]',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className={`relative group rounded-[24px] p-7 md:p-8 border border-white/5 bg-[#0a0a0a]/90 backdrop-blur-xl hover:border-[#ffcc00]/40 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(255,204,0,0.15)] flex flex-col items-center text-center ${step.translate} overflow-hidden`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
                  <div className="absolute top-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-[#ffcc00]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Premium Icon Badge */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 group-hover:border-[#ffcc00]/50 flex items-center justify-center text-[#ffcc00] mb-6 shadow-inner shadow-white/5 transition-all duration-500 group-hover:scale-110 relative z-10">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {step.icon}
                    </svg>
                  </div>

                  {/* Refined Typography */}
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight tracking-wide relative z-10 group-hover:text-[#ffcc00] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 relative z-10">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

       {/* STANDALONE VIDHYA TECH TEXT SECTION (Solid Gold Glow) */}
        <div className="hidden md:flex justify-center items-center mt-8 pb-10 w-full select-none pointer-events-none overflow-hidden px-4">
          <span className="font-black text-[#ffcc00] uppercase tracking-[0.1em] whitespace-nowrap leading-none text-[7vw] xl:text-[90px] drop-shadow-[0_0_30px_rgba(255,204,0,0.6)]">
            VIDHYA TECH
          </span>
        </div>
      </section>      

      {/* ============ CERTIFICATIONS SECTION ============ */}
      {/* <section className="px-5 py-24 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="mx-auto max-w-7xl"> */}

          {/* Heading */}
          {/* <div className="text-center mb-20">
            <p className="text-sm font-bold text-[#ffcc00] uppercase tracking-widest mb-4 inline-block px-4 py-2 border border-[#ffcc00]/30 rounded-full">
              CREDENTIALS
            </p> */}

            {/* <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Our Certifications & Skills
            </h2>

            <p className="text-white/70 max-w-3xl mx-auto text-lg">
              Industry-recognized certifications and expertise that drive our work.
            </p>
          </div> */}

          {/* Grid */}
          {/* <div className="grid gap-8 md:grid-cols-3">
            {CERTIFICATES.map((cert) => (
              <div
                key={cert.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#ffcc00]/50 transition-all duration-300"
              >
                <div className="rounded-xl overflow-hidden mb-5 bg-white p-2">
                  <Image
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-[180px] object-contain rounded-lg"
                    width={300}
                    height={180}
                    quality={60}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white text-center">
                  {cert.title}
                </h3>

                <p className="text-[#ffcc00] text-sm font-bold text-center mt-2 uppercase tracking-widest">
                  {cert.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>      */}
       {/* ============ TEAM SECTION ============ */}
      <section className="px-5 py-24 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.p className="text-sm font-bold text-[#ffcc00] uppercase tracking-widest mb-4 inline-block px-4 py-2 border border-[#ffcc00]/30 rounded-full">
              OUR TEAM
            </motion.p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Meet Our Experts
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
              A talented team of developers, designers, and strategists dedicated to bringing your vision to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${member.bgColor} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                />

                <div className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-[#ffcc00]/50 transition-all duration-300">
                  <motion.div
                    className="mb-8 flex justify-center"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, delay: index * 0.3, repeat: Infinity }}
                  >
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#ffcc00]/70 bg-black shadow-[0_0_30px_rgba(255,204,0,.25)]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        width={96}
                        height={96}
                        quality={60}
                        sizes="96px"
                      />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-black text-white text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#ffcc00] font-bold text-center mb-4 text-sm uppercase tracking-widest">
                    {member.role}
                  </p>

                  <p className="text-white/70 text-center leading-relaxed mb-6">
                    {member.description}
                  </p>

                  <div className="flex justify-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[#ffcc00]/30 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-[#ffcc00] hover:text-black"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>    
        {/* ============ WHAT CLIENTS APPRECIATE SECTION ============ */}
      <section className="px-5 py-24 sm:px-6 lg:px-8 bg-black relative">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold text-[#ffcc00] uppercase tracking-widest mb-4 inline-block px-4 py-2 border border-[#ffcc00]/30 rounded-full">
              WHAT CLIENTS APPRECIATE
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Delivery Themes
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
              The practical themes we design around most often: communication, clear design, and dependable follow-through.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {CLIENT_VALUE_CARDS.map((card, index) => (
              <motion.div
                key={`${card.title}-${index}`}
                className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#ffcc00]/30 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`grid h-12 w-12 place-items-center rounded-full ${card.avatarClass} text-sm font-black text-white`}>
                    {card.initials}
                  </div>
                  <div>
                    <p className="font-black text-white">{card.title}</p>
                    <p className="text-sm text-white/60">{card.context}</p>
                  </div>
                </div>

                <p className="text-white/80 leading-relaxed italic">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>    
        {/* ============ CTA SECTION ============ */}
      <section className="px-5 py-24 sm:px-6 lg:px-8 bg-gradient-to-r from-[#ffcc00]/10 to-[#ffcc00]/5 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute w-96 h-96 bg-[#ffcc00] rounded-full blur-3xl"
            style={{ left: '-10%', top: '50%' }}
            animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-[#ffcc00] rounded-full blur-3xl"
            style={{ right: '-10%', bottom: '10%' }}
            animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="mx-auto max-w-4xl text-center relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Grow Your Business?
          </motion.h2>

          <motion.p
            className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let&apos;s discuss how we can help you achieve your digital goals with innovative solutions tailored to your unique business needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="vt-gold-button px-10 py-4 font-black inline-block text-lg rounded-lg hover:scale-105 transition-transform shadow-lg"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
      {/* <VoiceAgent /> */}
      <Footer />
    </div>
  );
}