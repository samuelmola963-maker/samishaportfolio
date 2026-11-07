import React from 'react';
import { developerProfile } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const skillCategories = Object.keys(developerProfile.skills) as (keyof typeof developerProfile.skills)[];

  return (
    <section id="skills" className="sec" style={{ background: 'var(--bg2)' }}>
      <div className="wrap">
        <p className="kicker">Skills</p>
        <h2 className="h2">Technical skills</h2>

        <div id="skills-grid" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category} className="card">
              <h3 className="font-semibold mb-3 text-base">{category}</h3>
              <div className="flex flex-wrap gap-1">
                {developerProfile.skills[category].map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
