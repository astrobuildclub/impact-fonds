// SVG Path Animation Script
function initSVGAnimation() {
  // Only run in the browser
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const mask = document.getElementById('mask');
  if (!mask) return;

  const svgPath = document.getElementById('svgPath');
  if (!svgPath || typeof svgPath.getTotalLength !== 'function') return;

  try {
    const l = svgPath.getTotalLength();
    const dasharray = l;
    let dashoffset = l;

    mask.style.strokeDasharray = dasharray.toString();
    mask.style.strokeDashoffset = dashoffset.toString();

    window.addEventListener('scroll', function() {
      const top = document.body.scrollTop + document.documentElement.scrollTop;
      const sHeight = document.documentElement.scrollHeight;
      const cHeight = document.documentElement.clientHeight;
      const scrollie = l - (top * l) / (sHeight - cHeight);
      mask.style.strokeDashoffset = scrollie.toString();
    });
  } catch (error) {
    console.warn('SVG Animation initialization failed:', error);
  }
}

// Initialize when DOM is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSVGAnimation);
  } else {
    initSVGAnimation();
  }
}
