import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { SectionLabel } from "../common/SectionLabel";
import { CONTACT_EMAIL } from "../../models/portfolio";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../../lib/emailjs";

type FormState = "idle" | "loading" | "success" | "error";

/* ── Inline SVG icons ─────────────────────────────────────── */
function GmailIcon() {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452H16.89v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.982 1.982 0 01-1.98-1.981 1.98 1.98 0 111.98 1.981zm1.692 13.019H3.645V9H7.03v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

/* ── Component ────────────────────────────────────────────── */
export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (state === "loading") return;
    setState("loading");
    setErrorMsg("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setState("success");
      formRef.current?.reset();
    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      setErrorMsg(
        "Something went wrong. Please email me directly at " + CONTACT_EMAIL
      );
      setState("error");
    }
  };

  return (
    <section id="contact" className="section contact reveal">
      <SectionLabel number="07" title="Get In Touch" />

      <div className="contact-copy">
        <h2>Ready to build something that actually works?</h2>
        <p>
          Whether you have a fully specced brief or just a rough idea — reach
          out. I'll tell you honestly whether I'm the right fit, and we'll take
          it from there. No fluff, no long onboarding. Just results.
        </p>

        {/* ── Icon-based social links ─── */}
        <div className="socials">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="social-btn"
            aria-label={`Email: ${CONTACT_EMAIL}`}
            title={CONTACT_EMAIL}
          >
            <GmailIcon />
            <span>{CONTACT_EMAIL}</span>
          </a>

          <a
            href="https://www.linkedin.com/in/jahanzaib-khan-8aa560401/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <LinkedInIcon />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>

      {/* ── Contact Form ──────────────────────────────────── */}
      <form
        ref={formRef}
        className="contact-form"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* EmailJS reads these `name` attrs as template variables */}
        <label>
          Name
          <input
            type="text"
            name="from_name"
            placeholder="Your full name"
            required
            disabled={state === "loading" || state === "success"}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="from_email"
            placeholder="you@company.com"
            required
            disabled={state === "loading" || state === "success"}
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows={5}
            placeholder="Tell me about your project — scope, timeline, and what you're trying to achieve."
            required
            disabled={state === "loading" || state === "success"}
          />
        </label>

        {/* Hidden — maps to {{to_email}} in your EmailJS template */}
        <input type="hidden" name="to_email" value={CONTACT_EMAIL} />

        {/* Status feedback */}
        {state === "success" && (
          <div className="form-status success" role="alert">
            <span className="status-icon">✓</span>
            Message sent! I'll get back to you within 24 hours.
          </div>
        )}
        {state === "error" && (
          <div className="form-status error" role="alert">
            <span className="status-icon">✕</span>
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          className="submit-btn"
          disabled={state === "loading" || state === "success"}
          aria-busy={state === "loading"}
        >
          {state === "loading" ? (
            <span className="btn-spinner" aria-hidden="true" />
          ) : state === "success" ? (
            "Message Sent ✓"
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </section>
  );
}
