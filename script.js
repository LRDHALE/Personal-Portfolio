
gsap.registerPlugin(ScrollTrigger);

// Get total number of tiles
const tiles = document.querySelectorAll('.tile');
const totalScrollWidth = tiles.length * window.innerWidth;

gsap.to(".tiles-track", {
  x: () => `-${totalScrollWidth - window.innerWidth}px`,
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-scroll-section",
    start: "top top",
    end: () => `+=${totalScrollWidth}`,
    scrub: 1,
    pin: true,
    anticipatePin: 1,
  }
});

// Horizontal scroll on mouse wheel when hovered
const track = document.querySelector('.tiles-track');
track.addEventListener('wheel', (e) => {
  e.preventDefault();
  window.scrollBy({
    top: e.deltaY,
    behavior: 'smooth'
  });
}, { passive: false });

