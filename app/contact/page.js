import React from 'react'
import Script from "next/script";
const page = () => {
  return (
     <div id="contact">
        <div className="middle">
            <div className="form">
                <div className="text">
                    <h1>GET IN TOUCH!</h1>
                    <p>If you have any questions about our school, admissions, or upcoming events, please feel free to get in touch. You can reach us by phone, email, or visit our campus during office hours. Our team is always happy to assist parents, students, and visitors.</p>
                </div>
                <div className="input">
                  
                    <input type="text" name="email" id="email" placeholder="Email Address"/>
                    <input type="text" name="name" id="name" placeholder="Name"/>
                    <input type="number" name="phn" id="phn" placeholder="Phone Number"/>
                    <input type="text" name="msg" id="msg" placeholder="Your Message"/>
                    <button>Send Message</button>
                </div>
            </div>
            <div className="section">
            <div className="pic"><img src="https://cdn3.vectorstock.com/i/1000x1000/79/37/3d-top-view-a-map-with-destination-location-vector-35887937.jpg" /></div>
            <div className="info">
                <p><strong>Email:</strong> info@gmail.com</p>
                <p><strong>Phone:</strong> 9812344565</p>
                <p><strong>Address:</strong> Bharatpur-02,Chitwan</p>
            </div>
            <div className="icon"></div>
        </div>
        </div>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"></Script>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollTrigger.min.js"></Script>
   <Script src="/scripts/contact.js"></Script>
    </div>
    
  )
}

export default page