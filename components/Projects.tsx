import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectDetail from './ProjectDetail';

const Projects: React.FC = () => {
  const [activeVisuals, setActiveVisuals] = useState<{ [key: string]: number }>({});
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const intervalRefs = useRef<{ [key: string]: number }>({});

  const setProjectVisual = (projectId: string, index: number) => {
    setActiveVisuals(prev => ({ ...prev, [projectId]: index }));
  };

  useEffect(() => {
    if (hoveredProject) {
      const project = PROJECTS.find(p => p.id === hoveredProject);
      if (project?.gallery && project.gallery.length > 1) {
        intervalRefs.current[hoveredProject] = window.setInterval(() => {
          setActiveVisuals(prev => {
            const currentIdx = prev[hoveredProject] || 0;
            const nextIdx = (currentIdx + 1) % project.gallery!.length;
            return { ...prev, [hoveredProject]: nextIdx };
          });
        }, 2000); // Change image every 2 seconds on hover
      }
    } else {
      // Clear all intervals when not hovering
      Object.values(intervalRefs.current).forEach(clearInterval);
      intervalRefs.current = {};
    }

    return () => {
      Object.values(intervalRefs.current).forEach(clearInterval);
    };
  }, [hoveredProject]);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="text-sky-500 mr-2 font-mono">03.</span> Project Showcase
            </h2>
            <p className="text-slate-400 max-w-xl">
              Evidence-based analytics focusing on statistical significance and actionable visualizations.
            </p>
          </div>
          <a href="https://github.com/palakjain0609" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline font-medium flex items-center group">
            All Repositories 
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => {
            const currentVisualIdx = activeVisuals[project.id] || 0;
            
            return (
              <div 
                key={project.id} 
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-slate-800/20 rounded-2xl overflow-hidden border border-slate-800 hover:border-sky-500/40 hover:bg-slate-800/40 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500 flex flex-col cursor-pointer"
              >
                {/* Visual Header */}
                <div className="h-64 overflow-hidden relative bg-slate-900">
                  {/* Base Image (Static/Default) */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${currentVisualIdx === 0 ? 'opacity-100' : 'opacity-20'}`}
                  />
                  
                  {/* Gallery Images with fade transitions */}
                  {project.gallery?.map((item, idx) => (
                    <img 
                      key={idx}
                      src={item.url} 
                      alt={item.caption} 
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                        currentVisualIdx === idx ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  
                  {/* Progress Indicators for Gallery */}
                  {project.gallery && project.gallery.length > 0 && (
                    <div className="absolute bottom-4 left-4 flex gap-2 z-20">
                      {project.gallery.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setProjectVisual(project.id, idx);
                          }}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            currentVisualIdx === idx ? 'bg-sky-500 w-8' : 'bg-white/20 w-3 hover:bg-white/40'
                          }`}
                          aria-label={`Show visual ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Caption Overlay */}
                  {project.gallery && (
                    <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-slate-900/90 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <div className="text-[10px] font-mono text-sky-400 uppercase tracking-widest mb-1">
                        Analysis Phase
                      </div>
                      <div className="text-xs text-white font-medium line-clamp-1">
                        {project.gallery[currentVisualIdx]?.caption}
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-sky-900/5 transition-colors duration-500 pointer-events-none"></div>
                  
                  {/* GitHub Link */}
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-sky-500 hover:scale-110 z-30"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </a>
                  )}
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-2 py-1 rounded bg-slate-900/60 text-slate-400 text-[10px] font-mono border border-slate-700 uppercase tracking-wider group-hover:border-sky-500/30 group-hover:text-sky-300 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <ul className="text-slate-400 text-sm mb-6 flex-grow space-y-2 list-none">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start">
                        <span className="text-sky-500 mr-2 mt-1">▹</span>
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center space-x-6 pt-6 border-t border-slate-800/60 mt-auto">
                    {project.stats.map(stat => (
                      <div key={stat.label}>
                        <div className="text-sky-500 font-bold text-lg">{stat.value}</div>
                        <div className="text-slate-500 text-[10px] uppercase font-mono tracking-tighter">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-sky-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            );
          })}
        </div>
      </div>
      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;