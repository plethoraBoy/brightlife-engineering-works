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
            d="M10 8h12.5c5.2 0 8.4 2.7 8.4 6.8 0 2.7-1.4 4.7-3.7 5.7 2.9.9 4.7 3.1 4.7 6.3 0 4.5-3.5 7.2-9.2 7.2H10V8Zm6.2 5.4v4.6h5.3c2.1 0 3.3-.9 3.3-2.3s-1.2-2.3-3.3-2.3h-5.3Zm0 9.6v5.4h6c2.4 0 3.7-1 3.7-2.7s-1.3-2.7-3.7-2.7h-6Z"
            fill="#f3f1ec"
          />
          <circle cx="33" cy="9" r="2" fill="#f2ff45" />
        </svg>
      </span>
      <span className="brand__text">
        <strong>BRIGHTLIFE</strong>
        <span>ENGINEERING WORKS </span>
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
