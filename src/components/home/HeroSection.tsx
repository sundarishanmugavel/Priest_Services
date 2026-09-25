"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface BannerSlide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  topBadge: string;
  bannerLine1: string;
  bannerLine2: string;
  bannerLine3: string;
  bannerLine4: string;
  location: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

const slides: BannerSlide[] = [
  {
    id: "shani-statue",
    badge: "SPECIAL SHANI POOJA",
    title: "Sade Sati Shani Shanti Puja & Oil Abhishekam at the 23-Foot Shani Statue",
    subtitle: "Shani Shanti Puja & Oil Abhishekam for Relief from the Harsh Effects of Sade Sati",
    topBadge: "Shani Purnima Special",
    bannerLine1: "Sade Sati",
    bannerLine2: "Shani Shanti Puja",
    bannerLine3: "Oil Abhishekam",
    bannerLine4: "at the 23-Foot\nShani Statue",
    location: "Bannanje Shri Shani Devara Kshetra",
    image: "/shani_statue_hero_banner.png",
    ctaText: "Book Puja Now",
    ctaLink: "/puja/sade-sati-shani-shanti-puja",
  },
  {
    id: "subrahmanya",
    badge: "SPECIAL TUESDAY SANKALPAM",
    title: "Subrahmanya Swamy Abhishekam at Madurai Temple for success and fulfillment of wishes.",
    subtitle: "A special Tuesday Abhishekam for devotees seeking the courage to overcome obstacles, fulfillment of efforts, and success.",
    topBadge: "Special Tuesday Sankalpam",
    bannerLine1: "Shri",
    bannerLine2: "Subrahmanya Swamy",
    bannerLine3: "Abhishekam Seva",
    bannerLine4: "for Wish Fulfillment",
    location: "Madurai Temple",
    image: "/subrahmanya_swamy_hero.png",
    ctaText: "Book Puja Now",
    ctaLink: "/puja/subrahmanya-swamy-abhishekam",
  },
  {
    id: "mahalakshmi",
    badge: "SPECIAL FRIDAY SANKALPAM",
    title: "Maha Lakshmi Kumkumarchana for Wealth, Abundance & Prosperity.",
    subtitle: "Sacred Friday Kumkumarchana ritual at Kolhapur Mahalakshmi Temple to attract wealth, business success, and joy.",
    topBadge: "Maha Lakshmi Special",
    bannerLine1: "Maha Lakshmi",
    bannerLine2: "Kumkumarchana",
    bannerLine3: "Seva",
    bannerLine4: "for Prosperity & Joy",
    location: "Mahalakshmi Temple",
    image: "/images/Lakshmi-Homam.jpg",
    ctaText: "Book Puja Now",
    ctaLink: "/puja/mahalakshmi-kumkumarchana",
  },
  {
    id: "mrityunjaya",
    badge: "SPECIAL SOMVAR SANKALPAM",
    title: "Maha Mrityunjaya Homa for Health, Healing & Long Life.",
    subtitle: "Powerful Vedic chantings and oblations to Lord Shiva for immunity, healing, protection, and overcoming health hurdles.",
    topBadge: "Maha Mrityunjaya Special",
    bannerLine1: "Maha Mrityunjaya",
    bannerLine2: "Homa Seva",
    bannerLine3: "for Healing",
    bannerLine4: "at Trimbakeshwar Temple",
    location: "Trimbakeshwar Temple",
    image: "/images/Navagraha-Shanti-Puja.jpg",
    ctaText: "Book Puja Now",
    ctaLink: "/puja/maha-mrityunjaya-homa",
  },
  {
    id: "ganesh",
    badge: "SPECIAL SANKASHTI SANKALPAM",
    title: "Sankashti Ganesh Puja for Removal of Obstacles & New Beginnings.",
    subtitle: "Special Modak and Durva offering to Bhagwan Ganesha at Ashtavinayak Temple to ensure success in all endeavors.",
    topBadge: "Sankashti Ganesha Special",
    bannerLine1: "Sankashti Ganesha",
    bannerLine2: "Abhishekam Seva",
    bannerLine3: "for Obstacle Removal",
    bannerLine4: "at Ashtavinayak Temple",
    location: "Ashtavinayak Temple",
    image: "/images/Ganesh-Chaturthi-Mahapuja.jpg",
    ctaText: "Book Puja Now",
    ctaLink: "/puja/sankashti-ganesh-puja",
  }
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = slides[activeSlide];

  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-8 md:py-12 bg-white my-2">
      
      {/* Background Circular Mandala Watermark inside Hero */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] bg-center bg-no-repeat bg-contain z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500'%3E%3Ccircle cx='250' cy='250' r='240' fill='none' stroke='%3C%238b1e10' stroke-width='1.5'/%3E%3Ccircle cx='250' cy='250' r='200' fill='none' stroke='%3C%238b1e10' stroke-width='1' stroke-dasharray='4 4'/%3E%3Ccircle cx='250' cy='250' r='160' fill='none' stroke='%3C%238b1e10' stroke-width='1.5'/%3E%3Ccircle cx='250' cy='250' r='110' fill='none' stroke='%3C%238b1e10' stroke-width='1'/%3E%3Cpath d='M250 10 L250 490 M10 250 L490 250 M80 80 L420 420 M420 80 L80 420' stroke='%3C%238b1e10' stroke-width='0.5'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
        
        {/* ── Left Content (Text & CTA) ── */}
        <div className="flex-1 text-left flex flex-col justify-center h-auto min-h-[440px] lg:min-h-[500px] w-full max-w-[640px]">
          <div>
            {/* Top Sub-header Badge */}
            <div className="flex items-center gap-2 mb-3.5">
              <span className="text-[#8b1e10] text-base">🪷</span>
              <span className="text-[#8b1e10] font-bold text-xs sm:text-sm tracking-widest uppercase">
                {current.badge}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[44px] font-serif font-bold text-[#221f20] leading-[1.22] tracking-tight mb-5 transition-all duration-300">
              {current.title}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-stone-600 text-base sm:text-lg md:text-[19px] leading-relaxed mb-8 max-w-[580px]">
              {current.subtitle}
            </p>
          </div>

          {/* CTA Button - Increased Width */}
          <div className="mb-7">
            <Link
              href={current.ctaLink}
              className="inline-flex items-center justify-between gap-6 bg-[#00b050] hover:bg-[#009b46] active:scale-95 text-white font-extrabold text-xl sm:text-2xl px-9 py-4 rounded-full shadow-xl shadow-green-600/25 transition-all duration-200 group w-full max-w-[380px] sm:max-w-[420px]"
            >
              <span>{current.ctaText}</span>
              <div className="w-10 h-10 rounded-full bg-white text-[#00b050] flex items-center justify-center shadow-md group-hover:translate-x-0.5 transition-transform shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Social Proof / Trust Banner - Reduced Width & Height */}
          <div className="border border-stone-200/90 bg-white/95 backdrop-blur-sm rounded-2xl p-3 sm:p-3.5 shadow-sm flex items-center justify-between gap-2.5 sm:gap-4 w-full max-w-[460px]">
            {/* Sun Icon Section */}
            <div className="flex items-center gap-2.5 flex-1">
              <div className="text-stone-400 shrink-0">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
                  <path strokeWidth="1.5" strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
                </svg>
              </div>
              <p className="text-[11px] sm:text-xs text-stone-900 font-bold leading-tight">
                One of India's most<br />loved devotional<br />platforms
              </p>
            </div>

            <div className="w-[1px] h-7 bg-stone-200 shrink-0" />

            {/* Devotees Count */}
            <div className="text-center px-1.5 shrink-0">
              <p className="text-[#8b1e10] font-black text-lg sm:text-xl leading-none">10L+</p>
              <p className="text-[10px] sm:text-xs text-stone-500 font-medium mt-0.5">Happy Devotees</p>
            </div>

            <div className="w-[1px] h-7 bg-stone-200 shrink-0" />

            {/* Secure Guarantee */}
            <div className="text-center px-1.5 shrink-0">
              <p className="text-[#8b1e10] font-black text-lg sm:text-xl leading-none">100%</p>
              <p className="text-[10px] sm:text-xs text-stone-500 font-medium mt-0.5">Secure</p>
            </div>
          </div>
        </div>

        {/* ── Right Content (Hero Banner Card) ── RESTORED Full Size ── */}
        <div className="w-full lg:w-[640px] xl:w-[670px] shrink-0 flex flex-col items-center">
          
          {/* Full-Bleed Banner Card with STRICTLY FIXED HEIGHT (500px on desktop, 440px on mobile) */}
          <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl border border-stone-800 bg-[#160802] flex flex-col justify-between h-[440px] sm:h-[470px] md:h-[490px] lg:h-[500px] shrink-0 transition-all duration-500 group">
            
            {/* Full Background Image - Specific to active slide */}
            <Image
              key={current.id}
              src={current.image}
              alt={current.title}
              fill
              className="object-cover object-center transition-all duration-700 group-hover:scale-105"
              priority
            />

            {/* Left Side Dark Gradient Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent w-full md:w-[72%] pointer-events-none z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-0" />

            {/* Top Section: Gold Oval Pill Badge */}
            <div className="relative z-10 pt-6 px-7 flex justify-start">
              <div className="inline-flex items-center gap-2 border border-[#ffd700]/80 bg-black/70 backdrop-blur-md px-5.5 py-1.5 rounded-full shadow-lg">
                <span className="text-[#ffd700] text-xs">❖</span>
                <span className="text-[#ffe57f] font-serif font-bold text-xs sm:text-sm tracking-wide">
                  {current.topBadge}
                </span>
                <span className="text-[#ffd700] text-xs">❖</span>
              </div>
            </div>

            {/* Center Section: Banner Title Lines (Centered on Left Side) */}
            <div className="relative z-10 px-7 sm:px-9 py-4 my-auto max-w-[360px] sm:max-w-[400px] text-left">
              
              {/* Line 1 */}
              <p className="text-white font-serif font-bold text-lg sm:text-xl md:text-2xl leading-tight drop-shadow-md">
                {current.bannerLine1}
              </p>

              {/* Line 2 */}
              <h3 className="text-[#ffd700] font-serif font-extrabold text-2xl sm:text-3xl md:text-[36px] leading-tight drop-shadow-lg my-1">
                {current.bannerLine2}
              </h3>

              {/* Ampersand Divider */}
              <div className="flex items-center gap-2 my-1.5">
                <div className="w-9 h-[1px] bg-amber-400/60" />
                <span className="text-amber-300 font-serif italic text-base sm:text-lg font-semibold">&</span>
                <div className="w-9 h-[1px] bg-amber-400/60" />
              </div>

              {/* Line 3 */}
              <h3 className="text-[#ffd700] font-serif font-extrabold text-2xl sm:text-3xl md:text-[36px] leading-tight drop-shadow-lg">
                {current.bannerLine3}
              </h3>

              {/* Line 4 */}
              <p className="text-white font-serif text-sm sm:text-base md:text-lg leading-snug mt-1.5 font-medium whitespace-pre-line drop-shadow-md">
                {current.bannerLine4}
              </p>
            </div>

            {/* Bottom Bar: Dark Amber / Vermilion Temple Strip */}
            <div className="relative z-10 w-full bg-gradient-to-r from-[#9b2c00] via-[#852500] to-[#6d1e00] py-3 px-5 flex items-center justify-center gap-2.5 border-t border-amber-500/40 text-[#ffe28a] text-xs sm:text-sm font-serif font-bold shadow-inner">
              <span className="text-amber-400">➔</span>
              <span className="text-amber-300 text-sm">⛩</span>
              <span className="tracking-wide">{current.location}</span>
              <span className="text-amber-300 text-sm">⛩</span>
              <span className="text-amber-400">⬅</span>
            </div>

          </div>

          {/* Slider Dots Navigation inside Hero */}
          <div className="flex items-center justify-center gap-2.5 mt-5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  index === activeSlide
                    ? "w-7 h-2 bg-[#00b050]"
                    : "w-2 h-2 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
