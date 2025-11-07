"use client";
import Link from 'next/link';
import { useEffect } from "react";
import Script from "next/script";

export default function HomePage() {
  useEffect(() => {
    // This runs after hydration (client side)
    // You can also move animation logic to home.js if you prefer.
  }, []);

  return (
    <main id="main">
     <header className="header">
  <div className="header-container">
    <h1 className="logo">ABC Secondary School</h1>
    <nav>
      <ul className="nav-list">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>
    </nav>
  </div>
</header>

      <div className="content">
        
        <div className="page1">
          <h1>ABC</h1>
          <h1>SECONDARY</h1>
          <h1>SCHOOL</h1>
          <p>
            Welcome to <strong>ABC Secondary School</strong>, a vibrant and inclusive
            community where students are encouraged to explore their passions and
            find their voice. Our goal is to nurture well-rounded individuals by
            focusing equally on critical thinking, compassion, and holistic personal
            growth.
          </p>
        </div>

        <div className="img">
          <img
            src="https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=722"
            alt="School"
          />
        </div>

        <div className="page2">
          <div className="venn-right">
            <div className="circle c1"></div>
            <div className="circle c2"></div>
          </div>
        </div>
      </div>

      {/* Load GSAP and ScrollTrigger from CDN */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollTrigger.min.js" strategy="afterInteractive" />

      {/* Load your local animation script */}
      <Script src="/scripts/home.js" strategy="afterInteractive" />
    </main>
  );
}
