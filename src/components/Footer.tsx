export default function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-wp-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-wp-text-dim text-xs tracking-[0.15em]">
          © {new Date().getFullYear()} WP Gang. Built with clean code and zero bloat.
        </p>
      </div>
    </footer>
  );
}
