import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  a: number;
  life: number;
  age: number;
}

function createParticle(W: number, H: number): Particle {
  return {
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.2 + 0.3,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    a: Math.random() * 0.7 + 0.35,
    life: Math.random() * 200 + 100,
    age: 0,
  };
}

function resetParticle(p: Particle, W: number, H: number) {
  p.x = Math.random() * W;
  p.y = Math.random() * H;
  p.r = Math.random() * 1.2 + 0.3;
  p.vx = (Math.random() - 0.5) * 0.3;
  p.vy = (Math.random() - 0.5) * 0.3;
  p.a = Math.random() * 0.7 + 0.35;
  p.life = Math.random() * 200 + 100;
  p.age = 0;
}

export default function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let animId: number;

    const COUNT = 120;
    const pts: Particle[] = [];
    for (let i = 0; i < COUNT; i++) {
      const p = createParticle(W, H);
      p.age = Math.random() * p.life;
      pts.push(p);
    }

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    function drawLines() {
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx!.beginPath();
            ctx!.moveTo(pts[i].x, pts[i].y);
            ctx!.lineTo(pts[j].x, pts[j].y);
            ctx!.strokeStyle = `rgba(58,123,213,${0.08 * (1 - d / 100)})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, W, H);
      drawLines();
      for (const p of pts) {
        const t = Math.sin((p.age / p.life) * Math.PI);
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(58,123,213,${p.a * t})`;
        ctx!.fill();
        p.x += p.vx;
        p.y += p.vy;
        p.age++;
        if (p.age > p.life) resetParticle(p, W, H);
      }
      animId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
