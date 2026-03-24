import { useEffect, useState } from 'react';

const codeSnippets = [
  '<div>', 'function(){}', '<?php', '// TODO', 'npm i', 'git push', '=>',
  'const', '.wp-', 'webpack', 'return', '$_POST', 'echo', 'wp_query',
  'npm i', 'const', '<div>', 'function(){}', 'return', '=>', '.wp-',
];

interface FloatingItem {
  id: number;
  text: string;
  x: number;
  y: number;
  opacity: number;
  speed: number;
  size: number;
}

export default function FloatingCode() {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    const generated: FloatingItem[] = codeSnippets.map((text, i) => ({
      id: i,
      text,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: 0.04 + Math.random() * 0.08,
      speed: 0.2 + Math.random() * 0.3,
      size: 10 + Math.random() * 4,
    }));
    setItems(generated);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(58,123,213,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(58,123,213,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Dot grid with pulse */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(58,123,213,0.1) 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px',
          animation: 'dotPulse 4s ease-in-out infinite',
        }}
      />
      {/* Floating code text */}
      {items.map((item) => (
        <span
          key={item.id}
          className="absolute text-wp-blue font-mono select-none"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            opacity: item.opacity,
            fontSize: `${item.size}px`,
            animation: `floatUp ${15 + item.speed * 25}s linear infinite`,
            animationDelay: `${item.id * -1.3}s`,
          }}
        >
          {item.text}
        </span>
      ))}
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-wp-blue/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-wp-blue/[0.03] rounded-full blur-[100px]" />

      {/* Corner brackets */}
      {/* Top-left */}
      <div className="fixed top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-wp-blue/30" style={{ animation: 'cornerGlow 3s ease-in-out infinite' }} />
      {/* Top-right */}
      <div className="fixed top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-wp-blue/30" style={{ animation: 'cornerGlow 3s ease-in-out infinite 0.5s' }} />
      {/* Bottom-left */}
      <div className="fixed bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-wp-blue/30" style={{ animation: 'cornerGlow 3s ease-in-out infinite 1s' }} />
      {/* Bottom-right */}
      <div className="fixed bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-wp-blue/30" style={{ animation: 'cornerGlow 3s ease-in-out infinite 1.5s' }} />

      {/* CRT scanline overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(58,123,213,0.1) 2px, rgba(58,123,213,0.1) 4px)',
          animation: 'scanline 8s linear infinite',
        }}
      />

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(30px); opacity: 0; }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes cornerGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
      `}</style>
    </div>
  );
}
