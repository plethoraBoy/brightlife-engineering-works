"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { capabilityStrip, chapters, contact } from "@/lib/content";
import type { Chapter } from "@/lib/content";
import "./services.css";

const pad = (value: number) => String(value).padStart(2, "0");

/* ------------------------------------------------------------------ */
/*  Hero — master plan plate                                           */
/* ------------------------------------------------------------------ */

function MasterPlan() {
  return (
    <div className="ops-master" aria-hidden="true">
      <span className="aurora" />
      <span className="grid-lines" />
      <span className="scanlines" />
      <span className="brackets" />

      <div className="ops-master__head mono">
        <span className="ops-master__live"><i /> MASTER PLAN / 00</span>
        <span>WT — SYS MAP</span>
      </div>

      <div className="ops-master__stage">
        <svg className="ops-master__svg" viewBox="0 0 520 520" fill="none" aria-hidden="true">
          <defs>
            <pattern id="ops-master-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" stroke="rgba(0,216,255,0.16)" strokeWidth="1" />
            </pattern>
            <radialGradient id="ops-master-glow">
              <stop stopColor="var(--cyan)" stopOpacity="0.26" />
              <stop offset="1" stopColor="var(--cyan)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="ops-master-beam" x1="260" y1="260" x2="260" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--cyan)" stopOpacity="0" />
              <stop offset="1" stopColor="var(--cyan)" stopOpacity="0.28" />
            </linearGradient>
          </defs>

          <rect width="520" height="520" fill="url(#ops-master-grid)" />
          <circle cx="260" cy="260" r="176" fill="url(#ops-master-glow)" />

          <g stroke="var(--cyan)">
            <circle cx="260" cy="260" r="198" strokeDasharray="3 10" opacity="0.55" />
            <circle cx="260" cy="260" r="148" opacity="0.3" />
            <circle cx="260" cy="260" r="96" strokeDasharray="2 8" opacity="0.45" />
            <path d="M260 16v488M16 260h488" strokeDasharray="5 9" opacity="0.32" />
            <path d="M260 16v28M260 476v28M16 260h28M476 260h28" strokeWidth="2" opacity="0.8" />
          </g>

          <g className="ops-master__sweep">
            <path d="M260 260 260 44A216 216 0 0 1 465 178Z" fill="url(#ops-master-beam)" />
            <path d="M260 260 260 44" stroke="var(--cyan)" strokeWidth="2" opacity="0.8" />
          </g>

          <g stroke="var(--cyan)" strokeWidth="1.2" strokeDasharray="4 8" opacity="0.62">
            <path d="M260 260 150 128M260 260 372 150M260 260 404 286M260 260 286 404M260 260 128 344" />
          </g>

          <g className="ops-master__nodes">
            <circle cx="150" cy="128" r="9" fill="var(--cyan)" />
            <circle cx="372" cy="150" r="9" fill="var(--lemon)" />
            <circle cx="404" cy="286" r="9" fill="var(--cyan)" />
            <circle cx="286" cy="404" r="9" fill="var(--lemon)" />
            <circle cx="128" cy="344" r="9" fill="var(--cyan)" />
          </g>

          <g stroke="var(--chalk)" strokeWidth="1" opacity="0.8">
            <circle cx="260" cy="260" r="34" strokeDasharray="3 6" />
            <circle cx="260" cy="260" r="18" />
            <path d="M260 236v12M260 272v12M236 260h12M272 260h12" />
          </g>
          <circle cx="260" cy="260" r="6" fill="var(--orange)" />

          <g stroke="var(--cyan)" strokeWidth="1.6" opacity="0.7">
            <path d="M34 34h26M34 34v26M486 34h-26M486 34v26M34 486h26M34 486v-26M486 486h-26M486 486v-26" />
          </g>

          <text x="30" y="86">05 / LINKED</text>
          <text x="30" y="492">N 13.0827 / E 80.2707</text>
          <text x="350" y="492">SHEET 01 / 05</text>
        </svg>
      </div>

      <div className="ops-master__foot mono">
        <span>SEC · NET · AUT · SAF · MEP</span>
        <span className="ops-master__sig">SIGNAL LOCKED</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Chapter plates — five distinct technical drawings                  */
/* ------------------------------------------------------------------ */

const meshNodes: ReadonlyArray<readonly [number, number]> = [
  [52, 70], [132, 116], [214, 64], [300, 114], [356, 68],
  [52, 230], [136, 184], [220, 236], [304, 182], [356, 230],
];

const meshLinks: ReadonlyArray<readonly [number, number]> = [
  [0, 1], [1, 2], [2, 3], [3, 4], [5, 6], [6, 7],
  [7, 8], [8, 9], [0, 5], [1, 6], [2, 7], [3, 8], [4, 9],
];

function SightPlate() {
  return (
    <svg className="ops-plate__svg" viewBox="0 0 400 300" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ops-sight-beam" x1="100" y1="150" x2="340" y2="150" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--cyan)" stopOpacity="0.24" />
          <stop offset="1" stopColor="var(--cyan)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="var(--cyan)">
        <path d="M200 20v260M20 150h360" strokeDasharray="3 8" opacity="0.3" />
        <circle cx="200" cy="150" r="104" strokeDasharray="3 9" opacity="0.5" />
        <circle cx="200" cy="150" r="64" strokeDasharray="2 7" opacity="0.35" />
      </g>
      <path d="M100 150 332 58 332 242Z" fill="url(#ops-sight-beam)" />
      <path d="M100 150 332 58M100 150 332 242" stroke="var(--cyan)" strokeWidth="1.4" opacity="0.85" />
      <path
        d="M332 58A150 150 0 0 1 332 242"
        stroke="var(--lemon)"
        strokeWidth="2"
        strokeDasharray="9 7"
        className="ops-plate__dash"
      />
      <g className="ops-plate__scan">
        <path d="M100 150 330 74" stroke="var(--lemon)" strokeWidth="2" opacity="0.9" />
      </g>
      <g stroke="var(--cyan)" strokeWidth="1.5">
        <rect x="46" y="132" width="34" height="36" rx="7" />
        <path d="M80 140h18v20H80" />
        <circle cx="98" cy="150" r="6" />
      </g>
      <g stroke="var(--orange)" strokeWidth="2">
        <circle cx="252" cy="112" r="11" className="ops-plate__blink" />
        <path d="M252 92v8M252 124v8M232 112h8M264 112h8" />
      </g>
      <circle cx="252" cy="112" r="2.5" fill="var(--orange)" />
      <g stroke="var(--cyan)" opacity="0.6">
        <path d="M30 44h22M30 44v22M370 44h-22M370 44v22M30 256h22M30 256v-22M370 256h-22M370 256v-22" />
      </g>
      <text x="24" y="28">FOV / 96 DEG</text>
      <text x="266" y="282">COVERAGE ARC</text>
    </svg>
  );
}

function MeshPlate() {
  return (
    <svg className="ops-plate__svg" viewBox="0 0 400 300" fill="none" aria-hidden="true">
      <g stroke="var(--cyan)">
        <path d="M200 20v260M20 150h360" strokeDasharray="3 9" opacity="0.3" />
        {meshLinks.map(([from, to]) => {
          const a = meshNodes[from];
          const b = meshNodes[to];
          return (
            <path
              key={`${from}-${to}`}
              d={`M${a[0]} ${a[1]} ${b[0]} ${b[1]}`}
              strokeDasharray="5 7"
              opacity="0.42"
            />
          );
        })}
        <path d="M26 150h348" strokeWidth="1.2" strokeDasharray="12 9" className="ops-plate__dash" opacity="0.9" />
      </g>
      <g stroke="var(--cyan)" strokeWidth="1.4">
        <rect x="174" y="124" width="52" height="52" rx="10" />
        <path d="M188 150h24M200 138v24" />
      </g>
      <circle cx="200" cy="150" r="4" fill="var(--lemon)" />
      {meshNodes.map(([x, y], index) => (
        <g key={`${x}-${y}`}>
          <circle
            cx={x}
            cy={y}
            r={index % 3 === 0 ? 5.5 : 4}
            fill={index % 5 === 0 ? "var(--lemon)" : "var(--void-2)"}
            stroke={index === 4 || index === 9 ? "var(--orange)" : "var(--cyan)"}
            strokeWidth="1.6"
          />
          {index % 3 === 0 && <circle cx={x} cy={y} r="11" stroke="var(--cyan)" opacity="0.4" className="ops-plate__blink" />}
        </g>
      ))}
      <text x="24" y="28">NODE / 10</text>
      <text x="286" y="282">LINK / 13</text>
    </svg>
  );
}

function OrbitPlate() {
  return (
    <svg className="ops-plate__svg" viewBox="0 0 400 300" fill="none" aria-hidden="true">
      <g stroke="var(--cyan)">
        <path d="M200 18v264M20 150h360" strokeDasharray="3 9" opacity="0.3" />
        <ellipse cx="200" cy="150" rx="134" ry="72" transform="rotate(-18 200 150)" strokeWidth="1.3" opacity="0.85" />
        <ellipse cx="200" cy="150" rx="60" ry="100" transform="rotate(26 200 150)" strokeWidth="1.1" opacity="0.7" />
        <circle cx="200" cy="150" r="98" strokeDasharray="4 8" opacity="0.45" />
      </g>
      <g className="ops-plate__orbit">
        <circle cx="334" cy="108" r="6.5" fill="var(--lemon)" />
        <circle cx="66" cy="192" r="5" fill="var(--cyan)" />
      </g>
      <g className="ops-plate__orbit ops-plate__orbit--slow">
        <circle cx="200" cy="50" r="5" fill="var(--cyan)" />
        <circle cx="200" cy="250" r="5" fill="var(--lemon)" />
      </g>
      <g stroke="var(--orange)" strokeWidth="1.8" className="ops-plate__blink">
        <circle cx="200" cy="150" r="30" />
      </g>
      <g stroke="var(--chalk)" strokeWidth="1.2" opacity="0.85">
        <path d="M200 120v60M170 150h60" />
      </g>
      <circle cx="200" cy="150" r="6" fill="var(--lemon)" />
      <text x="24" y="28">LOOP / 03</text>
      <text x="278" y="282">STATE / SYNC</text>
    </svg>
  );
}

function PulsePlate() {
  return (
    <svg className="ops-plate__svg" viewBox="0 0 400 300" fill="none" aria-hidden="true">
      <g stroke="var(--cyan)">
        <path d="M0 84h400M0 216h400" strokeDasharray="3 9" opacity="0.28" />
        <path d="M12 150h376" strokeDasharray="4 7" opacity="0.4" />
      </g>
      <path
        d="M14 150h44l14-46 18 92 18-70 16 24h34l14-58 18 116 16-58h100"
        stroke="var(--lemon)"
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M14 150h44l14-46 18 92 18-70 16 24h34l14-58 18 116 16-58h100"
        stroke="var(--cyan)"
        strokeWidth="1"
        strokeDasharray="6 16"
        className="ops-plate__dash"
        opacity="0.9"
      />
      <circle cx="330" cy="94" r="48" stroke="var(--orange)" strokeDasharray="3 8" opacity="0.55" />
      <circle cx="330" cy="94" r="30" stroke="var(--orange)" strokeDasharray="3 7" className="ops-plate__blink" />
      <path d="M330 66 356 116H304Z" stroke="var(--orange)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M330 82v14M330 102v2" stroke="var(--lemon)" strokeWidth="2.4" strokeLinecap="round" />
      <g stroke="var(--cyan)" opacity="0.6">
        <path d="M54 232h292M54 226v12M346 226v12" />
      </g>
      <text x="24" y="28">SIGNAL / ARMED</text>
      <text x="274" y="282">THRESHOLD 02</text>
    </svg>
  );
}

function PlanPlate() {
  return (
    <svg className="ops-plate__svg" viewBox="0 0 400 300" fill="none" aria-hidden="true">
      <defs>
        <pattern id="ops-plate-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <path d="M0 0v8" stroke="var(--cyan)" strokeWidth="1" opacity="0.22" />
        </pattern>
      </defs>
      <rect x="46" y="42" width="308" height="216" fill="url(#ops-plate-hatch)" />
      <g stroke="var(--cyan)">
        <rect x="46" y="42" width="308" height="216" strokeWidth="1.6" />
        <path d="M46 136h118V42M164 136v122M164 196h190M258 196V42M258 136h96" strokeWidth="1.1" opacity="0.9" />
        <path d="M80 164h50v54M318 74v50h-44M192 74h44v48" strokeWidth="1.2" strokeDasharray="6 5" opacity="0.75" />
        <path d="M164 160a24 24 0 0 1 24 24M258 108a22 22 0 0 0-22 22" strokeWidth="1" opacity="0.8" />
      </g>
      <path
        d="M62 210h88v-38h108v-52h78"
        stroke="var(--orange)"
        strokeWidth="2"
        strokeDasharray="8 7"
        strokeLinejoin="round"
        className="ops-plate__dash"
      />
      <g fill="var(--lemon)" stroke="var(--void)" strokeWidth="1">
        <circle cx="130" cy="172" r="5" />
        <circle cx="320" cy="120" r="5" />
        <circle cx="236" cy="126" r="5" />
      </g>
      <g stroke="var(--cyan)" strokeWidth="0.9" opacity="0.65">
        <path d="M46 22h308M46 16v12M354 16v12M26 42v216M20 42h12M20 258h12" />
      </g>
      <text x="24" y="286">PLAN / A-05</text>
      <text x="278" y="34">SCALE 1:100</text>
    </svg>
  );
}

function PlateGraphic({ plate }: { plate: Chapter["plate"] }) {
  switch (plate) {
    case "sight":
      return <SightPlate />;
    case "mesh":
      return <MeshPlate />;
    case "orbit":
      return <OrbitPlate />;
    case "pulse":
      return <PulsePlate />;
    case "plan":
      return <PlanPlate />;
    default:
      return null;
  }
}

function TechnicalPlate({ chapter }: { chapter: Chapter }) {
  return (
    <figure className="ops-plate" aria-hidden="true">
      <div className="ops-plate__head mono">
        <span>FIG. {chapter.index} / {chapter.plate}</span>
        <span className="ops-plate__live"><i /> SPEC / LIVE</span>
      </div>
      <div className="ops-plate__stage">
        <span className="aurora" />
        <span className="grid-lines" />
        <span className="scanlines" />
        <span className="brackets" />
        <PlateGraphic plate={chapter.plate} />
        <span className="ops-plate__stamp">WT / CHECKED</span>
      </div>
      <div className="ops-plate__foot mono">
        <span>{chapter.footer}</span>
        <span>REF / {chapter.code}</span>
      </div>
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ServicesPage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-ops-chapter]"));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let best: { index: number; ratio: number } | null = null;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = Number((entry.target as HTMLElement).dataset.opsChapter);
          if (!Number.isFinite(index)) continue;
          if (best === null || entry.intersectionRatio > best.ratio) {
            best = { index, ratio: entry.intersectionRatio };
          }
        }
        if (best !== null) setActive(best.index);
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: [0, 0.1, 0.3, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const activeLabel = chapters[active]?.index ?? "01";

  return (
    <main id="main" className="ops-page">
      <section className="ops-hero" aria-labelledby="ops-hero-title">
        <span className="grid-lines ops-hero__field" aria-hidden="true" />
        <div className="wrap ops-hero__grid">
          <div className="ops-hero__copy">
            <p className="eyebrow">SYSTEM MAP / 05 CHAPTERS</p>
            <h1 className="h1 ops-hero__title" id="ops-hero-title">
              System{" "}
              <br />
              <span className="ops-hero__outline">archi</span>tecture<span className="ops-hero__dot">.</span>
            </h1>
            <p className="lede ops-hero__lede">
              Five coordinated disciplines on one drawing board — a live map of how a site is
              protected, connected and kept running.
            </p>
            <div className="ops-hero__telemetry mono">
              <span>WT / SYS—05</span>
              <span aria-hidden="true">/</span>
              <span>14 DISCIPLINES</span>
              <span aria-hidden="true">/</span>
              <span>CHENNAI / IN</span>
              <span aria-hidden="true">/</span>
              <span>REV. 2026</span>
            </div>
            <div className="ops-hero__tags" aria-hidden="true">
              {capabilityStrip.slice(0, 5).map((item) => (
                <span className="sticker" key={item}>{item}</span>
              ))}
            </div>
          </div>
          <MasterPlan />
        </div>
      </section>

      <nav className="ops-rail" aria-label="Chapter index">
        <div className="wrap ops-rail__inner">
          <span className="ops-rail__label mono">INDEX / 05</span>
          <ul className="ops-rail__list">
            {chapters.map((chapter, index) => (
              <li key={chapter.id}>
                <Link
                  href={`#${chapter.id}`}
                  className="ops-rail__link"
                  aria-current={active === index ? "location" : undefined}
                  onClick={() => setActive(index)}
                >
                  <span className="ops-rail__num mono">{chapter.index}</span>
                  <span className="ops-rail__name mono">{chapter.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <span className="ops-rail__count mono">
            <b>{activeLabel}</b>
            <i aria-hidden="true">/</i>
            05
          </span>
        </div>
      </nav>

      <div className="ops-chapters">
        {chapters.map((chapter, index) => {
          const isVoid = index % 2 === 1;
          return (
            <section
              key={chapter.id}
              id={chapter.id}
              data-ops-chapter={index}
              data-ops-accent={chapter.accent}
              className={`ops-chapter${isVoid ? " ops-chapter--void ops-chapter--flip" : ""}`}
              aria-labelledby={`ops-title-${chapter.id}`}
            >
              {isVoid && (
                <>
                  <span className="aurora" aria-hidden="true" />
                  <span className="scanlines" aria-hidden="true" />
                </>
              )}
              <span className="ops-chapter__mesh" aria-hidden="true" />

              <div className="wrap ops-chapter__inner">
                <div className="ops-chapter__copy">
                  <span className="ops-chapter__numeral" aria-hidden="true">{chapter.index}</span>
                  <div className="ops-chapter__labels mono">
                    <span className="ops-chapter__kicker"><i aria-hidden="true" />{chapter.kicker}</span>
                    <span className="ops-chapter__code">{chapter.code}</span>
                  </div>
                  <h2 className="h2 ops-chapter__title" id={`ops-title-${chapter.id}`}>
                    {chapter.title}
                  </h2>
                  <p className="lede ops-chapter__lede">{chapter.description}</p>

                  <ol className="ops-spec">
                    {chapter.items.map((item, itemIndex) => (
                      <li className="ops-spec__row" key={item}>
                        <span className="mono ops-spec__num">{pad(itemIndex + 1)}</span>
                        <span className="ops-spec__name">{item}</span>
                        <span className="mono ops-spec__status" aria-hidden="true"><i /> SPEC OK</span>
                      </li>
                    ))}
                  </ol>

                  <div className="ops-chapter__foot mono" aria-hidden="true">
                    <span>{pad(chapter.items.length)} ENTRIES</span>
                    <i />
                    <span>FIG. {chapter.index} / {chapter.footer}</span>
                  </div>
                </div>

                <div className="ops-chapter__visual">
                  <TechnicalPlate chapter={chapter} />
                  <span className="ops-chapter__caption mono" aria-hidden="true">
                    PLATE {chapter.index} — DRAWN TO SITE CONDITIONS
                  </span>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="ops-cta" aria-labelledby="ops-cta-title">
        <div className="wrap">
          <div className="ops-cta__panel">
            <span className="aurora" aria-hidden="true" />
            <span className="grid-lines" aria-hidden="true" />
            <span className="scanlines" aria-hidden="true" />
            <span className="brackets" aria-hidden="true" />

            <div className="ops-cta__inner">
              <p className="ops-cta__eyebrow mono">
                <span className="live-dot" aria-hidden="true" /> NEXT STEP / CONTACT
              </p>
              <h2 className="h2 ops-cta__title" id="ops-cta-title">
                Put the whole site on <span>one plan.</span>
              </h2>
              <p className="lede ops-cta__copy">
                Tell us what needs protecting, connecting or automating. We will survey the site and
                draw up a scoped proposal — one team, one drawing, one number to call.
              </p>
              <Link href="/contact" className="btn btn--lemon ops-cta__btn">
                SPECIFY A SITE <span className="btn__arrow" aria-hidden="true">↗</span>
              </Link>
              <p className="ops-cta__direct mono">
                DIRECT / <a href={contact.phoneHref}>{contact.phone}</a>
                <span aria-hidden="true"> · </span>
                <a href={`mailto:${contact.emails[0]}`}>{contact.emails[0]}</a>
              </p>
              <p className="ops-cta__signoff mono">{contact.person} / {contact.role}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
