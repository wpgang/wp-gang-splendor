import logo from '../assets/logo.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-12 pb-20">
      {/* Top bar */}
      <div className="flex items-center gap-2 mb-8 text-wp-blue/60 text-xs tracking-[0.3em] uppercase">
        <span className="text-wp-blue/30">//</span>
        <span>WordPress Plugin by WP Gang</span>
        <span className="text-wp-blue/30">//</span>
      </div>

      {/* Logo */}
      <img
        src={logo}
        alt="WP Gang logo"
        className="w-40 h-40 md:w-52 md:h-52 mb-8 drop-shadow-[0_0_40px_rgba(74,144,217,0.2)]"
      />

      {/* Title */}
      <h1 className="text-center">
        <span className="block text-4xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.0]">
          HERODOTUS
        </span>
        <span className="block text-4xl md:text-6xl lg:text-7xl font-medium text-wp-blue tracking-tight leading-[1.1] mt-1">
          ON THIS DAY
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-wp-text-dim text-sm md:text-base max-w-xl text-center leading-relaxed">
        Create recurring "This Day in History" sections on your WordPress site. Posts appear automatically every year — based on day and month.
      </p>

      {/* Stats bar */}
      <div className="mt-10 flex items-center border border-wp-border rounded-lg overflow-hidden bg-wp-darker/60 backdrop-blur-sm">
        <div className="px-6 py-4 text-center border-r border-wp-border">
          <div className="text-xl md:text-2xl font-bold text-wp-blue">V1.0</div>
          <div className="text-[10px] tracking-[0.2em] text-wp-text-dim uppercase mt-1">Stable Release</div>
        </div>
        <div className="px-6 py-4 text-center border-r border-wp-border">
          <div className="text-xl md:text-2xl font-bold text-wp-blue">WP 6.9</div>
          <div className="text-[10px] tracking-[0.2em] text-wp-text-dim uppercase mt-1">Tested Up To</div>
        </div>
        <div className="px-6 py-4 text-center">
          <div className="text-xl md:text-2xl font-bold text-wp-blue">FREE</div>
          <div className="text-[10px] tracking-[0.2em] text-wp-text-dim uppercase mt-1">GPLv2 License</div>
        </div>
      </div>

      {/* CTA buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="#features"
          className="px-8 py-3 bg-wp-blue text-white font-semibold text-sm tracking-[0.15em] uppercase rounded-md hover:bg-wp-blue-light transition-colors duration-200 text-center active:scale-[0.97]"
        >
          Explore Features
        </a>
        <a
          href="#download"
          className="px-8 py-3 border border-wp-border text-wp-text font-semibold text-sm tracking-[0.15em] uppercase rounded-md hover:bg-wp-blue/10 hover:border-wp-blue/40 transition-colors duration-200 text-center active:scale-[0.97]"
        >
          Download Plugin
        </a>
      </div>
    </section>
  );
}
