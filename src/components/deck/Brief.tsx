"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { faqs } from "@/lib/content";
import "./Brief.css";

export default function Brief() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section brief" id="brief">
      <div className="wrap brief__inner">
        <div className="brief__intro">
          <p className="eyebrow">04 / THE BRIEF</p>
          <h2 className="h2 brief__title">
            Straight
            <br />
            answers.
          </h2>
          <p className="lede">
            Still wondering about something? We would rather talk it through
            than guess.
          </p>
          <Link href="/contact" className="btn btn--ghost">
            ASK US DIRECTLY <span className="btn__arrow">↗</span>
          </Link>
        </div>

        <div className="brief__log">
          <div className="brief__log-head mono">
            <span>TRANSMISSION LOG</span>
            <span>{String(faqs.length).padStart(2, "0")} ENTRIES</span>
          </div>

          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div
                className={`brief__entry ${isOpen ? "brief__entry--open" : ""}`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="brief__question"
                  aria-expanded={isOpen}
                  aria-controls={`brief-panel-${index}`}
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  <span className="brief__num mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="brief__label">{faq.question}</span>
                  <span className="brief__toggle" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`brief-panel-${index}`}
                      className="brief__answer-wrap"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
