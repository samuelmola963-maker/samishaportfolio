import React from 'react';
import { developerProfile } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--line)' }}>
      <div className="wrap flex flex-wrap items-center justify-between gap-2 py-6 text-sm muted">
        <p>
          &copy; {new Date().getFullYear()} {developerProfile.name}. All rights reserved.
        </p>
        <a href="#home" className="nav-link">
          Back to top
        </a>
      </div>
    </footer>
  );
};
