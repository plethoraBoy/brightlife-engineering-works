import Reveal from "@/components/Reveal";
import { processSteps } from "@/lib/content";
import "./Protocol.css";

export default function Protocol() {
  return (
    <section className="section section--tight protocol">
      <div className="wrap">
        <div className="protocol__head">
          <Reveal>
            <p className="eyebrow">03 / PROTOCOL</p>
            <h2 className="h2 protocol__title">
              Four moves.
              <br />
              <span className="accent">No</span> guesswork.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="protocol__head-side">
            <span className="mono">SITE → HANDOVER → SUPPORT</span>
            <p className="lede">
              A clear sequence with no mystery stages. You always know what is
              happening, who is doing it and what comes next.
            </p>
          </Reveal>
        </div>

        <div className="protocol__rail">
          <span className="protocol__line" aria-hidden="true" />
          <div className="protocol__steps">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.09} className="protocol__step">
                <span className="protocol__node" aria-hidden="true" />
                <span className="protocol__roman">{step.number}</span>
                <h3 className="h3">{step.title}</h3>
                <p>{step.copy}</p>
                <span className="mono protocol__folio">PHASE {step.number} / 04</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
