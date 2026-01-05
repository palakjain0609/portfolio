import React from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-slate-800 rounded-lg shadow-2xl w-full max-w-4xl max-h-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
            aria-label="Close project details"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map(tech => (
              <span key={tech} className="px-2 py-1 rounded bg-slate-700 text-sky-300 text-xs font-mono">
                {tech}
              </span>
            ))}
          </div>

          <p className="text-slate-300 mb-6">{project.description}</p>
          
          <h3 className="text-xl font-semibold text-white mb-3">Key Highlights</h3>
          <ul className="text-slate-400 space-y-2 list-disc list-inside mb-6">
            {project.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
          
          <h3 className="text-xl font-semibold text-white mb-4">Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery?.map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden border border-slate-700">
                <img src={item.url} alt={item.caption} className="w-full h-auto object-cover"/>
                {item.caption && <p className="text-xs text-center p-2 bg-slate-900 text-slate-400">{item.caption}</p>}
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
