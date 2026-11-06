"use client";

import { motion, useReducedMotion } from "framer-motion";
import { smoothEase } from "@/components/reveal";

const instructions = [
  {
    label: "A household",
    title: "The car and the home",
    body: "A family instructs the brokerage to arrange motor cover and cover for the building. The firm places each one. An insurer issues the policy.",
  },
  {
    label: "A business",
    title: "The shop, the stock, and the road",
    body: "A trader or a company instructs the firm on the premises, the stock, and goods in transit. The brokerage sets out the classes before an insurer is approached.",
  },
  {
    label: "A contract",
    title: "The project on site",
    body: "A contractor instructs the brokerage on a job. The firm arranges contractors’ all risks with an insurer and stays available when a claim is notified.",
  },
];

const list = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.06 },
  },
};

const card = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: smoothEase },
  },
};

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section className="border-y border-line bg-card">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
          Clients
        </p>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl text-ink sm:text-4xl">
          Who instructs the brokerage
        </h2>
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted">
          People and organisations bring the risk to Ecobed. These are the
          kinds of instructions the Ikeja and Abuja offices take.
        </p>
        <motion.div
          className="mt-10 grid gap-6 md:grid-cols-3"
          variants={reduce ? undefined : list}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {instructions.map((item) => (
            <motion.article
              key={item.title}
              className="flex h-full flex-col border-t-2 border-brand bg-background px-5 py-6"
              variants={reduce ? undefined : card}
            >
              <p className="text-sm font-semibold text-brand">{item.label}</p>
              <h3 className="mt-3 font-serif text-2xl leading-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted">{item.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
