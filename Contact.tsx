import React, { useState } from 'react';
import { developerProfile } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const mailtoSubject = encodeURIComponent(subject || `Portfolio Inquiry from ${name || 'Prospective Collaborator'}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent from Samuel Mola Portfolio Website`
    );

    window.location.href = `mailto:${developerProfile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="sec">
      <div className="wrap">
        <p className="kicker" style={{ textAlign: 'center' }}>
          Contact
        </p>
        <h2 className="h2" style={{ textAlign: 'center' }}>
          Let&apos;s work together
        </h2>
        <p
          className="muted"
          style={{ textAlign: 'center', maxWidth: '32rem', margin: '0 auto 2.5rem' }}
        >
          Have a project in mind, an internship opportunity, or want to collaborate? Send me a message and I&apos;ll respond within 24 hours.
        </p>

        <div className="grid gap-6 md:grid-cols-[1fr_320px]">
          {/* Contact Form */}
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="card flex flex-col gap-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <input
                  className="contact-input"
                  type="text"
                  id="cf-name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  aria-label="Your name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <input
                  className="contact-input"
                  type="email"
                  id="cf-email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  aria-label="Email address"
                />
              </div>
            </div>

            <input
              className="contact-input"
              type="text"
              id="cf-subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              aria-label="Subject"
            />

            <textarea
              className="contact-input"
              id="cf-message"
              name="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project or opportunity..."
              required
              aria-label="Message"
            ></textarea>

            <div>
              <button className="btn btn-primary gap-2" type="submit">
                Send Message
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>

              {submitted && (
                <p className="text-sm mt-3 text-emerald-600 font-medium" aria-live="polite">
                  Email client opened with your message. Thank you for reaching out!
                </p>
              )}
            </div>
          </form>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            <div className="card">
              <p className="font-semibold mb-3">Quick connect</p>
              <a
                className="contact-quick"
                href={`mailto:${developerProfile.email}`}
                aria-label="Email directly"
              >
                <span
                  className="contact-quick-icon"
                  style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                Email Directly
              </a>
            </div>

            <div className="card">
              <p className="font-semibold mb-3">Find me online</p>
              <div className="flex flex-col gap-2">
                <a
                  className="contact-social"
                  href={`mailto:${developerProfile.email}`}
                  aria-label="Email"
                >
                  <span className="contact-social-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <span className="truncate">{developerProfile.email}</span>
                </a>

                <a
                  className="contact-social"
                  href={developerProfile.linkedin}
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                >
                  <span className="contact-social-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </span>
                  LinkedIn Profile
                </a>

                <a
                  className="contact-social"
                  href={developerProfile.github}
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub"
                >
                  <span className="contact-social-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </span>
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
