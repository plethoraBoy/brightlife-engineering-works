"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { addDoc, collection } from "firebase/firestore";
import { contact } from "@/lib/content";
import { db } from "@/lib/firebase";
import "./contact.css";

const MESSAGE_LIMIT = 600;

type Submission = {
  success: boolean;
  message: string;
};

function StatusIcon({ success }: { success: boolean }) {
  if (success) {
    return (
      <svg className="con-status__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="m7.5 12.4 3 3 6-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg className="con-status__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="17" r="1.2" fill="currentColor" />
    </svg>
  );
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [submission, setSubmission] = useState<Submission | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setSubmission(null);

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        timestamp: new Date(),
      });

      setSubmission({
        success: true,
        message: "Signal received. We'll be in touch shortly.",
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setSubmission({
        success: false,
        message: "Transmission failed. Please try again or call the desk directly.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main id="main" className="con-page">
      <header className="con-hero">
        <span className="con-hero__grid" aria-hidden="true" />

        <div className="wrap con-hero__inner">
          <div className="con-hero__top">
            <p className="eyebrow">CORRESPONDENCE / CHANNEL OPEN</p>
            <span className="sticker sticker--orange con-hero__sticker">
              <span className="con-hero__dot" aria-hidden="true" />
              CH-05 / LIVE
            </span>
          </div>

          <h1 className="h1 con-hero__title">
            OPEN THE
            <br />
            <span className="con-hero__mark">CHANNEL.</span>
          </h1>

          <p className="lede con-hero__lede">
            Security, surveillance, networks, automation or safety — tell us
            what you are solving and we will route it to the right desk.
          </p>

          <div className="con-telemetry">
            <div className="con-telemetry__cell">
              <span className="mono con-telemetry__key">DESK</span>
              <span className="mono con-telemetry__value">CHENNAI / IN</span>
            </div>
            <div className="con-telemetry__cell">
              <span className="mono con-telemetry__key">CONTACT</span>
              <span className="mono con-telemetry__value">{contact.person}</span>
            </div>
            <div className="con-telemetry__cell">
              <span className="mono con-telemetry__key">ROUTE</span>
              <span className="mono con-telemetry__value">PHONE / MAIL / FORM</span>
            </div>
            <div className="con-telemetry__cell">
              <span className="mono con-telemetry__key">SIGNAL</span>
              <span className="con-telemetry__status">
                <span className="wave" aria-hidden="true">
                  {Array.from({ length: 12 }, (_, index) => (
                    <span key={index} style={{ animationDelay: `${index * 0.08}s` }} />
                  ))}
                </span>
                <span className="mono con-telemetry__value">UPLINK 100%</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="wrap con-deck">
        <div className="con-deck__grid">
          <div className="con-dossier">
            <div className="con-cards">
              <section className="con-card con-card--person" aria-labelledby="con-person-title">
                <p className="mono con-card__label">01 / KEY CONTACT</p>
                <h2 className="h3 con-card__value" id="con-person-title">
                  {contact.person}
                </h2>
                <p className="mono con-card__meta">{contact.role}</p>
              </section>

              <section className="con-card con-card--line" aria-labelledby="con-line-title">
                <p className="mono con-card__label" id="con-line-title">02 / DIRECT LINE</p>
                <a className="con-card__link" href={contact.phoneHref}>
                  {contact.phone}
                </a>
                <p className="mono con-card__meta">VOICE / OPEN HOURS</p>
              </section>

              <section className="con-card con-card--mail" aria-labelledby="con-mail-title">
                <p className="mono con-card__label" id="con-mail-title">03 / MAIL</p>
                <div className="con-card__links">
                  {contact.emails.map((emailAddress) => (
                    <a key={emailAddress} href={`mailto:${emailAddress}`}>
                      {emailAddress}
                    </a>
                  ))}
                </div>
              </section>

              <section className="con-card con-card--site" aria-labelledby="con-site-title">
                <p className="mono con-card__label" id="con-site-title">04 / FIELD ADDRESS</p>
                <address className="con-card__address">
                  {contact.address.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
                <span className="sticker sticker--cyan con-card__badge">CHENNAI / 600 070</span>
              </section>
            </div>

            <section className="con-map" aria-labelledby="con-map-title">
              <div className="con-map__bar">
                <p className="mono con-map__title" id="con-map-title">
                  SITE FEED / ANAKAPUTHUR
                </p>
                <span className="mono con-map__folio">MAP / 01</span>
              </div>

              <div className="con-map__frame">
                <iframe
                  title="Map showing Brightlife Engineering Works' location in Anakaputhur, Chennai"
                  src={contact.mapSrc}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <span className="scanlines" aria-hidden="true" />
                <span className="brackets" aria-hidden="true" />
                <span className="mono con-map__scrim" aria-hidden="true">
                  ANAKAPUTHUR / CHENNAI 600 070
                </span>
              </div>

              <p className="mono con-map__caption">FIG. 01 — EMBED FEED / LOCATION LOCK</p>
            </section>
          </div>

          <aside className="con-console" aria-labelledby="con-console-title">
            <form className="con-console__panel" onSubmit={handleSubmit}>
              <span className="aurora" aria-hidden="true" />
              <span className="grid-lines" aria-hidden="true" />
              <span className="scanlines" aria-hidden="true" />
              <span className="brackets" aria-hidden="true" />

              <div className="con-console__inner">
                <div className="con-console__head">
                  <span className="sticker sticker--dark">
                    <span className="live-dot" aria-hidden="true" /> TX READY
                  </span>
                  <span className="mono">FORM / 01</span>
                </div>

                <h2 className="h2 con-console__title" id="con-console-title">
                  SEND A
                  <br />
                  <span className="accent-lemon">SIGNAL.</span>
                </h2>

                <p className="mono con-console__note">ALL FIELDS REQUIRED · DIRECT TO THE DESK</p>

                <div className="con-fields">
                  <div className="con-field">
                    <label className="mono con-field__label" htmlFor="con-name">
                      NAME <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="con-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Your name"
                      required
                      disabled={isSending}
                    />
                  </div>

                  <div className="con-field">
                    <label className="mono con-field__label" htmlFor="con-email">
                      EMAIL <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="con-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="you@company.com"
                      required
                      disabled={isSending}
                    />
                  </div>

                  <div className="con-field">
                    <label className="mono con-field__label" htmlFor="con-message">
                      MESSAGE <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="con-message"
                      name="message"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="What are you looking to secure, connect or automate?"
                      rows={5}
                      maxLength={600}
                      required
                      disabled={isSending}
                      aria-describedby="con-message-count"
                    />
                    <div className="con-field__foot">
                      <span className="mono">KEEP IT BRIEF — CONTEXT HELPS</span>
                      <span className="mono con-field__count" id="con-message-count" aria-live="polite">
                        {message.length} / {MESSAGE_LIMIT}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="btn con-submit" type="submit" disabled={isSending}>
                  <span>{isSending ? "TRANSMITTING..." : "DISPATCH ENQUIRY"}</span>
                  <span className="btn__arrow" aria-hidden="true">
                    ↗
                  </span>
                </button>

                {submission && (
                  <div
                    className={`con-status ${
                      submission.success ? "con-status--ok" : "con-status--bad"
                    }`}
                    role={submission.success ? "status" : "alert"}
                    aria-live={submission.success ? "polite" : "assertive"}
                    aria-atomic="true"
                  >
                    <StatusIcon success={submission.success} />
                    <span className="mono">{submission.message}</span>
                  </div>
                )}

                <div className="mono con-console__foot">
                  <span>BRIGHTLIFE / CHN</span>
                  <span>CHANNEL 05 — OPEN</span>
                </div>
              </div>
            </form>
          </aside>
        </div>
      </div>
    </main>
  );
}
