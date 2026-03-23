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
}

export default function FloatingCode() {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    const generated: FloatingItem[] = codeSnippets.map((text, i) => ({
      id: i,
      text,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: 0.04 + Math.random() * 0.06,
      speed: 0.2 + Math.random() * 0.3,
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
            linear-gradient(rgba(74,144,217,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,144,217,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(74,144,217,0.08) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      {/* Floating code text */}
      {items.map((item) => (
        <span
          key={item.id}
          className="absolute text-wp-blue font-mono text-xs select-none"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            opacity: item.opacity,
            animation: `float ${20 + item.speed * 20}s linear infinite`,
          }}
        >
          {item.text}
        </span>
      ))}
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-wp-blue/[0.03] rounded-full blur-[120px]" />
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
      `}</style>
    </div>
  );
}
