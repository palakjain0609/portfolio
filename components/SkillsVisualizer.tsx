import React, { useState, useEffect, useRef } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { SKILLS } from '../constants';

const CustomRadarTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/90 backdrop-blur-md border border-sky-500/50 p-3 rounded-xl shadow-2xl">
        <p className="text-sky-400 font-bold text-xs uppercase tracking-wider mb-1">{payload[0].payload.subject}</p>
        <p className="text-white font-mono text-lg">{payload[0].value}% <span className="text-slate-500 text-xs font-sans font-normal">Proficiency</span></p>
      </div>
    );
  }
  return null;
};

const SkillsVisualizer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const radarData = SKILLS
    .filter(s => s.category !== 'Soft Skills')
    .slice(0, 6)
    .map(s => ({
      subject: s.name.length > 10 ? s.name.split(' ')[0] : s.name,
      A: s.level,
      fullMark: 100,
    }));

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-sky-500 mr-2 font-mono">02.</span> Technical Stack
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Chart container */}
          <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] bg-slate-800/30 rounded-3xl p-4 sm:p-6 border border-slate-800 shadow-2xl relative">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: '#94a3b8', fontSize: 10 }} 
                />
                <Tooltip content={<CustomRadarTooltip />} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#38bdf8"
                  fill="#38bdf8"
                  fillOpacity={isVisible ? 0.6 : 0}
                  className="transition-all duration-1000"
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILLS.map((skill, idx) => (
              <div 
                key={skill.name} 
                className="relative p-5 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:border-sky-500/30 transition-all group cursor-help"
              >
                {/* Custom Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-sky-500 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl z-20 mb-2 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-sky-500">
                  {skill.name}: {skill.level}%
                </div>

                <div className="flex justify-between items-center mb-3">
                  <span className="text-slate-300 text-sm font-semibold group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                  <span className={`text-sky-500 font-mono text-xs transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-sky-500 to-indigo-500 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${idx * 100}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsVisualizer;