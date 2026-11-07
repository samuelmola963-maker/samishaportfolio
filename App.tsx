/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Journey } from './components/Journey';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CodeBackground } from './components/CodeBackground';
import { LostAndFoundDemoModal } from './components/LostAndFoundDemoModal';
import { StudentPredictionDemoModal } from './components/StudentPredictionDemoModal';
import { ResumeModal } from './components/ResumeModal';
import { DeploymentGuideModal } from './components/DeploymentGuideModal';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [lostAndFoundOpen, setLostAndFoundOpen] = useState<boolean>(false);
  const [studentPredictionOpen, setStudentPredictionOpen] = useState<boolean>(false);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [deployGuideOpen, setDeployGuideOpen] = useState<boolean>(false);

  useEffect(() => {
    let savedTheme: string | null = null;
    try {
      savedTheme = localStorage.getItem('theme');
    } catch (e) {
      // ignore
    }

    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        try {
          localStorage.setItem('theme', 'dark');
        } catch (e) {
          // ignore
        }
      } else {
        document.documentElement.classList.remove('dark');
        try {
          localStorage.setItem('theme', 'light');
        } catch (e) {
          // ignore
        }
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen text-[var(--text)] bg-[var(--bg)] transition-colors duration-200 relative">
      {/* Code Background Layer */}
      <CodeBackground />

      <a className="skip" href="#main">
        Skip to content
      </a>

      {/* Fixed Site Header matching DevSolan */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <main id="main">
        {/* Hero Section */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* About Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects Section with Samuel's Projects */}
        <Projects
          onOpenLostAndFoundDemo={() => setLostAndFoundOpen(true)}
          onOpenStudentPredictionDemo={() => setStudentPredictionOpen(true)}
        />

        {/* Education Section */}
        <Education />

        {/* Journey Section */}
        <Journey />

        {/* GitHub Section */}
        <GitHubSection onOpenGuide={() => setDeployGuideOpen(true)} />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive System Simulators & Resume Modals */}
      <LostAndFoundDemoModal
        isOpen={lostAndFoundOpen}
        onClose={() => setLostAndFoundOpen(false)}
      />

      <StudentPredictionDemoModal
        isOpen={studentPredictionOpen}
        onClose={() => setStudentPredictionOpen(false)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <DeploymentGuideModal
        isOpen={deployGuideOpen}
        onClose={() => setDeployGuideOpen(false)}
      />
    </div>
  );
}
