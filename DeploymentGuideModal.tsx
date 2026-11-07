import React, { useState } from 'react';
import { developerProfile } from '../data/portfolioData';

interface DeploymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentGuideModal: React.FC<DeploymentGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'web' | 'cli'>('web');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const cliCommands = [
    `git init`,
    `git add .`,
    `git commit -m "Initial portfolio commit - Samuel Mola"`,
    `git branch -M main`,
    `git remote add origin https://github.com/${developerProfile.githubHandle}/portfolio.git`,
    `git push -u origin main`,
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="deploy-guide-title"
      onClick={onClose}
    >
      <div
        className="card w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 relative border border-[var(--border)] shadow-2xl bg-[var(--card)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="btn absolute top-4 right-4 text-sm px-3 py-1 font-mono"
          aria-label="Close modal"
        >
          ✕
        </button>

        <p className="kicker">Deployment Guide</p>
        <h2 id="deploy-guide-title" className="h2 text-2xl font-bold mb-2">
          How to Upload & Publish to GitHub
        </h2>
        <p className="muted text-sm mb-4">
          Simple step-by-step instructions for publishing your portfolio to <strong>github.com/{developerProfile.githubHandle}/portfolio</strong> and hosting it for free with GitHub Pages.
        </p>

        {/* Download Bundle Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 mb-6 rounded-lg bg-orange-500/10 border border-orange-500/30">
          <div>
            <p className="font-semibold text-xs text-[var(--accent)]">Ready-to-upload Bundle</p>
            <p className="text-xs text-slate-300">Download the complete built zip package or use single-file HTML:</p>
          </div>
          <div className="flex gap-2">
            <a
              href="./portfolio.zip"
              download="portfolio.zip"
              className="btn btn-primary text-xs py-1 px-3"
            >
              Download ZIP
            </a>
            <a
              href="./standalone-portfolio.html"
              target="_blank"
              rel="noreferrer"
              className="btn text-xs py-1 px-3"
            >
              Open Single-file HTML
            </a>
          </div>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-[var(--border)] mb-6">
          <button
            onClick={() => setActiveTab('web')}
            className={`pb-2 px-4 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'web'
                ? 'border-[var(--accent)] text-[var(--accent)]'
                : 'border-transparent muted hover:text-[var(--text)]'
            }`}
          >
            Method 1: GitHub Web (No Terminal Needed)
          </button>
          <button
            onClick={() => setActiveTab('cli')}
            className={`pb-2 px-4 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'cli'
                ? 'border-[var(--accent)] text-[var(--accent)]'
                : 'border-transparent muted hover:text-[var(--text)]'
            }`}
          >
            Method 2: Git Terminal & Token
          </button>
        </div>

        {activeTab === 'web' ? (
          <div className="space-y-5 text-sm">
            <div className="p-4 rounded-lg bg-[var(--bg2)] border border-[var(--border)]">
              <span className="font-bold text-[var(--accent)]">Recommended for Beginners:</span>{' '}
              Upload directly via your web browser without worrying about terminal password errors or authentication tokens.
            </div>

            <ol className="list-decimal pl-5 space-y-4">
              <li>
                <strong>Create the Repository:</strong>
                <p className="muted text-xs mt-1">
                  Open <a href="https://github.com/new" target="_blank" rel="noreferrer" className="underline text-[var(--accent)]">github.com/new</a>.
                  Name the repository <code className="bg-[var(--bg2)] px-1 py-0.5 rounded font-mono text-xs">portfolio</code>. Keep it <strong>Public</strong> and click <strong>Create repository</strong>.
                </p>
              </li>
              <li>
                <strong>Upload your Files:</strong>
                <p className="muted text-xs mt-1">
                  On the new repository page, click the link that says: <em>"uploading an existing file"</em>.
                  Drag and drop all project files (or upload the files from your computer) and click <strong>Commit changes</strong>.
                </p>
              </li>
              <li>
                <strong>Turn on GitHub Pages (Free Hosting):</strong>
                <p className="muted text-xs mt-1">
                  In your repository, click <strong>Settings</strong> (top tab) &rarr; on the left menu click <strong>Pages</strong>.
                </p>
                <div className="mt-2 p-3 bg-[var(--bg2)] rounded border border-[var(--border)] text-xs space-y-1">
                  <p>• Under <strong>Build and deployment</strong>, select <strong>Deploy from a branch</strong>.</p>
                  <p>• Under <strong>Branch</strong>, select <code className="font-mono font-bold">main</code> and <code className="font-mono font-bold">/ (root)</code>, then click <strong>Save</strong>.</p>
                </div>
              </li>
              <li>
                <strong>Your Live URL is Ready:</strong>
                <p className="muted text-xs mt-1">
                  Within 1-2 minutes, GitHub will publish your portfolio at:
                </p>
                <div className="mt-1 p-2 bg-[var(--bg2)] rounded font-mono text-xs text-[var(--accent)] font-bold break-all">
                  https://{developerProfile.githubHandle}.github.io/portfolio/
                </div>
              </li>
            </ol>
          </div>
        ) : (
          <div className="space-y-5 text-sm">
            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs">
              <strong>Why did "git push" fail?</strong> GitHub retired account passwords for terminal pushes. When terminal asks for <code className="font-mono">Password:</code>, you must enter a <strong>Personal Access Token (Classic)</strong>, not your GitHub login password!
            </div>

            <div>
              <h4 className="font-semibold mb-2">Step 1: Generate Personal Access Token (PAT)</h4>
              <p className="muted text-xs mb-2">
                Go to GitHub &rarr; <strong>Settings</strong> &rarr; <strong>Developer Settings</strong> &rarr; <strong>Personal Access Tokens</strong> &rarr; <strong>Tokens (classic)</strong> &rarr; <strong>Generate new token</strong>.
                Check the <code className="bg-[var(--bg2)] px-1 rounded font-mono">repo</code> box, generate, and copy the token (<code className="font-mono text-xs">ghp_xxxxxx</code>).
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Step 2: Terminal Commands</h4>
              <p className="muted text-xs mb-2">
                Open your project terminal and run these commands one by one:
              </p>

              <div className="p-3 bg-[var(--bg)] rounded border border-[var(--border)] font-mono text-xs space-y-2">
                {cliCommands.map((cmd, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-2">
                    <span className="text-[var(--accent)] select-all">{cmd}</span>
                    <button
                      onClick={() => copyToClipboard(cmd, idx)}
                      className="px-2 py-0.5 text-[10px] btn"
                    >
                      {copiedIndex === idx ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                ))}
              </div>
              <p className="muted text-xs mt-2">
                When prompted for Username, type: <strong className="font-mono">{developerProfile.githubHandle}</strong>.
                When prompted for Password, paste your <strong>Personal Access Token</strong>.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Step 3: Activate GitHub Pages</h4>
              <p className="muted text-xs">
                In your repository &rarr; <strong>Settings</strong> &rarr; <strong>Pages</strong> &rarr; Source: <strong>Deploy from a branch</strong> &rarr; Branch: <strong>main</strong> &rarr; <strong>Save</strong>.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-[var(--border)] flex justify-end">
          <button onClick={onClose} className="btn btn-primary text-sm">
            Got it, close
          </button>
        </div>
      </div>
    </div>
  );
};
