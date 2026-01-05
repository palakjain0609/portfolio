import React from 'react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 flex items-center">
          <span className="text-sky-500 mr-2 font-mono">04.</span> Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div 
              key={idx} 
              className="group relative bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 hover:border-sky-500/50 hover:bg-slate-800/60 transition-all duration-300 flex flex-col h-full shadow-lg"
            >
              {/* Badge Icon */}
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 leading-snug group-hover:text-sky-400 transition-colors">
                {cert.title}
              </h3>
              
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20 text-sky-400 text-xs font-semibold">
                  {cert.issuer}
                </span>
                <span className="text-slate-500 text-[10px] font-mono uppercase tracking-tighter">
                  {cert.date}
                </span>
              </div>
              
              {cert.id && (
                <div className="bg-slate-900/40 rounded-lg px-3 py-2 border border-slate-700/30 mb-6">
                  <div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-0.5">Verification ID</div>
                  <div className="text-xs text-sky-200/80 font-mono break-all">{cert.id}</div>
                </div>
              )}

              <div className="mt-auto pt-4 border-t border-slate-700/30">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-slate-400 hover:text-sky-400 transition-colors group/link"
                >
                  View Credential
                  <svg className="w-4 h-4 ml-1.5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-sky-500/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;