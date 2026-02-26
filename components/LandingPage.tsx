import React, { useEffect, useRef } from 'react';

export const LandingPage: React.FC<{ onEnter: () => void }> = ({ onEnter }) => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (starsRef.current) {
      const starsEl = starsRef.current;
      starsEl.innerHTML = ''; // Clear existing
      for (let i = 0; i < 80; i++) {
        const s = document.createElement('div');
        s.className = 'absolute rounded-full bg-white animate-twinkle';
        const size = Math.random() * 2 + 0.5;
        s.style.width = `${size}px`;
        s.style.height = `${size}px`;
        s.style.left = `${Math.random() * 100}%`;
        s.style.top = `${Math.random() * 100}%`;
        s.style.animationDelay = `${Math.random() * 4}s`;
        s.style.opacity = '0.1';
        starsEl.appendChild(s);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-void text-white font-sans overflow-x-hidden selection:bg-plasma selection:text-black">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-5 flex justify-between items-center bg-gradient-to-b from-void/95 to-transparent backdrop-blur-sm">
        <div className="font-serif text-lg font-bold tracking-wide">
          Orbital <em className="italic text-plasma">Theater</em>
        </div>
        <div className="hidden md:flex gap-3">
          <div className="font-mono text-[9px] tracking-[0.2em] text-text-lo uppercase px-3 py-1 border border-rim rounded-full text-verdant border-verdant/30">WorldTree Active</div>
          <div className="font-mono text-[9px] tracking-[0.2em] text-text-lo uppercase px-3 py-1 border border-rim rounded-full">Veo 3.1</div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 overflow-hidden">
        {/* Aurora Background */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(192,132,252,0.07)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 pointer-events-none" ref={starsRef}></div>
        
        {/* Frame */}
        <div className="absolute inset-7 border border-rim pointer-events-none hidden md:block">
          <div className="absolute top-[-1px] left-[-1px] w-4 h-4 border-t-2 border-l-2 border-plasma"></div>
          <div className="absolute bottom-[-1px] right-[-1px] w-4 h-4 border-b-2 border-r-2 border-plasma"></div>
        </div>

        <div className="font-mono text-[9px] tracking-[0.5em] text-plasma uppercase mb-7 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Orbital Theater · Complete Vision
        </div>
        
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          Where Stories<br />
          Become <em className="italic text-plasma">Universes</em>
        </h1>
        
        <p className="font-serif text-lg md:text-2xl italic text-text-mid max-w-2xl leading-relaxed mb-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          The AI-native platform for cinematic storytelling — where creators build worlds, audiences enter them, and every remix deepens the canon.
        </p>

        <div className="flex gap-3 flex-wrap justify-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <Chip label="Veo 3.1 · Native Audio" type="p" />
          <Chip label="WorldTree · Git for Stories" type="g" />
          <Chip label="Firestore · Zero Rebilling" type="a" />
          <Chip label="Immersive Scrollytelling" type="c" />
        </div>

        <button 
          onClick={onEnter}
          className="mt-16 px-10 py-4 bg-plasma text-black font-mono text-xs font-bold tracking-[0.2em] uppercase hover:shadow-[0_0_40px_rgba(192,132,252,0.4)] transition-all transform hover:-translate-y-1"
        >
          Enter Creator Studio
        </button>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-plasma to-transparent opacity-20"></div>

      {/* Pillars */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="font-mono text-[9px] tracking-[0.45em] text-text-lo uppercase mb-14 flex items-center gap-4">
          <div className="w-7 h-px bg-plasma"></div>
          Core Vision
        </div>
        
        <h2 className="font-serif text-4xl md:text-6xl font-bold leading-tight max-w-4xl mb-20">
          The platform that <em className="italic text-plasma">didn't exist</em> — until now.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rim border border-rim">
          <Pillar 
            n="01" 
            title="Create" 
            icon="🎬" 
            head="Your MidJourney frames become living cinema"
            body="Upload any static image as a starting frame. Veo 3.1 animates it into a cinematic scene with natively generated audio. Specify dialogue in quotes — Veo speaks it."
            color="plasma"
          />
          <Pillar 
            n="02" 
            title="WorldTree" 
            icon="🌳" 
            head="Git for your story universe — nothing is ever lost"
            body="Every scene, character, prop, and event is a node in a living knowledge graph. Fork into fan-fiction. Branch into alternate timelines. The WorldTree never forgets."
            color="verdant"
          />
          <Pillar 
            n="03" 
            title="Publish" 
            icon="✨" 
            head="A link that feels like a premiere — not a file"
            body="One click compiles your storyboard into an immersive scrollytelling experience. Full-screen cinematic chapters revealed on scroll. Stories persist in Firestore."
            color="amber"
          />
          <Pillar 
            n="04" 
            title="Remix" 
            icon="⟳" 
            head="Every story is an invitation — every remix is canon"
            body="Viewers tap Remix This Scene — fork the story, adjust the prompt, generate their variation. The WorldTree tracks attribution. You earn royalties on every fork."
            color="ice"
          />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 px-6 md:px-12 border-t border-rim flex flex-wrap justify-between items-center gap-4 text-[9px] font-mono tracking-[0.15em] text-text-dim uppercase">
        <p>Orbital Theater · Product Spec v2.0 · Third Signal Labs</p>
        <p>Veo 3.1 API · Google GenAI</p>
      </footer>
    </div>
  );
};

const Chip: React.FC<{ label: string; type: 'p'|'g'|'a'|'c' }> = ({ label, type }) => {
  const colors = {
    p: 'border-plasma/40 text-plasma bg-plasma/5',
    g: 'border-verdant/40 text-verdant bg-verdant/5',
    a: 'border-amber/40 text-amber bg-amber/5',
    c: 'border-ice/40 text-ice bg-ice/5',
  };
  return (
    <div className={`font-mono text-[9px] tracking-[0.15em] uppercase px-4 py-2 border ${colors[type]}`}>
      {label}
    </div>
  );
};

const Pillar: React.FC<{ n: string; title: string; icon: string; head: string; body: string; color: string }> = ({ n, title, icon, head, body, color }) => {
  const accentColors: Record<string, string> = {
    plasma: 'bg-gradient-to-r from-transparent via-plasma to-transparent',
    verdant: 'bg-gradient-to-r from-transparent via-verdant to-transparent',
    amber: 'bg-gradient-to-r from-transparent via-amber to-transparent',
    ice: 'bg-gradient-to-r from-transparent via-ice to-transparent',
  };

  return (
    <div className="bg-panel p-10 relative group overflow-hidden">
      <div className={`absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${accentColors[color]}`}></div>
      <div className="font-mono text-[10px] text-text-lo tracking-[0.2em] mb-5">{n} — {title.toUpperCase()}</div>
      <div className="text-4xl mb-5">{icon}</div>
      <div className="font-serif text-2xl font-bold leading-tight mb-4">{head}</div>
      <div className="text-sm text-text-mid leading-relaxed">{body}</div>
    </div>
  );
};
