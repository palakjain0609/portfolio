import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: PERSONAL_INFO.linkedin,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      color: 'hover:text-sky-400'
    },
    {
      name: 'GitHub',
      href: PERSONAL_INFO.github,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: 'hover:text-white'
    },
    {
      name: 'Email',
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'hover:text-indigo-400'
    },
    {
      name: 'Mobile',
      href: `tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      color: 'hover:text-sky-300'
    }
  ];

  return (
    <footer className="py-16 border-t border-slate-800 bg-slate-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo or Name */}
          <div className="text-xl font-bold text-white mb-8 tracking-wider">
            PALAK<span className="text-sky-500">JAIN</span>
          </div>

          {/* Social and Contact Links Grid */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row justify-center gap-6 sm:gap-12 mb-10 w-full max-w-2xl">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                target={link.name !== 'Email' && link.name !== 'Mobile' ? "_blank" : undefined}
                rel={link.name !== 'Email' && link.name !== 'Mobile' ? "noopener noreferrer" : undefined} 
                className={`group flex flex-col items-center space-y-2 transition-all duration-300 ${link.color}`}
              >
                <div className="p-3 rounded-full bg-slate-800 group-hover:bg-slate-700 group-hover:scale-110 transition-all duration-300 border border-slate-700/50 group-hover:border-current shadow-lg">
                  {link.icon}
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 group-hover:text-slate-300">
                  {link.name}
                </span>
                {link.name === 'Mobile' && (
                  <span className="hidden sm:block text-[10px] text-slate-600 group-hover:text-slate-400">
                    {PERSONAL_INFO.phone}
                  </span>
                )}
                {link.name === 'Email' && (
                  <span className="hidden sm:block text-[10px] text-slate-600 group-hover:text-slate-400">
                    {PERSONAL_INFO.email}
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-slate-500 text-xs tracking-widest uppercase">
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.
            </p>
            <p className="text-slate-600 text-[10px] font-mono">
              Designed for Data Narrative & Strategy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;