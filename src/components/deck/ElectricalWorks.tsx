import Link from "next/link";
import Reveal from "@/components/Reveal";
import { electricalWorks, serviceAreas, social } from "@/lib/content";
import "./ElectricalWorks.css";

export default function ElectricalWorks() {
  return (
    <section
      className="section section--void electrical"
      id="electrical-works"
      aria-labelledby="electrical-title"
    >
      <span className="aurora" aria-hidden="true" />
      <span className="grid-lines" aria-hidden="true" />
      <span className="scanlines" aria-hidden="true" />
      <span className="brackets" aria-hidden="true" />

      <div className="wrap electrical__inner">
        <div className="electrical__head">
          <Reveal>
            <p className="eyebrow">FIELD WORK / ELECTRICAL</p>
            <h2 className="h2 electrical__title" id="electrical-title">
              Power,
              <br />
              <span className="electrical__mark">properly</span>
              <br />
              done.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="electrical__side">
            <p className="lede">
              Residential and commercial electrical work handled end to end —
              wiring, distribution, CCTV, cooling and backup power, with the
              maintenance to keep it all working.
            </p>
            <span className="sticker electrical__sticker">
              <span className="live-dot" aria-hidden="true" />
              {social.tagline}
            </span>
          </Reveal>
        </div>

        <div className="electrical__grid">
          {electricalWorks.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.06} className="electrical__card">
              <span className="electrical__num" aria-hidden="true">
                {item.number}
              </span>
              <h3 className="h3">{item.title}</h3>
              <p>{item.copy}</p>
              <span className="electrical__card-foot mono" aria-hidden="true">
                <span>WORK / {item.number}</span>
                <span>SITE READY</span>
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal className="electrical__areas" y={24}>
          <div>
            <p className="mono electrical__areas-label">ON SITE / CHENNAI</p>
            <p className="electrical__areas-title">
              Working across the city, one neighbourhood at a time.
            </p>
          </div>
          <ul className="electrical__area-list">
            {serviceAreas.map((area) => (
              <li key={area} className="electrical__area mono">
                {area}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="electrical__proof" y={24}>
          <div className="electrical__proof-copy">
            <p className="mono">FROM THE FIELD / {social.platform.toUpperCase()}</p>
            <p className="electrical__proof-title">Make your home bright.</p>
            <p className="electrical__proof-note">
              Real sites, real installations and the people behind them — follow
              the work as it happens.
            </p>
          </div>

          <div className="electrical__proof-side">
            <div className="electrical__stats">
              <div className="electrical__stat">
                <b>{social.followers}</b>
                <span className="mono">FOLLOWERS</span>
              </div>
              <div className="electrical__stat">
                <b>{social.rating}★</b>
                <span className="mono">{social.reviews} REVIEWS</span>
              </div>
              <div className="electrical__stat">
                <b>{String(serviceAreas.length).padStart(2, "0")}</b>
                <span className="mono">SERVICE AREAS</span>
              </div>
            </div>
            <a
              className="electrical__proof-link"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>FOLLOW {social.handle}</span>
              <span aria-hidden="true">↗</span>
            </a>
            <Link href="/contact" className="electrical__proof-quiet mono">
              OR OPEN A CHANNEL ↗
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
