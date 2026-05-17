export function HeroProfileCard() {
  return (
    <aside className="hero-card" aria-label="Jahanzaib Khan – Designer & Developer">
      {/* ── Photo only — all text/links are ON the image ─── */}
      <div className="avatar-link">
        <img
          src="/jahanzaibkhan.png"
          alt="Jahanzaib Khan – UI/UX Designer and Full-Stack Developer"
          className="avatar-photo"
          draggable={false}
        />

        {/* Top-right: availability badge */}
        <span className="avatar-badge">Available ✦</span>

        {/* Bottom overlay: name + title + icon links */}
        <div className="avatar-overlay">
          <div className="avatar-overlay-text">
            <span className="avatar-name">Jahanzaib Khan</span>
            <span className="avatar-title">Designer &amp; Full-Stack Developer</span>
          </div>

          {/* Email + LinkedIn icon buttons — overlaid on photo */}
          <div className="avatar-social">
            <a
              href="mailto:jahanzaibkhan@gmail.com"
              aria-label="Email Jahanzaib"
              className="avatar-icon-btn"
              title="Send Email"
            >
              {/* Gmail / Email icon */}
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/>
                <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/jahanzaib-khan-8aa560401/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="avatar-icon-btn"
              title="LinkedIn"
            >
              {/* LinkedIn icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452H16.89v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.982 1.982 0 01-1.98-1.981 1.98 1.98 0 111.98 1.981zm1.692 13.019H3.645V9H7.03v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
