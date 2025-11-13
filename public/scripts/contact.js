// Animate heading
var tl1 = gsap.timeline();
tl1.from(".text h1", { 
    duration: 1, 
    opacity: 0, 
    y: -30, 
     
  });
  
  // Animate paragraph
  tl1.from(".text p", { 
    duration: 1, 
    opacity: 0, 
    y: 30,  
  });
  
  // Animate map + contact info section
  tl1.from(".section", {
    duration: 1,
    opacity: 0,
    x: 50
  });
  