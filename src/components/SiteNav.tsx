"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Brand from "./Brand";
import "./SiteNav.css";

const links = [
  { label: "INDEX", href: "/", num: "01", section: "top" },
  { label: "ELECTRICAL", href: "/#electrical-works", num: "02", section: "electrical-works" },
  { label: "REMIT", href: "/#remit", num: "03", section: "remit" },
  { label: "SYSTEMS", href: "/services", num: "04", section: "services" },
  { label: "BRIEF", href: "/#brief", num: "05", section: "brief" },
  { label: "CONTACT", href: "/contact", num: "06", section: "contact" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("top");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? doc.scrollTop / max : 0);

      if (pathname !== "/") return;
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = "top";
      for (const id of ["electrical-works", "remit", "brief"]) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= marker) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (link: (typeof links)[number]) => {
    if (pathname === "/services") return link.section === "services";
    if (pathname === "/contact") return link.section === "contact";
    return link.section === active;
  };

  return (
    <>
      <header className="topbar">
        <div className="wrap topbar__inner">
          <Brand />

          <nav className="topbar__links" aria-label="Primary navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`topbar__link ${isActive(link) ? "topbar__link--on" : ""}`}
                aria-current={isActive(link) ? "page" : undefined}
              >
                <span className="topbar__num">{link.num}</span>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="topbar__right">
            <span className="topbar__status">
              <span className="live-dot" /> SYSTEM ONLINE
            </span>
            <Link href="/contact" className="topbar__cta">
              START A PROJECT <span aria-hidden="true">↗</span>
            </Link>
            <button
              type="button"
              className={`burger ${open ? "burger--on" : ""}`}
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
        <span className="topbar__progress" style={{ transform: `scaleX(${progress})` }} />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <span className="grid-lines" aria-hidden="true" />
            <span className="drawer__glow" aria-hidden="true" />
            <span className="brackets" aria-hidden="true" />

            <div className="wrap drawer__head">
              <Brand onClick={() => setOpen(false)} />
              <button
                type="button"
                className="drawer__close"
                onClick={() => setOpen(false)}
              >
                CLOSE ✕
              </button>
            </div>

            <nav className="wrap drawer__nav" aria-label="Mobile navigation">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.06, duration: 0.5 }}
                >
                  <Link href={link.href} onClick={() => setOpen(false)}>
                    <span>{link.num}</span>
                    {link.label}
                    <em aria-hidden="true">↗</em>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="wrap drawer__foot">
              <span className="sticker sticker--dark">
                <span className="live-dot" /> CHENNAI / INDIA
              </span>
              <span>ELECTRICAL · SECURITY · NETWORKS</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
