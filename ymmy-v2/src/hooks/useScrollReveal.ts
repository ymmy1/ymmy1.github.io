import { type RefObject, useEffect } from 'react';

export function useScrollReveal(
  ref: RefObject<HTMLElement | null>,
  threshold = 200
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      const top = el.getBoundingClientRect().top;
      el.classList.toggle('active', top < window.innerHeight - threshold);
    };

    window.addEventListener('scroll', reveal, { passive: true });
    reveal();

    return () => window.removeEventListener('scroll', reveal);
  }, [ref, threshold]);
}
