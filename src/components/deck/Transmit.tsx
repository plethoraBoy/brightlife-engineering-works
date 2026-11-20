import Link from "next/link";
import Reveal from "@/components/Reveal";
import { contact } from "@/lib/content";
import "./Transmit.css";

export default function Transmit() {
  return (
    <section className="section section--tight transmit">
      <span className="aurora" aria-hidden="true" />
      <span className="grid-lines" aria-hidden="true" />
      <span className="brackets" aria-hidden="true" />

      <div className="wrap transmit__inner">
        <Reveal className="transmit__panel" y={40}>
          <div className="transmit__top">
            <span className="sticker sticker--dark">
              <span className="live-dot" /> CHANNEL OPEN
            </span>
            <span className="mono">05 / NEXT MOVE</span>
          </div>

          <h2 className="h2 transmit__title">
            Got a site?
            <br />
            <span className="accent-lemon">Let&apos;s</span> wire it.
          </h2>

          <p className="lede">
            A home, a hotel, a floor of servers — tell us what you are
            protecting and we will put the right system around it.
          </p>

          <div className="transmit__actions">
            <Link href="/contact" className="btn btn--lemon">
              OPEN A CHANNEL <span className="btn__arrow">↗</span>
            </Link>
            <a href={contact.phoneHref} className="transmit__phone mono">
              {contact.phone}
            </a>
          </div>

          <div className="transmit__pulse" aria-hidden="true">
            {Array.from({ length: 22 }, (_, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.08}s` }} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
