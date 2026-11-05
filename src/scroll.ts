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

/** Smooth mouse/trackpad input; touch, keyboard and nested scrollers stay native. */
export function installWheelGlide() {
  const root = document.documentElement;
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  let frame = 0;
  let target = window.scrollY;
  let previousTime = 0;
  let previousBehavior = "";
  const stop = () => {
    if (frame) {
      cancelAnimationFrame(frame);
      root.style.scrollBehavior = previousBehavior;
    }
    frame = 0;
    target = window.scrollY;
    if (cancelActive === stop) cancelActive = undefined;
  };
  const step = (now: number) => {
    const elapsed = Math.min(48, previousTime ? now - previousTime : 16.67);
    previousTime = now;
    target = Math.min(target, Math.max(0, root.scrollHeight - innerHeight));
    const remaining = target - window.scrollY;
    const amount = 1 - Math.exp(-elapsed / 150);
    if (Math.abs(remaining) < 1.5) {
      window.scrollTo(0, target);
      stop();
      return;
    }
    window.scrollTo(0, window.scrollY + remaining * amount);
    frame = requestAnimationFrame(step);
  };
  const onWheel = (event: WheelEvent) => {
    if (event.defaultPrevented || preference.matches || event.ctrlKey || event.metaKey || event.shiftKey || !event.cancelable || Math.abs(event.deltaX) > Math.abs(event.deltaY) || !event.deltaY) return;
    let element = event.target instanceof Element ? event.target : null;
    // Do not steal scrolling from inputs or independently scrolling panels.
    if (element?.closest('input, textarea, select, [contenteditable="true"], [role="dialog"]')) return;
    for (let node = element; node && node !== document.body; node = node.parentElement) {
      const style = getComputedStyle(node);
      if (/(auto|scroll)/.test(style.overflowY) && node.scrollHeight > node.clientHeight + 1) return;
    }
    const delta = event.deltaY * (event.deltaMode === 1 ? 20 : event.deltaMode === 2 ? innerHeight : 1);
    const max = Math.max(0, root.scrollHeight - innerHeight);
    if (!frame && ((window.scrollY <= 0 && delta < 0) || (window.scrollY >= max && delta > 0))) return;
    event.preventDefault();
    if (!frame) {
      cancelActive?.();
      previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      target = window.scrollY;
      previousTime = 0;
      cancelActive = stop;
      frame = requestAnimationFrame(step);
    }
    // A reversal should respond now, not work through leftover momentum.
    if ((target - window.scrollY) * delta < 0) target = window.scrollY;
    target = Math.max(0, Math.min(max, target + delta * .85));
  };
  const onPreference = () => { if (preference.matches) stop(); };
  window.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("touchstart", stop, { passive: true });
  window.addEventListener("keydown", stop);
  window.addEventListener("pointerdown", stop);
  preference.addEventListener("change", onPreference);
  return () => {
    stop();
    window.removeEventListener("wheel", onWheel);
    window.removeEventListener("touchstart", stop);
    window.removeEventListener("keydown", stop);
    window.removeEventListener("pointerdown", stop);
    preference.removeEventListener("change", onPreference);
  };
}
