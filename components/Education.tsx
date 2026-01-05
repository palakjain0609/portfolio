import React from 'react';
// Corrected sequential indexing for clear UI structure
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 flex items-center">
          <span className="text-sky-500 mr-2 font-mono">05.</span> Academic Foundation
        </h2>
        
        <div className="space-y-12">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
              <div className="md:ml-12 border-l-2 border-slate-800 pl-8 pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                    <div className="text-indigo-400 font-medium">{edu.degree}</div>
                  </div>
                  <div className="text-slate-500 font-mono text-sm mt-1 md:mt-0">
                    {edu.period}
                  </div>
                </div>
                
                <div className="text-slate-500 text-xs mb-3 font-mono uppercase tracking-widest flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {edu.location}
                </div>
                
                <p className="text-slate-400 leading-relaxed italic">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;