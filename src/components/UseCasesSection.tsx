import { BookOpen, GraduationCap, Music, Calendar } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const cases = [
  {
    icon: BookOpen,
    title: 'History Blogs',
    desc: '"On This Day" sections that update automatically. Perfect for history enthusiasts and educational content.',
  },
  {
    icon: GraduationCap,
    title: 'Schools & Museums',
    desc: 'Daily historical facts for students and visitors. Set once, it runs every year without maintenance.',
  },
  {
    icon: Music,
    title: 'Music & Art Sites',
    desc: 'Track album releases, artist birthdays, or exhibition anniversaries. Compact layout fits any sidebar.',
  },
  {
    icon: Calendar,
    title: 'Anniversary Trackers',
    desc: 'Company milestones, memorial dates, or birthday calendars. Category filtering keeps everything organized.',
  },
];

export default function UseCasesSection() {
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
    <section className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <div className="text-wp-blue/50 text-xs tracking-[0.3em] uppercase mb-3">// Use Cases //</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Built For These</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="border border-wp-border rounded-lg p-6 bg-wp-darker/40 backdrop-blur-sm hover:border-wp-blue/40 transition-all duration-300"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  filter: visible ? 'blur(0)' : 'blur(4px)',
                  transition: `opacity 0.6s ease-out ${i * 100}ms, transform 0.6s ease-out ${i * 100}ms, filter 0.6s ease-out ${i * 100}ms, border-color 0.3s`,
                }}
              >
                <Icon className="w-8 h-8 text-wp-blue mb-4" />
                <h3 className="text-white font-semibold text-lg">{c.title}</h3>
                <p className="text-wp-text-dim text-sm mt-2 leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
