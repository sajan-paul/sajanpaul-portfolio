import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const sections = [
  { id: 'home', label: 'home' },
  { id: 'about-me', label: 'about me' },
  { id: 'services', label: 'services' },
  { id: 'my-projects', label: 'my project' },
  { id: 'my-skills', label: 'my skills' },
  { id: 'blog', label: 'blogs' },
  { id: 'contact', label: 'contact' },
];

export default function SectionIndicator() {
  const router = useRouter();
  const [active, setActive] = useState('home');
  const [pageLabel, setPageLabel] = useState('');

  // Check if we're on a non-home page
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const pathname = router.pathname;
    
    if (pathname === '/projects') {
      setPageLabel('projects');
      return;
    } else if (pathname.startsWith('/blog/')) {
      setPageLabel('blog');
      return;
    } else {
      setPageLabel('');
    }
  }, [router.pathname]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // If we're on a non-home page, don't track sections
    if (pageLabel) {
      return;
    }

    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    const update = () => {
      const viewportCenter = window.innerHeight / 2;
      let current = active;
      for (const el of els) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          current = el.id;
          break;
        }
      }
      if (current !== active) setActive(current);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, [active, pageLabel]);

  const label = pageLabel || (sections.find((s) => s.id === active)?.label ?? '');
  const letters = label.toUpperCase().split('');

  return (
    <div className="pointer-events-none fixed right-1 lg:right-2 top-1/2 -translate-y-1/2 z-[60] hidden md:flex items-center">
      {/* Slim animated line */}
      <div className="relative w-px h-56 lg:h-64 bg-gradient-to-b from-transparent via-secondary-600/50 to-transparent">
        <span className="absolute inset-0 bg-gradient-to-b from-primary-500/70 via-accent-500/40 to-transparent animate-[scrollGlow_2.4s_linear_infinite]" />
      </div>
      {/* Stacked letters beside line */}
      <div className="ml-2 flex flex-col items-center gap-[2px] select-none">
        {letters.map((ch, i) => (
          <span key={`${ch}-${i}`} className="text-[10px] tracking-widest font-mono text-secondary-700 dark:text-secondary-200 opacity-90 animate-[fadeSlide_300ms_ease]">
            {ch}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes scrollGlow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateY(4px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}


