gsap.registerPlugin(ScrollTrigger);

// Récupère tous les éléments ayant la classe .panel sous la forme d'un tableau
let sections = gsap.utils.toArray(".panel");

// Crée un tween qui déplace les sections horizontalement
let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none", // <-- IMPORTANT!
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 0.5,
    end: "+=8000",
  },
});


document.querySelector(".tv-screen h2").addEventListener("mouseover", () => {
  const h2 = document.querySelector(".tv-screen h2");
  h2.style.animation = "none"; // Stop flicker
  setTimeout(() => {
    h2.style.animation = ""; // Restart flicker
  }, 50);

  // Simulate glitch effect
  h2.classList.add("glitch");
  setTimeout(() => {
    h2.classList.remove("glitch");
  }, 500);
});

const glitchStyle = document.createElement("style");
glitchStyle.innerHTML = `
  .glitch {
    position: relative;
    color: #ff00ff;
    text-shadow: 2px 2px 2px rgba(255, 0, 255, 0.5), -2px -2px 2px rgba(0, 255, 255, 0.5);
  }
`;
document.head.appendChild(glitchStyle);


// Animation Lottie 1
let lottieAnimation1 = lottie.loadAnimation({
  container: document.getElementById('lottie-animation1'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: './AnimExports/Graphique GenXYZ.json' // chemin
});

ScrollTrigger.create({
  trigger: document.getElementById('lottie-animation1'),
  containerAnimation: scrollTween,
  start: "center 80%",
  end: "center 80%",
  scrub: false,
  // markers: { startColor: "green", endColor: "yellow" }, // Pour tester
  onEnter: () => {
    lottieAnimation1.play();
  },
  toggleActions: "play none none none",
});

// Animation Lottie 2
let lottieAnimation2 = lottie.loadAnimation({
  container: document.getElementById('lottie-animation2'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: './AnimExports/Assemble test.json' // chemin
});


ScrollTrigger.create({
  trigger: document.getElementById('lottie-animation2'), // Deuxième section
  containerAnimation: scrollTween,
  start: "center 100%",
  end: "center 20%",
  scrub: true,
  // markers: { startColor: "white", endColor: "white" }, // Pour tester
  onUpdate: (self) => {
    let frame = Math.floor(self.progress * (lottieAnimation2.totalFrames - 1));
    lottieAnimation2.goToAndStop(frame, true);
  },
});

// Animation Lottie 3
let lottieAnimation3 = lottie.loadAnimation({
  container: document.getElementById('lottie-animation3'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: './AnimExports/France informations.json' // chemin
});


ScrollTrigger.create({
  trigger: document.getElementById('lottie-animation3'), // Deuxième section
  containerAnimation: scrollTween,
  start: "center 50%",
  end: "center 30%",
  scrub: true,
  // markers: { startColor: "blue", endColor: "red" }, // Pour tester
  onUpdate: (self) => {
    let frame = Math.floor(self.progress * (lottieAnimation3.totalFrames - 1));
    lottieAnimation3.goToAndStop(frame, true);
  },
});

// Animation Lottie 4
let lottieAnimation4 = lottie.loadAnimation({
  container: document.getElementById('lottie-animation4'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: './AnimExports/GRAPH preference fr.json' // chemin
});


ScrollTrigger.create({
  trigger: document.getElementById('lottie-animation4'), // Deuxième section
  containerAnimation: scrollTween,
  start: "center 80%",
  end: "center 55%",
  scrub: true,
  // markers: { startColor: "blue", endColor: "red" }, // Pour tester
  onUpdate: (self) => {
    let frame = Math.floor(self.progress * (lottieAnimation4.totalFrames - 1));
    lottieAnimation4.goToAndStop(frame, true);
  },
});

// Animation Lottie 5
let lottieAnimation5 = lottie.loadAnimation({
  container: document.getElementById('lottie-animation5'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: './AnimExports/Pourcentage utilisation.json' // chemin
});

ScrollTrigger.create({
  trigger: document.getElementById('lottie-animation5'),
  containerAnimation: scrollTween,
  start: "center 50%",
  end: "center 50%",
  scrub: false,
  // markers: { startColor: "green", endColor: "yellow" }, // Pour tester
  onEnter: () => {
    lottieAnimation5.play();
  },
  toggleActions: "play none none none",
});

// Animation Lottie 6
let lottieAnimation6 = lottie.loadAnimation({
  container: document.getElementById('lottie-animation6'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: './AnimExports/GEN Z + ENSEMBLE.json' // chemin
});

ScrollTrigger.create({
  trigger: document.getElementById('lottie-animation6'),
  containerAnimation: scrollTween,
  start: "center 50%",
  end: "center 50%",
  scrub: false,
  // markers: { startColor: "green", endColor: "yellow" }, // Pour tester
  onEnter: () => {
    lottieAnimation6.play();
  },
  toggleActions: "play none none none",
});






// // section 1 : Simple Animation
// gsap.to(".box-1", {
//   y: -130,
//   duration: 2,
//   ease: "elastic",
//   scrollTrigger: {
//     trigger: ".box-1",
//     containerAnimation: scrollTween,
//     start: "center 80%",
//     end: "center 58%",
//     toggleActions: "play none none reset",
//     markers: { startColor: "white", endColor: "white" },
//   },
// });

// section 2 : Animation with scrub
gsap.to(".box-2", {
  y: -120,
  backgroundColor: "#1e90ff",
  ease: "none",
  scrollTrigger: {
    trigger: ".box-2",
    containerAnimation: scrollTween,
    scrub: true,
    start: "center 80%",
    end: "center 58%",
    // markers: { startColor: "white", endColor: "white" },
  },
});

// section 3 : Toggle class
ScrollTrigger.create({
  trigger: ".box-3",
  containerAnimation: scrollTween,
  toggleClass: "active",
  start: "center 80%",
  end: "center 58%",
  // markers: { startColor: "white", endColor: "white" },
});

// section 4 : Custom function
ScrollTrigger.create({
  trigger: ".panel--purple",
  containerAnimation: scrollTween,
  start: "center 80%",
  end: "center 58%",
  onEnter: () => console.log("enter"),
  onLeave: () => console.log("leave"),
  onEnterBack: () => console.log("enterBack"),
  onLeaveBack: () => console.log("leaveBack"),
  onToggle: (self) => console.log("active", self.isActive),
  // markers: { startColor: "white", endColor: "white" },
});