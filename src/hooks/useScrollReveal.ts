import { type RefObject, useEffect } from 'react';

export function useScrollReveal(
  ref: RefObject<HTMLElement | null>,
  threshold = 200
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      if (el.getBoundingClientRect().top < window.innerHeight - threshold) {
        el.classList.add('active');
        window.removeEventListener('scroll', reveal);
      }
    };

    window.addEventListener('scroll', reveal, { passive: true });
    reveal();

    return () => window.removeEventListener('scroll', reveal);
  }, [ref, threshold]);
}
