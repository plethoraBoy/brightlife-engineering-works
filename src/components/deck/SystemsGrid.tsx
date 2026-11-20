import Link from "next/link";
import Reveal from "@/components/Reveal";
import { catalogue } from "@/lib/content";
import "./SystemsGrid.css";

const accents = ["orange", "cyan", "lemon"];

export default function SystemsGrid() {
  return (
    <section className="section section--void systems">
      <span className="aurora" aria-hidden="true" />
      <span className="grid-lines" aria-hidden="true" />

      <div className="wrap systems__inner">
        <div className="systems__head">
          <Reveal>
            <p className="eyebrow">02 / SYSTEM CATALOGUE</p>
            <h2 className="h2 systems__title">
              14 systems.
              <br />
              <span className="accent-cyan">One</span> handover.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="systems__head-side">
            <span className="sticker sticker--dark">
              <span className="live-dot" /> FULL SITE CAPABILITY
            </span>
            <p className="lede">
              From a single camera to an entire building — specify what you
              need, or let us put the whole plan together.
            </p>
          </Reveal>
        </div>

        <div className="systems__grid">
          {catalogue.map((item, index) => (
            <Reveal
              key={item.code}
              delay={(index % 4) * 0.06}
              className={`systems__tile systems__tile--${accents[index % accents.length]} ${
                index === 0 ? "systems__tile--feature" : ""
              }`}
            >
              <span className="systems__code mono">{item.code}</span>
              <span className="systems__name">{item.name}</span>
              <span className="systems__index mono">
                {String(index + 1).padStart(2, "0")}
                <span aria-hidden="true"> ↗</span>
              </span>
            </Reveal>
          ))}
        </div>

        <div className="systems__foot">
          <span className="mono">END OF CATALOGUE / 14 ENTRIES</span>
          <Link href="/services" className="systems__link">
            OPEN THE SYSTEM MAP <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
