import { Footer, Button, Checkbox } from 'ogilvy-design-system';
import taleedLogoWhite from '../../assets/taleed-logo-white.svg';
import './TaleedFooter.scss';

// ─── Icons ────────────────────────────────────────────────────────────────────

const ArrowCircleRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 16L16 12L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 12L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.738-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// ─── Nav data ─────────────────────────────────────────────────────────────────

const navColumns = [
  {
    title: 'Services',
    links: [
      { label: 'New Business Creation' },
      { label: 'Ecosystem Partnerships' },
      { label: 'Investment Opportunities' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'About Us' },
      { label: 'News' },
      { label: 'Events' },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function TaleedFooter() {
  return (
    <div className="taleed-footer">

      {/* ── Header: logo + CTA ── */}
      <div className="taleed-footer__header">
        <img src={taleedLogoWhite} alt="aramco Taleed" className="taleed-footer__logo" />
        <div className="taleed-footer__cta">
          <span className="taleed-footer__cta-label">Ready to get started?</span>
          <Button
            variant="outlined"
            iconRight={<ArrowCircleRightIcon />}
            className="taleed-footer__cta-btn"
          >
            Get Connected
          </Button>
        </div>
      </div>

      <hr className="taleed-footer__divider" />

      {/* ── Body: 4-column grid ── */}
      <div className="taleed-footer__body">

        {/* Col 1 — Newsletter */}
        <div className="taleed-footer__newsletter">
          <h3 className="taleed-footer__nl-title">
            Subscribe to our<br />newsletter
          </h3>
          <div className="taleed-footer__email-row">
            <input
              type="email"
              placeholder="Email Address"
              className="taleed-footer__email-input"
              aria-label="Email Address"
            />
            <Button
              variant="outlined"
              iconOnly
              icon={<ArrowRightIcon />}
              className="taleed-footer__email-btn"
              aria-label="Subscribe"
            />
          </div>
          <Checkbox
            state="unchecked"
            label={
              <>
                I agree to the{' '}
                <a href="#" className="taleed-footer__terms-link">
                  Terms &amp; Conditions
                </a>
                .
              </>
            }
            className="taleed-footer__checkbox"
          />
          <div className="taleed-footer__legal">
            <a href="#" className="taleed-footer__legal-link">Privacy Policy</a>
            <a href="#" className="taleed-footer__legal-link">Terms &amp; Conditions</a>
          </div>
        </div>

        {/* Col 2 + 3 — DS Footer (Services + About) */}
        <div className="taleed-footer__nav-wrapper">
          <Footer
            theme="dark"
            showNewsletterBar={false}
            showOpeningHours={false}
            navColumns={navColumns}
            logo={<></>}
            socialLinks={[]}
            legalLinks={[]}
            copyright=""
          />
        </div>

        {/* Col 4 — Resources + Social */}
        <div className="taleed-footer__resources">
          <p className="taleed-footer__resources-title">Resources</p>
          <a href="#" className="taleed-footer__resources-link">Madd Platform</a>
          <a href="#" className="taleed-footer__resources-link">National e-commerce platform</a>
          <div className="taleed-footer__social">
            <Button variant="filled" iconOnly icon={<XIcon />} className="taleed-footer__social-btn" aria-label="X (Twitter)" />
            <Button variant="filled" iconOnly icon={<LinkedInIcon />} className="taleed-footer__social-btn" aria-label="LinkedIn" />
            <Button variant="filled" iconOnly icon={<YouTubeIcon />} className="taleed-footer__social-btn" aria-label="YouTube" />
          </div>
        </div>

      </div>
    </div>
  );
}
