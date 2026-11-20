import Link from "next/link";
import "./Brand.css";

export default function Brand({
  linked = true,
  onClick,
}: {
  linked?: boolean;
  onClick?: () => void;
}) {
  const inner = (
    <>
      <span className="mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="currentColor" />
          <path
            d="M8 12h4.5l3.2 11.5L19.5 12h2.4l3.7 11.5L29 12h3.4l-5.6 16h-3.6L18 17.4 14.7 28h-3.6L8 12Z"
            fill="#f3f1ec"
          />
          <circle cx="33" cy="9" r="2" fill="#f2ff45" />
        </svg>
      </span>
      <span className="brand__text">
        <strong>WRAPTECH</strong>
        <span>OPERATIONS / CHENNAI </span>
      </span>
    </>
  );

  if (!linked) return <span className="brand">{inner}</span>;

  return (
    <Link href="/" className="brand" onClick={onClick}>
      {inner}
    </Link>
  );
}
