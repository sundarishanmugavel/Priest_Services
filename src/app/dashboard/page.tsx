"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import ReviewsSection from "@/components/common/ReviewsSection";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f1f1f] font-sans">
      <Navbar />
      
      {/* ── 1. Hero Section ── */}
      <HeroSection />

      {/* ── 2. Steps Section ── */}
      <section className="py-16 bg-[#faf9f6]">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4a2e21] font-serif">From Booking to Divine Blessings</h2>
        </div>
        <div className="max-w-[800px] mx-auto px-4 flex justify-between items-center relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-red-200 -z-10 -translate-y-1/2 border-t-2 border-dashed border-[#d18e7c]"></div>
          
          <Step icon="👆" title="Choose" subtitle="Your Puja" />
          <Step icon="📝" title="Provide your" subtitle="Name & Gotra" />
          <Step icon="✓" title="Puja" subtitle="Performed" active />
          <Step icon="🎥" title="Receive Puja Video" subtitle="& Divine Blessings" />
        </div>
      </section>

      {/* ── 3. Our Pujas Section ── */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4a2e21] font-serif">Our Pujas</h2>
            <div className="flex bg-gray-100 rounded-full p-1">
              <FilterBtn text="All" active />
              <FilterBtn text="Puja" />
              <FilterBtn text="Sevas" />
              <FilterBtn text="Rituals" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <PujaCard 
              imageTitle="Shri Subrahmanya Swamy Abhishekam" 
              title="Subrahmanya Swamy Puja & Oil Abhishekam"
              location="Aadi Murugan Devasthana"
              date="Saturday, 21 September"
              oldPrice="₹516"
              price="₹516"
            />
            {/* Card 2 */}
            <PujaCard 
              imageTitle="Sade Sati Shanti Puja" 
              title="Sade Sati Shanti Puja & Oil Abhishekam"
              location="Mangala Shaneeshwara"
              date="Saturday, 21 September"
              oldPrice="₹816"
              price="₹816"
            />
            {/* Card 3 */}
            <PujaCard 
              imageTitle="Shani Shanti Puja" 
              title="Shani Shanti Puja for Prosperity"
              location="Navagraha Devasthanam"
              date="Saturday, 21 September"
              oldPrice="₹816"
              price="₹816"
            />
          </div>
          
          <div className="text-center mt-10">
            <button className="text-[#009e5b] font-bold px-6 py-2 rounded-full border-2 border-[#009e5b] hover:bg-green-50 transition-colors">
              View All Pujas
            </button>
          </div>
        </div>
      </section>

      {/* ── 4. Puja Gallery Section ── */}
      <section className="py-16 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-[120px] font-bold text-gray-200/50 uppercase tracking-widest -mb-16 pointer-events-none select-none font-serif relative z-0">
            Puja Gallery
          </h2>
          <div className="relative z-10 flex gap-4 overflow-hidden h-[300px] items-center justify-center">
            {/* Placeholder rectangles to mimic the gallery layout */}
            <div className="w-[200px] h-[200px] bg-[#e5e5e5] rounded-xl shrink-0 border border-gray-300 shadow-inner"></div>
            <div className="w-[150px] h-[250px] bg-[#d5d5d5] rounded-xl shrink-0 border border-gray-300 shadow-inner"></div>
            <div className="w-[250px] h-[220px] bg-[#dbdbdb] rounded-xl shrink-0 border border-gray-300 shadow-inner"></div>
            <div className="w-[180px] h-[180px] bg-[#ececec] rounded-xl shrink-0 border border-gray-300 shadow-inner"></div>
            <div className="w-[220px] h-[240px] bg-[#e8e8e8] rounded-xl shrink-0 border border-gray-300 shadow-inner"></div>
          </div>
        </div>
      </section>

      {/* ── 5. Trust Badges Strip ── */}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 bg-[#f0f8f1] px-4 py-8 border-y border-green-100">
        <Badge icon="🎥" text="Puja Video Delivered Within 48 hours" />
        <Badge icon="✓" text="Verified & Experienced Pandits" />
        <Badge icon="🏛" text="Puja Performed in Sacred Temples" />
        <Badge icon="📜" text="100% Authentic Vedic Rituals" />
      </div>

      {/* ── 6. FAQ Section ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row gap-12">
          {/* Left: Doubts */}
          <div className="md:w-1/3">
            <h3 className="text-red-500 font-bold text-sm tracking-wider uppercase mb-2">— FAQ</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-[#4a2e21] font-serif mb-4 leading-tight">Doubts?<br/>We're Here.</h2>
            <p className="text-gray-600 mb-8 text-sm max-w-[250px]">
              Our devotee care team is available in 11 languages, 12 hours a day. Reach them on WhatsApp, phone, or email.
            </p>
            <button className="bg-[#009e5b] text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-[#008c51] transition-colors">
              Speak to Devotee Care
            </button>
          </div>
          
          {/* Right: Accordion */}
          <div className="md:w-2/3 flex flex-col gap-3">
            <AccordionItem question="What is an online puja and how does it work?" active />
            <AccordionItem question="Do I need to be present during the puja?" />
            <AccordionItem question="What details do I need to provide when booking?" />
            <AccordionItem question="Can I book a puja for my family members?" />
            <AccordionItem question="Can I book a puja for someone living abroad / non-NRIs too?" />
            <AccordionItem question="What happens after I complete my booking?" />
            <AccordionItem question="When will I receive my puja video?" />
            <AccordionItem question="Where will the video come on?" />
            <AccordionItem question="What payment methods do you accept?" />
            <AccordionItem question="Can I cancel or reschedule my booking?" />
          </div>
        </div>
      </section>

      {/* ── 7. Footer ── */}
      <footer className="bg-[#1f0e08] text-[#d4c5b9] pt-16 pb-8">
        <div className="max-w-[1200px] mx-auto px-4 text-center border-b border-white/10 pb-12 mb-8">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-6">A Sacred Path to Divine Blessings Book Your<br/>Sacred Puja</h2>
          <p className="text-sm mb-8">Connect with divine blessings through authentic Vedic rituals.</p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-white font-bold text-lg mr-2">Follow us -</span>
            <SocialIcon bg="bg-blue-600" text="f" />
            <SocialIcon bg="bg-pink-600" text="ig" />
            <SocialIcon bg="bg-black" border="border border-white/20" text="x" />
            <SocialIcon bg="bg-red-600" text="yt" />
          </div>
          <button className="bg-white text-[#009e5b] font-bold px-6 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors inline-flex items-center gap-2 shadow-lg">
            Find the Right Puja <div className="bg-[#009e5b] text-white rounded-full w-5 h-5 flex items-center justify-center"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg></div>
          </button>
        </div>
        
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between gap-8 mb-12">
          {/* Logo Col */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-white font-serif text-2xl font-bold flex items-center gap-2">
                <span className="text-[#d97706] text-3xl">🔥</span> Vedamandir
              </div>
            </div>
            <p className="text-xs text-white/60 max-w-xs leading-relaxed">
              Vedamandir is a spiritual platform that enables devotees to book authentic Vedic pujas at sacred temples across India.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-xs text-white/60">
              <li><Link href="/puja" className="hover:text-white transition-colors">Puja</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Our Brands</Link></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="flex flex-col gap-2 text-xs text-white/60">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Account Deletion</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="flex flex-col gap-3 text-xs text-white/60 max-w-[200px]">
              <li className="flex gap-2"><span>✉</span> support@vedamandir.com</li>
              <li className="flex gap-2"><span>📞</span> +91 72072 02029</li>
              <li className="flex gap-2 leading-relaxed"><span>📍</span> 1st Floor, H.No. 4-4-490, Plot No. 490, Road No. 22, LAXMI NGR, Hyderabad, Telangana 500035</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-[10px] text-white/40">
          © 2024 Vedamandir. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

// --- Helper Components ---

function Badge({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#009e5b]">
      <span className="bg-green-100 rounded-full w-6 h-6 flex items-center justify-center text-sm">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function Step({ icon, title, subtitle, active }: { icon: string; title: string; subtitle: string; active?: boolean }) {
  return (
    <div className="flex flex-col items-center bg-[#faf9f6] z-10 p-2">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-md border-4 mb-3 transition-colors ${active ? 'bg-[#009e5b] text-white border-green-200 shadow-green-200' : 'bg-white text-gray-400 border-white shadow-gray-200'}`}>
        {icon}
      </div>
      <p className="text-[10px] md:text-xs text-gray-500 text-center font-medium leading-tight">
        {title}<br/><span className="text-[#4a2e21] font-bold">{subtitle}</span>
      </p>
    </div>
  );
}

function FilterBtn({ text, active }: { text: string; active?: boolean }) {
  return (
    <button className={`px-5 py-1.5 rounded-full text-sm font-bold transition-colors shadow-sm ${active ? 'bg-[#009e5b] text-white' : 'bg-white text-gray-500 hover:text-gray-800'}`}>
      {text}
    </button>
  );
}

function PujaCard({ imageTitle, title, location, date, price, oldPrice }: any) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col group relative">
      <div className="h-[200px] bg-gradient-to-br from-[#5b2424] to-[#260e0e] relative p-4 flex items-center justify-center border-b-4 border-yellow-500">
        <span className="absolute top-3 left-3 bg-red-700 text-white text-[10px] font-bold px-2 py-0.5 rounded border border-red-500 z-10 shadow-sm">Shani Pournami Special</span>
        <div className="absolute top-3 right-3 bg-white/20 p-1.5 rounded-full backdrop-blur-sm cursor-pointer hover:bg-white/40 transition-colors">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </div>
        <h3 className="text-yellow-400 font-serif font-bold text-center text-xl relative z-10 px-8 leading-tight">{imageTitle}</h3>
        {/* Decorative circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] border border-yellow-500/20 rounded-full"></div>
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <h4 className="text-lg font-bold text-[#4a2e21] font-serif mb-2 leading-tight min-h-[44px]">{title}</h4>
        <p className="text-gray-500 text-xs mb-4 line-clamp-2">
          Perform Shani Shanti Puja for relief from hardships, prosperity, career growth, peace, and lasting stability.
        </p>
        
        <div className="mt-auto space-y-2 mb-6">
          <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
            <span className="text-red-500">📍</span> {location}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
            <span className="text-red-500">📅</span> {date}
          </div>
        </div>
        
        <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
          <div>
            <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Per Booking</div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-[#4a2e21]">{price}</span>
            </div>
          </div>
          <button className="bg-[#009e5b] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-[#008c51] transition-colors flex items-center gap-2">
            Participate Now <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function AccordionItem({ question, active }: { question: string; active?: boolean }) {
  return (
    <div className={`border rounded-xl px-5 py-4 transition-colors ${active ? 'border-green-500 shadow-sm bg-white' : 'border-gray-200 bg-[#faf9f6] hover:bg-white cursor-pointer'}`}>
      <div className="flex justify-between items-center">
        <h4 className={`text-sm font-bold ${active ? 'text-[#009e5b]' : 'text-gray-700'}`}>{question}</h4>
        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 ml-4 ${active ? 'bg-[#009e5b] text-white' : 'bg-gray-200 text-gray-500'}`}>
          {active ? '-' : '+'}
        </div>
      </div>
      {active && (
        <div className="mt-3 text-xs text-gray-500 leading-relaxed pr-8 border-t border-gray-100 pt-3">
          An online puja is performed on your behalf by our experienced pandits at sacred temples. You will receive a personalized video of your sankalpa via WhatsApp.
        </div>
      )}
    </div>
  );
}

function SocialIcon({ bg, border, text }: { bg: string; border?: string; text: string }) {
  return (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold uppercase cursor-pointer hover:scale-110 transition-transform ${bg} ${border || ''}`}>
      {text}
    </div>
  );
}


