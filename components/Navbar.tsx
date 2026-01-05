import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = ['about', 'skills', 'projects', 'certifications', 'education'];
      const current = sections.find(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: id === 'home' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-slate-900/80 backdrop-blur-md border-b border-slate-800' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-xl font-bold tracking-tighter text-white group"
        >
          <span className="text-sky-500">P</span>ALAK<span className="text-sky-500">.</span>J
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-2 text-sm font-medium transition-all relative group ${
                  isActive ? 'text-sky-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-sky-500 rounded-full"></span>
                )}
                {!isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
                )}
              </a>
            );
          })}
          
          <a
            href="#ai-chat"
            onClick={(e) => handleNavClick(e, '#ai-chat')}
            className="ml-4 px-5 py-2 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold transition-all shadow-lg shadow-sky-500/20 active:scale-95"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 top-[60px] bg-slate-900/95 backdrop-blur-xl transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          {navItems.map((item, idx) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-2xl font-bold text-slate-300 hover:text-sky-400 transition-colors"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <span className="text-sky-500 font-mono text-sm mr-2">0{idx + 1}.</span>
              {item.name}
            </a>
          ))}
          <a
            href="#ai-chat"
            onClick={(e) => handleNavClick(e, '#ai-chat')}
            className="w-full max-w-xs text-center px-8 py-4 rounded-xl bg-sky-500 text-white font-bold text-lg shadow-xl shadow-sky-500/20"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;