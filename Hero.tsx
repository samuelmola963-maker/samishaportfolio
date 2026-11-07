import React, { useState, useEffect, useRef } from 'react';
import { Camera, RefreshCw, ZoomIn, X, CheckCircle2 } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  // Default to Samuel Mola's uploaded photo
  const [currentPhoto, setCurrentPhoto] = useState<string>(developerProfile.avatar);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('samuel_custom_photo');
    if (saved) {
      setCurrentPhoto(saved);
    } else {
      setCurrentPhoto(developerProfile.avatar);
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setCurrentPhoto(result);
        localStorage.setItem('samuel_custom_photo', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setCurrentPhoto(developerProfile.avatar);
    localStorage.removeItem('samuel_custom_photo');
  };

  return (
    <section id="home" className="sec hero-bg min-h-screen flex items-center pt-28">
      <div className="wrap relative z-10 grid items-center gap-12 md:grid-cols-2">
        {/* Left Column: Heading and Intro */}
        <div className="flex flex-col items-start gap-5">
          <span className="eyebrow">&lt;/&gt; Open to internships</span>
          <h1 className="h1">
            Hi, I&apos;m <span className="hl">{developerProfile.name}</span>
          </h1>
          <p className="sub">{developerProfile.title}</p>
          <p className="muted max-w-xl text-lg leading-relaxed">
            Building web and mobile applications through code. I study Software Engineering and build practical, reliable apps, from database design to polished interfaces.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a className="btn btn-primary" href="#projects">
              Explore my projects &rarr;
            </a>
            <button
              className="btn btn-outline"
              type="button"
              onClick={onOpenResume}
            >
              Download resume
            </button>
            <a
              className="btn"
              href={developerProfile.github}
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
            <a
              className="btn"
              href={developerProfile.linkedin}
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Column: Samuel Mola's Real Photo inside the Photo Ring */}
        <div className="flex flex-col items-center justify-center">
          <div className="photo-ring relative group">
            <span
              className="dot"
              style={{ width: '3.5rem', height: '3.5rem', top: 0, right: '1rem' }}
              aria-hidden="true"
            ></span>
            <span
              className="dot"
              style={{ width: '2.5rem', height: '2.5rem', bottom: '1.5rem', left: '-0.5rem' }}
              aria-hidden="true"
            ></span>

            {/* Circular Avatar Container with Samuel's real photo */}
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full overflow-hidden border-4 border-orange-500/80 bg-slate-900 shadow-2xl flex items-center justify-center">
              <img
                src={currentPhoto}
                onError={(e) => {
                  // Fallback if path differs
                  const target = e.target as HTMLImageElement;
                  if (target.src !== developerProfile.avatarFallback) {
                    target.src = developerProfile.avatarFallback;
                  }
                }}
                alt={`Portrait of ${developerProfile.name}`}
                width="320"
                height="320"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* View Fullscreen overlay button */}
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                title="View full portrait"
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5"
              >
                <ZoomIn className="w-5 h-5" />
                <span>View Photo</span>
              </button>

              {/* Camera upload button */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                title="Upload another photo"
                className="absolute bottom-3 right-3 p-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg transition-transform hover:scale-110 z-10"
              >
                <Camera className="w-4 h-4" />
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </div>
          </div>

          {/* Portrait Status Label */}
          <div className="mt-4 flex items-center gap-2 text-xs text-muted">
            <span className="flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Samuel Mola · Verified Profile</span>
            </span>
            <span className="text-slate-400">·</span>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="text-orange-500 hover:underline"
            >
              Update photo
            </button>
            {currentPhoto !== developerProfile.avatar && (
              <button
                type="button"
                onClick={handleResetPhoto}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center gap-1 ml-1"
                title="Reset to original uploaded photo"
              >
                <RefreshCw className="w-3 h-3" />
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Photo */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
              <div className="text-xs font-semibold text-slate-200">
                {developerProfile.name} — Profile Photo
              </div>
              <button
                onClick={() => setLightboxOpen(false)}
                className="p-1 text-slate-400 hover:text-white rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <img
              src={currentPhoto}
              alt="Samuel Mola"
              className="w-full rounded-xl object-cover shadow-lg max-h-[70vh]"
            />
            <div className="mt-3 text-center text-xs text-slate-400">
              Software Engineering Student · {developerProfile.location}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
