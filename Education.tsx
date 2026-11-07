import React from 'react';
import { developerProfile } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="sec" style={{ background: 'var(--bg2)' }}>
      <div className="wrap">
        <p className="kicker">Education</p>
        <h2 className="h2">Education</h2>

        <div className="card">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-bold">{developerProfile.education}</h3>
            <span className="muted text-sm">{developerProfile.academicYears}</span>
          </div>

          <p className="muted mb-4">{developerProfile.university}</p>

          <h4 className="font-semibold mb-2">Relevant coursework</h4>
          <div className="mb-6 flex flex-wrap gap-1">
            {developerProfile.coursework.map((course) => (
              <span key={course} className="chip">
                {course}
              </span>
            ))}
          </div>

          <h4 className="font-semibold mb-3">Academic projects</h4>
          <div id="edu-projects" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {developerProfile.academicProjects.map((proj, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-[var(--line)] bg-[var(--bg)] border-l-4 border-l-orange-500"
              >
                <h5 className="font-bold text-sm mb-1">{proj.title}</h5>
                <p className="text-xs muted mb-2">{proj.description}</p>
                <span className="text-[11px] font-mono text-orange-500 font-medium">
                  {proj.tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
