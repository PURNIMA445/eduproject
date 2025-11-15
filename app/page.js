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
     
        <div className="content">
            
        <div className="page1">
            
            <h1>ABC</h1>
            <h1>SECONDARY</h1>
            <h1>SCHOOL</h1>
            <p>Welcome to <strong>ABC Secondary School</strong>, a vibrant and inclusive community where students are encouraged to explore their passions and find their voice. Our goal is to nurture well-rounded individuals by focusing equally on critical thinking, compassion, and holistic personal growth.</p>    
        </div>
        <div className="img">
                <img src="https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=722" alt="image" />
        </div>
        <div className="page2">
          <div className="parag">
            <h1>Why Choose us?</h1>
            <p>We believe in combining high-quality education with holistic development. Our students are encouraged to explore, innovate, and thrive in a supportive and inclusive environment.</p>
          </div>
            <div className="venn-right">
              <div className="circle c1">Academic Excellence</div>
              <div className="circle c2">Holistic Development</div>
            </div>
            <div className="highlights">
              <div>✔ Experienced Teachers</div>
              <div>✔ Interactive Learning</div>
              <div>✔ Modern ClassNAclassNamerooms</div>
              <div>✔ Supportive Environment</div>
            </div>
            
          </div>
          <div className="page3">
            <h1>Our Programs</h1>
            <p>We offer a balanced mix of academics, creativity, and co-curricular learning.</p>
          
            <div className="programs">
              <div className="card">
                <h2>Academics</h2>
                <p>Strong foundation in science, math, and language with modern teaching methods.</p>
              </div>
              <div className="card">
                <h2>Arts & Creativity</h2>
                <p>Encouraging innovation through music, drama, and design activities.</p>
              </div>
              <div className="card">
                <h2>Sports & Fitness</h2>
                <p>From football to yoga, our students learn discipline and teamwork.</p>
              </div>
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
