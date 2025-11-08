gsap.registerPlugin(ScrollTrigger);

// Page 1 timeline (hero section)
var tl1 = gsap.timeline();
tl1.from('.page1 h1', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.5
})
.from('.page1 p', {
    y: 30,
    opacity: 0,
    duration: 1
})
.from(".img img", {  
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
}, "-=0.8");
// Page 2 timeline
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
        markers: false
    }
});

tl2.from(".parag h1", { y: 50, opacity: 0, duration: 1 })
   .from(".parag p", { y: 30, opacity: 0, duration: 1 }, "-=0.5")
   .from(".circle", { scale: 0, opacity: 0, stagger: 0.3, duration: 0.8 }, "-=0.3")
   .from(".highlights div", { y: 20, opacity: 0, stagger: 0.2, duration: 0.6 }, "-=0.3");

// Page 3 timeline
gsap.from(".card", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".page3",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
        markers: false
    }
});


