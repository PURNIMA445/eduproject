import React from 'react'
import Script from "next/script";
const page = () => {
  return (
    <div id="main">
    <section className="topsec">
        <div className="custom-shape-divider-bottom-1762686975">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg> 
        </div>
    <div className="sec1">
        <div className="emoji">
            <i className="fa-solid fa-building-columns"></i>
        </div>
        <div className="text">
            <h1>ABC ACADEMY</h1>
            <p>Empowering Mind, Building Future</p>
        </div>
    </div>
    <div className="sec2">
        <div className="image"><img src="https://tse1.mm.bing.net/th/id/OIP.Ay--iQHKsUbL6PMpD8shkwHaE_?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" alt="school image" /></div>
        <div className="side-text">
            <h2>Our Story</h2>
            <p>Established in 2005, ABC Secondary School began with a vision to redefine learning through innovation and inclusivity. Today, we continue to inspire students to think critically, act with empathy, and lead with confidence in an ever-changing world.</p>
        </div>
    </div>
    </section>
    <section className="middlesec">
        <h1>OUR PHILOSOPHY</h1>
        <div className="box">
            <div className="shape">Innovation and Critical Thinking</div>
            <div className="shape">Excellence and Perseverance</div>
            <div className="shape">Community and Global Citizenship</div>
          </div>
          
    </section>
    <section className="thirdsec">
        <h1>MEET OUR TEACHERS</h1>
        <div className="pic">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    </section>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"></Script>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollTrigger.min.js"></Script>
    <Script src="/scripts/about.js"></Script>
    </div>
  )
}

export default page