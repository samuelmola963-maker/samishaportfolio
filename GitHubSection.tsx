import React from 'react';
import { developerProfile } from '../data/portfolioData';

interface GitHubSectionProps {
  onOpenGuide?: () => void;
}

export const GitHubSection: React.FC<GitHubSectionProps> = ({ onOpenGuide }) => {
  return (
    <section id="github" className="sec" style={{ background: 'var(--bg2)' }}>
      <div className="wrap">
        <p className="kicker">Open source</p>
        <h2 className="h2">GitHub</h2>

        <div className="card">
          <p className="muted mb-4 text-base">
            Follow my code, campus systems, algorithms, experiments, and progress on GitHub.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              className="btn btn-primary"
              href={developerProfile.github}
              target="_blank"
              rel="noopener"
            >
              Visit my GitHub profile
            </a>

            {onOpenGuide && (
              <button
                type="button"
                onClick={onOpenGuide}
                className="btn text-sm"
              >
                GitHub Upload & Deploy Guide
              </button>
            )}

            <span className="text-sm font-mono muted">
              @{developerProfile.githubHandle}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
