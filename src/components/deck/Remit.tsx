import Link from "next/link";
import Reveal from "@/components/Reveal";
import { principles } from "@/lib/content";
import "./Remit.css";

export default function Remit() {
  return (
    <section className="section section--line remit" id="remit">
      <div className="wrap">
        <div className="remit__head">
          <Reveal>
            <p className="eyebrow">01 / REMIT</p>
            <h2 className="h2 remit__title">
              Built to outlast
              <br />
              the <span className="remit__mark">brief.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="remit__head-side">
            <p className="lede">
              Technology is only as good as the people behind it. We plan,
              install and stay with the system — so there is one number to call
              and one team that knows the site.
            </p>
            <span className="sticker remit__sticker">NO SUBCONTRACTORS · ONE TEAM</span>
          </Reveal>
        </div>

        <div className="remit__cards">
          {principles.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.1} className="remit__card">
              <div className="remit__card-top">
                <span className="remit__num">{item.number}</span>
                <span className="mono">PRINCIPLE / {item.number}</span>
              </div>
              <h3 className="h3">{item.title}</h3>
              <p>{item.copy}</p>
              <span className="remit__bar" aria-hidden="true" />
            </Reveal>
          ))}
        </div>

        <Reveal className="remit__statement" y={40}>
          <p>
            We don&apos;t install boxes. We hand over systems that still work in
            five years.
          </p>
          <Link href="/services" className="remit__statement-link">
            SEE THE SYSTEMS <span aria-hidden="true">↗</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
