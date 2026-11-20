"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { capabilityStrip } from "@/lib/content";
import "./DeckHero.css";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function Reticle() {
  return (
    <svg className="hero__reticle" viewBox="0 0 300 300" fill="none" aria-hidden="true">
      <g stroke="var(--cyan)" strokeWidth="1">
        <circle cx="150" cy="150" r="104" strokeDasharray="4 9" opacity="0.55" />
        <circle cx="150" cy="150" r="72" opacity="0.35" />
        <circle cx="150" cy="150" r="38" stroke="var(--orange)" strokeWidth="2" />
        <path d="M150 18v34M150 248v34M18 150h34M248 150h34" opacity="0.8" />
        <path d="M46 46h30M46 46v30M254 46h-30M254 46v30M46 254h30M46 254v-30M254 254h-30M254 254v-30" strokeWidth="2" />
      </g>
      <g className="hero__sweep">
        <path d="M150 150 L150 26 A124 124 0 0 1 238 62 Z" fill="url(#sweepGrad)" />
      </g>
      <defs>
        <linearGradient id="sweepGrad" x1="150" y1="150" x2="190" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--cyan)" stopOpacity="0" />
          <stop offset="1" stopColor="var(--cyan)" stopOpacity="0.22" />
        </linearGradient>
      </defs>
      <circle cx="150" cy="150" r="5" fill="var(--lemon)" />
    </svg>
  );
}

export default function DeckHero() {
  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="hero__meta"
          >
            <span className="sticker sticker--orange">
              <span className="live-dot" /> LIVE / CHENNAI
            </span>
            <span className="mono">EST. 2018 — OPS DECK 02</span>
          </motion.div>

          <motion.h1
            className="h1 hero__title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: EASE }}
          >
            Systems,
            <br />
            <span className="hero__outline">live</span> on
            <br />
            <span className="hero__slash">site.</span>
          </motion.h1>

          <motion.p
            className="lede hero__lede"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          >
            Residential and commercial electrical work — total wiring, CCTV,
            AC installation, inverters and distribution — alongside the
            surveillance, networks and safety systems that keep people, places
            and data protected. One accountable team, from first fix to final
            handover.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          >
            <Link href="/contact" className="btn">
              START A PROJECT <span className="btn__arrow">↗</span>
            </Link>
            <Link href="/services" className="hero__text-link">
              <span className="mono">EXPLORE SYSTEMS</span>
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>

          <motion.div
            className="hero__readout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <div className="wave" aria-hidden="true">
              {Array.from({ length: 16 }, (_, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.07}s` }} />
              ))}
            </div>
            <span className="mono">14 DISCIPLINES / 01 ACCOUNTABLE TEAM</span>
          </motion.div>
        </div>

        <motion.div
          className="hero__monitor"
          initial={{ opacity: 0, scale: 0.94, rotate: 1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        >
          <span className="aurora" aria-hidden="true" />
          <span className="grid-lines" aria-hidden="true" />
          <span className="scanlines" aria-hidden="true" />
          <span className="brackets" aria-hidden="true" />

          <div className="hero__monitor-top">
            <span className="mono">
              <span className="live-dot" /> CAM 01 / LIVE
            </span>
            <span className="mono">REC ● 00:14:08</span>
          </div>

          <div className="hero__monitor-stage">
            <Reticle />
            <span className="hero__target hero__target--a" />
            <span className="hero__target hero__target--b" />
            <span className="hero__target hero__target--c" />
            <span className="hero__coord mono">13.0827° N / 80.2707° E</span>
          </div>

          <div className="hero__monitor-foot">
            {capabilityStrip.slice(0, 4).map((item) => (
              <span className="mono" key={item}>
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="hero__edge mono" aria-hidden="true">
        <span>SCROLL / 001</span>
        <span>↓</span>
      </div>
    </section>
  );
}
