import React from 'react';
import { developerProfile } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="sec">
      <div className="wrap">
        <p className="kicker">About</p>
        <h2 className="h2">About me</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Column: Narrative */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              I was drawn to programming by a simple idea — a few lines of code can become a tool that real people rely on every day. The moment my first page came alive in the browser, I knew I wanted to understand everything underneath it.
            </p>
            <p className="muted leading-relaxed">
              I gravitate toward problems that sit between users and data: designing clean data models, building APIs, and crafting interfaces that make complex workflows feel effortless. As a Software Engineering student, I developed the <strong>University Lost and Found</strong> campus asset recovery system and the <strong>Students Performance Prediction</strong> machine learning model.
            </p>
            <p className="muted leading-relaxed">
              My goal is an internship or software engineering role where I can contribute to real products, learn from experienced engineers, and ship features that genuinely matter.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="eyebrow">{developerProfile.location}</span>
              <span className="eyebrow">{developerProfile.education}</span>
              <span className="eyebrow">Open to internships</span>
            </div>
          </div>

          {/* Right Column: 3 Cards */}
          <div className="grid gap-4">
            <div className="card about-card">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">💡</span>
                <h3 className="font-semibold text-base">Interests</h3>
              </div>
              <p className="muted text-sm leading-relaxed">
                Full-stack web apps, campus digital infrastructure, applied machine learning, and clean database architectures.
              </p>
            </div>

            <div className="card about-card">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">📈</span>
                <h3 className="font-semibold text-base">Learning goals</h3>
              </div>
              <p className="muted text-sm leading-relaxed">
                Deeper React and TypeScript patterns, rigorous testing practices, cloud deployment, and scalable backend architecture.
              </p>
            </div>

            <div className="card about-card">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">⚡</span>
                <h3 className="font-semibold text-base">How I work</h3>
              </div>
              <p className="muted text-sm leading-relaxed">
                Small iterations, clean commits, readable code — and asking questions early rather than guessing late.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
