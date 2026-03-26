import { RefreshCw, LayoutGrid, Code2, Tags, Search, Zap, Globe, Database, SlidersHorizontal } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: RefreshCw,
    tag: 'Core',
    title: 'Annual Recursion',
    desc: 'Set a day and month — the post appears automatically every year on that exact date, forever.',
  },
  {
    icon: LayoutGrid,
    tag: 'Display',
    title: 'Two Layouts',
    desc: 'Standard list layout for pages, compact layout ideal for sidebars and widgets. Both fully styled.',
  },
  {
    icon: Code2,
    tag: 'Flexible',
    title: 'Shortcode & Block',
    desc: 'Use [herodotus] or the Gutenberg block. Supports layout, limit, category, excerpt and image attributes.',
  },
  {
    icon: Tags,
    tag: 'Organize',
    title: 'Custom Taxonomy',
    desc: 'Group events into categories like Science, Politics, or Birthdays. Filter with category attribute.',
  },
  {
    icon: Search,
    tag: 'SEO',
    title: 'SEO & Social Ready',
    desc: 'Automatic Open Graph, Twitter Cards, and JSON-LD Schema.org markup. Smart detection of Yoast & RankMath.',
  },
  {
    icon: Zap,
    tag: 'Performance',
    title: 'Built-in Caching',
    desc: 'Transient caching with configurable TTL. Auto-clears on save. Compatible with WP Super Cache & LiteSpeed.',
  },
  {
    icon: Globe,
    tag: 'i18n',
    title: 'Multilingual Ready',
    desc: 'WPML & Polylang compatible. Ships with translations for 8 languages including French, German, Spanish and more.',
  },
  {
    icon: Database,
    tag: 'Architecture',
    title: 'Dedicated Post Type',
    desc: 'Keeps your regular blog completely separate. Uses its own herodotus_post CPT — zero interference.',
  },
  {
    icon: SlidersHorizontal,
    tag: 'Admin',
    title: 'Sortable & Smart',
    desc: 'Admin columns for date and year, both sortable. Warning icons for posts missing dates. Full control in settings.',
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
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

  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      className="group relative border border-wp-border rounded-lg p-6 bg-wp-darker/40 backdrop-blur-sm hover:border-wp-blue/40 hover:bg-wp-blue/[0.04] transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        filter: visible ? 'blur(0)' : 'blur(4px)',
        transition: `opacity 0.6s ease-out ${index * 80}ms, transform 0.6s ease-out ${index * 80}ms, filter 0.6s ease-out ${index * 80}ms, border-color 0.3s, background-color 0.3s`,
      }}
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-md bg-wp-blue/10 border border-wp-blue/20 flex items-center justify-center shrink-0 group-hover:bg-wp-blue/20 transition-colors duration-300">
          <Icon className="w-5 h-5 text-wp-blue" />
        </div>
        <div>
          <span className="text-[10px] tracking-[0.2em] text-wp-blue/10 uppercase">[{feature.tag}]</span>
          <h3 className="text-white font-semibold text-base mt-1">{feature.title}</h3>
          <p className="text-wp-text-dim text-sm mt-2 leading-relaxed">{feature.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-wp-blue/10 text-xs tracking-[0.3em] uppercase mb-3">// Features //</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Everything You Need</h2>
          <p className="mt-4 text-wp-text-dim text-sm max-w-lg mx-auto">
            One plugin, zero bloat. Herodotus does one thing exceptionally well — recurring historical events.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <FeatureCard key={f.tag} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
