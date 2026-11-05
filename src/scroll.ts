let cancelActive: (() => void) | undefined;

/** Calm section navigation without taking control of wheel or touch scrolling. */
export function scrollToSection(target: HTMLElement) {
  cancelActive?.();
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  const start = window.scrollY;
  const inset = (parseFloat(getComputedStyle(root).scrollPaddingTop) || 0)
    + (parseFloat(getComputedStyle(target).scrollMarginTop) || 0);
  const end = Math.max(0, Math.min(
    start + target.getBoundingClientRect().top - inset,
    root.scrollHeight - window.innerHeight,
  ));
  const distance = end - start;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || Math.abs(distance) < 2) {
    window.scrollTo(0, end);
    root.style.scrollBehavior = previous;
    return;
  }
  const duration = Math.min(1400, 850 + Math.abs(distance) * .035);
  const began = performance.now();
  let frame = 0;
  const stop = () => {
    cancelAnimationFrame(frame);
    root.style.scrollBehavior = previous;
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
    window.removeEventListener("keydown", stop);
    cancelActive = undefined;
  };
  cancelActive = stop;
  window.addEventListener("wheel", stop, { passive: true, once: true });
  window.addEventListener("touchstart", stop, { passive: true, once: true });
  window.addEventListener("keydown", stop, { once: true });
  const step = (now: number) => {
    const progress = Math.min(1, (now - began) / duration);
    const eased = progress < .5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;
    window.scrollTo(0, start + distance * eased);
    if (progress < 1) frame = requestAnimationFrame(step);
    else stop();
  };
  frame = requestAnimationFrame(step);
}
