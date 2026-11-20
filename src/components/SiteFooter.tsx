import Link from "next/link";
import Brand from "./Brand";
import { contact } from "@/lib/content";
import "./SiteFooter.css";

const nav = [
  { label: "INDEX", href: "/" },
  { label: "REMIT", href: "/#remit" },
  { label: "SYSTEMS", href: "/services" },
  { label: "BRIEF", href: "/#brief" },
  { label: "CONTACT", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="foot">
      <span className="aurora" aria-hidden="true" />
      <span className="grid-lines" aria-hidden="true" />

      <div className="wrap foot__inner">
        <div className="foot__top">
          <div className="foot__brand">
            <Brand />
            <p>
              Security, networks and automation — designed, installed and held
              to account by one team.
            </p>
            <span className="sticker sticker--orange">
              <span className="live-dot" /> AVAILABLE FOR PROJECTS
            </span>
          </div>

          <div className="foot__col">
            <p className="foot__label">NAVIGATION</p>
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="foot__col">
            <p className="foot__label">DIRECT LINE</p>
            <a href={contact.phoneHref}>{contact.phone}</a>
            {contact.emails.map((email) => (
              <a key={email} href={`mailto:${email}`}>
                {email}
              </a>
            ))}
          </div>

          <div className="foot__col">
            <p className="foot__label">DESK</p>
            {contact.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </div>

        <div className="foot__wordmark" aria-hidden="true">
          BRIGHTLIFE
        </div>

        <div className="foot__base">
          <span>© {new Date().getFullYear()} BRIGHTLIFE ENGINEERING WORKS</span>
          <span>OPS DECK / VERSION 02</span>
          <span>CHENNAI, INDIA — 13.0827° N / 80.2707° E</span>
        </div>
      </div>
    </footer>
  );
}
