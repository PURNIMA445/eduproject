import React from 'react'
import Script from "next/script";
const page = () => {
  return (
    <div id="main">
    <section className="topsec">
    <div className="sec1">
        <div className="emoji">
            <i className="fa-solid fa-building-columns"></i>
        </div>
        <div className="text">
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "2px",color:"white" }}>
  ABC ACADEMY
</h1>

            <p style={{fontSize: "clamp(1rem, 2vw, 1.3rem)",
  color: "#ddd"}}>Empowering Mind, Building Future</p>
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
            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
            <div className="circle circle3"></div>
        </div>
    </section>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"></Script>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollTrigger.min.js"></Script>
    <Script src="/scripts/about.js"></Script>
    </div>
  )
}

export default page