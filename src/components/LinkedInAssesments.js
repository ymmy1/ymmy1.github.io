import React, { useEffect, useRef } from 'react';
import '../styles/css/assessments.css';

export default function LinkedInAssesments({ theme = true }) {
  const containerRef = useRef(null);

  const items = [
    { name: 'CSS', top: 5, pool: '2M+', cls: 'css' },
    { name: 'HTML', top: 15, pool: '3.8M', cls: 'html' },
    { name: 'JavaScript', top: 15, pool: '2.5M', cls: 'javascript' },
    { name: 'React', top: 20, pool: '2M', cls: 'react' },
  ];

  useEffect(() => {
    const section = containerRef.current;
    if (!section) return;

    const io = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          section.classList.add('active');
          section.querySelectorAll('.radial').forEach(r => r.classList.add('animate'));
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <section id="assessments" className="assessments-section fade-bottom" ref={containerRef}>
      <h1>LinkedIn Assessments</h1>
      <div className="assessments-grid">
        {items.map(({ name, top, pool, cls }) => {
          return (
            <div key={name} className="assessment-card">
              <div
                className={`radial skill-${cls}`}
              >
                <div className="radial-center">
                  <div className="percent">Top {top}%</div>
                  <div className="label">{name}</div>
                  <div className="pool">({pool})</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
