// Re-plays the waveform trace animation each time it scrolls into view.
const trace = document.getElementById('tracePath');
 
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      trace.style.animation = 'none';
      // force reflow so the animation restarts
      void trace.getBoundingClientRect();
      trace.style.animation = '';
    }
  });
}, { threshold: 0.4 });
 
observer.observe(trace);
 