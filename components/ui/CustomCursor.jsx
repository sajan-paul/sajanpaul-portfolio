import { useEffect, useRef, useState } from 'react';

const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rippleRef = useRef(null);
  const handRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const particlesRef = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!visible) setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      // spawn a particle
      if (particlesRef.current.length > 22) particlesRef.current.shift();
      particlesRef.current.push({
        id: Math.random().toString(36).slice(2),
        x: e.clientX,
        y: e.clientY,
        life: 1,
        size: 6 + Math.random() * 6,
        hue: 260 + Math.random() * 60,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6
      });
    };

    const animate = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.18);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.18);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }
      // animate particles
      particlesRef.current = particlesRef.current
        .map((p) => ({ ...p, x: p.x + p.vx, y: p.y + p.vy, life: p.life - 0.02 }))
        .filter((p) => p.life > 0);
      rafRef.current = requestAnimationFrame(animate);
    };

    const onDown = () => {
      if (!ringRef.current) return;
      ringRef.current.style.width = '52px';
      ringRef.current.style.height = '52px';
      ringRef.current.style.opacity = '0.85';
      if (rippleRef.current) {
        rippleRef.current.style.opacity = '0.35';
        rippleRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px,0) scale(0)`;
        // force reflow for restart
        // eslint-disable-next-line no-unused-expressions
        rippleRef.current.offsetHeight;
        rippleRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px,0) scale(1)`;
      }
    };
    const onUp = () => {
      if (!ringRef.current) return;
      ringRef.current.style.width = '44px';
      ringRef.current.style.height = '44px';
      ringRef.current.style.opacity = '0.7';
      if (rippleRef.current) {
        rippleRef.current.style.opacity = '0';
      }
    };

    const onEnterInteractive = (ev) => {
      if (!ringRef.current || !dotRef.current) return;
      ringRef.current.style.borderColor = 'rgb(147 51 234)';
      ringRef.current.style.boxShadow = '0 0 24px rgba(147,51,234,0.55)';
      dotRef.current.style.background = 'linear-gradient(135deg, #8b5cf6, #ec4899)';
      dotRef.current.style.boxShadow = '0 0 18px rgba(139,92,246,0.65)';
      // magnetic pull: center ring near target center
      const rect = ev.currentTarget.getBoundingClientRect();
      mouse.current.x = rect.left + rect.width / 2;
      mouse.current.y = rect.top + rect.height / 2;
      // swap to hand icon style
      if (handRef.current && ringRef.current && dotRef.current) {
        handRef.current.style.opacity = '1';
        handRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px,0) scale(1)`;
        ringRef.current.style.opacity = '0';
        dotRef.current.style.opacity = '0';
      }
    };
    const onLeaveInteractive = () => {
      if (!ringRef.current || !dotRef.current) return;
      ringRef.current.style.borderColor = 'rgba(148,163,184,0.6)';
      ringRef.current.style.boxShadow = '0 0 16px rgba(99,102,241,0.35)';
      dotRef.current.style.background = 'linear-gradient(135deg, #6366f1, #22d3ee)';
      dotRef.current.style.boxShadow = '0 0 12px rgba(34,211,238,0.45)';
      if (handRef.current && ringRef.current && dotRef.current) {
        handRef.current.style.opacity = '0';
        handRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px,0) scale(0.9)`;
        ringRef.current.style.opacity = '0.7';
        dotRef.current.style.opacity = '1';
      }
    };

    const addInteractiveListeners = () => {
      const selectors = 'a, button, [role="button"], input, select, textarea, .cursor-pointer';
      const nodes = document.querySelectorAll(selectors);
      nodes.forEach((n) => {
        n.addEventListener('mouseenter', onEnterInteractive);
        n.addEventListener('mouseleave', onLeaveInteractive);
      });
      return () => {
        nodes.forEach((n) => {
          n.removeEventListener('mouseenter', onEnterInteractive);
          n.removeEventListener('mouseleave', onLeaveInteractive);
        });
      };
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    const removeInteractive = addInteractiveListeners();
    rafRef.current = requestAnimationFrame(animate);

    // Hide on touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) setVisible(false);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      removeInteractive();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* click ripple */}
      <div
        ref={rippleRef}
        className="pointer-events-none fixed top-0 left-0 z-[69] hidden sm:block"
        style={{
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
          borderRadius: 9999,
          background: 'radial-gradient(circle, rgba(168,85,247,0.45) 0%, rgba(168,85,247,0.0) 70%)',
          filter: 'blur(1px)',
          transform: 'scale(0)',
          transition: 'transform 420ms cubic-bezier(0.22,1,0.36,1), opacity 420ms ease',
          opacity: 0
        }}
      />
      {/* trailing ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[70] hidden sm:block"
        style={{
          width: 44,
          height: 44,
          marginLeft: -22,
          marginTop: -22,
          borderRadius: 9999,
          border: '2px solid rgba(148,163,184,0.6)',
          boxShadow: '0 0 16px rgba(99,102,241,0.35)',
          backdropFilter: 'blur(3px)',
          background:
            'radial-gradient(100% 100% at 30% 30%, rgba(99,102,241,0.15) 0%, rgba(34,197,94,0.0) 55%)',
          transition: 'width 120ms ease, height 120ms ease, opacity 160ms ease, border-color 160ms ease, box-shadow 160ms ease',
          opacity: 0.7
        }}
      />
      {/* hand pointer for interactive hovers */}
      <div
        ref={handRef}
        className="pointer-events-none fixed top-0 left-0 z-[72] hidden sm:block"
        style={{
          width: 42,
          height: 42,
          marginLeft: -21,
          marginTop: -21,
          opacity: 0,
          transition: 'opacity 180ms ease, transform 220ms cubic-bezier(0.22,1,0.36,1)'
        }}
        dangerouslySetInnerHTML={{ __html: `
          <svg xmlns='http://www.w3.org/2000/svg' width='42' height='42' viewBox='0 0 42 42'>
            <g filter='url(#f1)'>
              <path d='M11 24c-1.2-3 1.4-5.8 3.5-3.7l2.2 2.2V13c0-1.3 1-2.3 2.3-2.3S21.3 11.7 21.3 13v6.8c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3v2.3c0-1.1.9-2 2-2s2 .9 2 2v2.6c0 2.8-1.7 5.4-4.3 6.6-3.7 1.7-8.8 1.6-12.6-.2-1.2-.6-2.1-1.6-2.7-2.8z' fill='white' stroke='rgba(0,0,0,0.18)' stroke-width='1.2' stroke-linejoin='round'/>
              <path d='M16 29c2 2 7 2 9 0' stroke='rgba(0,0,0,0.25)' stroke-width='1.4' stroke-linecap='round'/>
              <circle cx='16' cy='20.5' r='1.2' fill='rgba(0,0,0,0.28)'/>
              <circle cx='20.6' cy='20.2' r='1.2' fill='rgba(0,0,0,0.28)'/>
            </g>
            <defs>
              <filter id='f1' x='0' y='0' width='42' height='42' filterUnits='userSpaceOnUse'>
                <feGaussianBlur stdDeviation='1.2' result='blur'/>
              </filter>
            </defs>
          </svg>
        ` }}
      />
      {/* dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[71] hidden sm:block"
        style={{
          width: 8,
          height: 8,
          marginLeft: -4,
          marginTop: -4,
          borderRadius: 9999,
          background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
          boxShadow: '0 0 12px rgba(34,211,238,0.45)'
        }}
      />
      {/* particles */}
      {particlesRef.current.map((p) => (
        <div
          key={p.id}
          className="pointer-events-none fixed top-0 left-0 z-[68] hidden sm:block"
          style={{
            width: p.size,
            height: p.size,
            marginLeft: -p.size / 2,
            marginTop: -p.size / 2,
            borderRadius: 9999,
            transform: `translate3d(${p.x}px, ${p.y}px, 0)` ,
            background: `radial-gradient(circle, hsla(${p.hue},95%,65%,${p.life}) 0%, hsla(${p.hue},95%,65%,0) 70%)`,
            filter: 'blur(0.5px)'
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;


