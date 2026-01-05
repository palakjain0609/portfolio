import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsVisualizer from './components/SkillsVisualizer';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Footer from './components/Footer';
import { PERSONAL_INFO } from './constants';

function App() {
  // Simple intersection observer effect for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-sky-500/30">
      <Navbar />
      <main>
        <div className="animate-on-scroll">
          <Hero />
        </div>
        
        <div id="about" className="max-w-4xl mx-auto py-24 px-6 text-center animate-on-scroll">
          <h2 className="text-3xl font-bold mb-10 flex items-center justify-center">
            <span className="text-sky-500 mr-2 font-mono">01.</span> About Me
          </h2>
          <div className="space-y-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            <p>
              I’m a Data Analyst with a B.Tech background who believes data is only valuable when it drives meaningful decisions. My work focuses on translating raw numbers into actionable business insights.
            </p>
            <p>
              With a strong technical foundation in Python, SQL, and Tableau, I specialize in cleaning complex datasets and building clear, compelling visualizations that support strategic decision-making. I’ve strengthened these skills through certifications from industry leaders such as Cisco and Deloitte, where I developed expertise in data interpretation and predictive analysis.
            </p>
            <p>
              I enjoy bridging the gap between data and business by turning analysis into stories that stakeholders can understand and act on.
            </p>
          </div>
        </div>

        <div className="animate-on-scroll">
          <SkillsVisualizer />
        </div>

        <div className="animate-on-scroll">
          <Projects />
        </div>

        <div className="animate-on-scroll">
          <Certifications />
        </div>

        <div className="animate-on-scroll">
          <Education />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;