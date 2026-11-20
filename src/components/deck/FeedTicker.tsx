import { capabilityStrip } from "@/lib/content";
import "./FeedTicker.css";

export default function FeedTicker() {
  const items = [...capabilityStrip, ...capabilityStrip];

  return (
    <div className="feed" aria-label="Capability feed">
      <div className="feed__track">
        {items.map((item, index) => (
          <span className="feed__item" key={`${item}-${index}`}>
            <span className="feed__star" aria-hidden="true">
              ✳
            </span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
