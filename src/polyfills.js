(async () => {
  if (!('IntersectionObserver' in window)
  || !('IntersectionObserverEntry' in window)
  || !('intersectionRatio' in window.IntersectionObserverEntry.prototype)
  || !('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    await import('intersection-observer');
  }
})();
