import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const firstName = PERSONAL_INFO.name.split(' ')[0];

  const FillWord = ({ word, delay, constant = false }: { word: string; delay: string; constant?: boolean }) => (
    <span 
      className={`relative inline-block ${constant ? '' : 'group-hover:text-sky-400 transition-colors duration-300'}`}
      style={{ transitionDelay: constant ? '0ms' : delay }}
    >
      <span 
        className="relative z-10"
        style={!constant ? {
          WebkitTextStroke: '1px rgba(56, 189, 248, 0.3)',
          color: 'transparent',
          transition: 'color 0.3s ease-in-out',
          transitionDelay: delay
        } : { color: '#38bdf8' }}
      >
        {word}
      </span>
      {!constant && (
        <span 
          className="absolute top-0 left-0 w-0 group-hover:w-full overflow-hidden transition-all duration-500 ease-in-out whitespace-nowrap text-sky-400 select-none z-20"
          style={{ transitionDelay: delay }}
        >
          {word}
        </span>
      )}
    </span>
  );

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute top-1/4 -left-20 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      <div 
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
      ></div>
      <div 
        className="absolute top-10 left-1/2 w-40 h-40 bg-sky-400/5 rounded-full blur-2xl pointer-events-none transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${scrollY * 0.4}px) translateX(-50%)` }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-mono mb-8 animate-pulse">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          <span>Available for Strategic Analytics Projects</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight group cursor-default select-none">
          <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-4">
            <FillWord word="Hello," delay="0ms" />
            <FillWord word="I'm" delay="100ms" />
            <FillWord word={firstName} delay="0ms" constant={true} />
            <FillWord word="." delay="200ms" />
          </div>
          <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-4 mt-2">
            <FillWord word="I" delay="300ms" />
            <FillWord word="Build" delay="400ms" />
            <span className="relative inline-block group-hover:text-indigo-400 transition-colors duration-300" style={{ transitionDelay: '500ms' }}>
              <span className="relative z-10" style={{ WebkitTextStroke: '1px rgba(129, 140, 248, 0.3)', color: 'transparent', transition: 'color 0.3s ease-in-out', transitionDelay: '500ms' }}>Data</span>
              <span className="absolute top-0 left-0 w-0 group-hover:w-full overflow-hidden transition-all duration-500 ease-in-out whitespace-nowrap text-indigo-400 select-none z-20" style={{ transitionDelay: '500ms' }}>Data</span>
            </span>
            <span className="relative inline-block group-hover:text-indigo-400 transition-colors duration-300" style={{ transitionDelay: '600ms' }}>
              <span className="relative z-10" style={{ WebkitTextStroke: '1px rgba(129, 140, 248, 0.3)', color: 'transparent', transition: 'color 0.3s ease-in-out', transitionDelay: '600ms' }}>Stories.</span>
              <span className="absolute top-0 left-0 w-0 group-hover:w-full overflow-hidden transition-all duration-500 ease-in-out whitespace-nowrap text-indigo-400 select-none z-20" style={{ transitionDelay: '600ms' }}>Stories.</span>
            </span>
          </div>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          {PERSONAL_INFO.tagline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Palak_Jain_Resume.pdf" 
            className="group flex items-center space-x-2 px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-indigo-500/25 scale-105 active:scale-95"
          >
            <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download Resume</span>
          </a>
          <a
            href="#projects"
            className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-sky-500/25 active:scale-95"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;