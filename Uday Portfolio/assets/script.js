
gsap.from("#uday span", {
  y: 600,
  duration: 1,
  ease: "back.out(1.7)",
  scale: 0.5,
  opacity: 8,
  stagger: 0.2,
  delay: 0.3
});

gsap.from("#developer span", {
  x: -800,
  y: -400,
  duration: 1,
  ease: "back.out(1.2)",
  scale: 0.5,
  opacity: 2,
  delay: 3,
  stagger: 0.2,
});

gsap.from("#cv", {
  y: 800,
  duration: 1,
  ease: "back.out(1.2)",
  scale: 3,
  opacity: 2,
  delay: 5,
  stagger: 0.8,
});

gsap.from("#img", {
  x: 800,
  duration: 2,
  ease: "back.out(1.2)",
  scale: 1,
  opacity: 2,
  delay: 5,
});

// gsap.from("#abt_img", {
//   x: -800,
//   duration: 0.5,
//   scale: 1,
//   opacity: 2,
//   delay: 0.3,
//   scrollTrigger: {
//     trigger: '#abt_img',
//     scroller: 'body',
//   }
// });

// gsap.from("#abt_text", {
//   x: 800,
//   duration: 0.5,
//   scale: 1,
//   opacity: 8,
//   delay: 0.3,
//   scrollTrigger: {
//     trigger: '#abt_text',
//     scroller: 'body',

//   }
// });
//  -----------------education animation---------------


    // // Animate Title
    // gsap.from(".section-title", {
    //   scrollTrigger: {
    //     trigger: "#education",
    //     start: "top 80%",
    //   },
    //   opacity: 0,
    //   y: -50,
    //   duration: 1
    // });

    // // Animate Subtitle
    // gsap.from(".section-subtitle", {
    //   scrollTrigger: {
    //     trigger: "#education",
    //     start: "top 80%",
    //   },
    //   opacity: 0,
    //   y: 30,
    //   duration: 1,
    //   delay: 0.3
    // });
  
