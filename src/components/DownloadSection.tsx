import { useEffect, useRef, useState } from 'react';

const steps = [
  'Upload the plugin to /wp-content/plugins/',
  'Activate via the Plugins menu',
  'Go to Herodotus → Add New',
  'Place [herodotus] on any page',
];

export default function DownloadSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="download" className="relative py-24 px-4">
      <div
        className="max-w-3xl mx-auto text-center"
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        }}
      >
        <div className="text-wp-blue/50 text-xs tracking-[0.3em] uppercase mb-3">// Get Started //</div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Install Herodotus Now</h2>
        <p className="mt-4 text-wp-text-dim text-sm max-w-lg mx-auto leading-relaxed">
          Free, open-source, and ready to go. Upload the plugin to your WordPress site and start creating recurring historical events in minutes.
        </p>

        <div className="mt-12 space-y-4 text-left max-w-md mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-4 border border-wp-border rounded-lg p-4 bg-wp-darker/40"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-20px)',
                transition: `opacity 0.5s ease-out ${300 + i * 100}ms, transform 0.5s ease-out ${300 + i * 100}ms`,
              }}
            >
              <span className="w-7 h-7 rounded bg-wp-blue/10 border border-wp-blue/20 flex items-center justify-center text-wp-blue text-xs font-bold shrink-0">
                {i + 1}
              </span>
              <span className="text-wp-text text-sm pt-0.5">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
