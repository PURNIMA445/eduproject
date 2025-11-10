gsap.registerPlugin(ScrollTrigger);

// intro animation
var tl1 = gsap.timeline();
gsap.from('.topsec', {
  opacity: 0,
  duration: 1,
  y: 100
});
tl1.from('.emoji', {
  scale: 0,
  duration: 1
});
tl1.from('.text', {
  x: 50,
  scale: 0,
  opacity: 0,
  duration: 1,
  stagger: 0.5
});
tl1.from('.image', {
  scale: 0,
  duration: 1.5,
  rotate: 360
});

// scroll-triggered shape animation
gsap.from(".shape", {
  scrollTrigger: {
    trigger: ".box",
    start: "top 80%",
    end: "bottom 60%",
    toggleActions: "play none none reverse",
  },
  y: 100,
  opacity: 0,
  scale: 0,
  rotation: 45,
  duration: 1,
  stagger: 0.3,
  ease: "back.out(1.7)"
});

// gentle float effect while scrolling
gsap.to(".shape", {
  scrollTrigger: {
    trigger: ".box",
    scrub: true,
    start: "top bottom",
    end: "bottom top",
  },
  yPercent: -30,
});
