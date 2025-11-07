// Page 1 animation timeline
var tl = gsap.timeline();
tl.from('.page1 h1',{
    y: 50,
    duration: 1,
    delay: 1,
    stagger: 0.5,
    opacity: 0,
})
tl.from('.page1 p',{
    y: -10,
    duration: 1,
    opacity: 0
});

// ----------------------------
// Animate circles separately
gsap.from(".circle.c1", { 
    scale: 0, 
    opacity: 0, 
    duration: 1.5, 
});

gsap.from(".circle.c2", { 
    scale: 0, 
    opacity: 0, 
    duration: 1.5, 
});

// Optional: looping pulse for circles
gsap.to(".circle", {
  scale: 1.5,
  opacity: 0.7,
  duration: 2,
  yoyo: true,
  stagger: 0.2
});
