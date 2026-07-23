"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { AnimatedButton } from "@/components/animated-button";

const stripeEase = [0.4, 0, 0.2, 1] as const;
const viewport = { once: true, margin: "-80px" };

function Hero() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 1000], [0, 350]);

  return (
    <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <motion.div
        className="absolute inset-0"
        style={{ y: prefersReduced ? 0 : parallaxY }}
      >
        <Image
          src="/saola-hero.webp"
          alt="Saola"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
      <motion.div
        className="relative z-10 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: stripeEase }}
      >
        <motion.h1
          className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          style={{ textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease: stripeEase }}
        >
          Surface merit before visibility
        </motion.h1>
        <motion.p
          className="mt-6 text-lg leading-relaxed text-white/85 sm:text-xl"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: stripeEase }}
        >
          Named after the rarest animal most people never heard of — the saola.
          Discovered in 1992. Never seen since 2013. It didn&apos;t stop being
          real just because no one was looking. Same thing happens to talent.
        </motion.p>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45, ease: stripeEase }}
        >
          <AnimatedButton>Join waitlist</AnimatedButton>
        </motion.div>
      </motion.div>
    </section>
  );
}

const visibilityItems = [
  "Resume keywords",
  "School name",
  "Follower count",
  "Years of experience",
];
const meritItems = [
  "Problem-solving ability",
  "Quality of work",
  "Portfolio proof",
  "Track record",
];

function VisibilityVsMerit() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-cream-300 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="text-center font-heading text-3xl font-bold text-bark sm:text-4xl"
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.4, ease: stripeEase }}
        >
          The gap between being seen and being ranked
        </motion.h2>

        <div className="relative mt-16 grid items-start gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-0">
          <motion.div
            className="rounded-lg border border-brown-200 bg-white/60 p-8"
            initial={prefersReduced ? undefined : { opacity: 0, x: -60 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.4, ease: stripeEase }}
            whileHover={prefersReduced ? undefined : { y: -4, boxShadow: "0 12px 40px -8px rgba(61, 40, 23, 0.12)" }}
          >
            <div className="mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brown">
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </div>
            <h3 className="font-heading text-lg font-bold text-brown">
              What most platforms see
            </h3>
            <ul className="mt-5 space-y-3">
              {visibilityItems.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 text-brown-400 line-through decoration-brown-200 decoration-1"
                  initial={prefersReduced ? undefined : { opacity: 0, x: -20 }}
                  whileInView={prefersReduced ? undefined : { opacity: 0.5, x: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.08, ease: stripeEase }}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brown-300" />
                  {item}
                </motion.li>
              ))}
            </ul>
            <motion.p
              className="mt-6 text-sm font-semibold uppercase tracking-wider text-brown-300"
              initial={prefersReduced ? undefined : { opacity: 0 }}
              whileInView={prefersReduced ? undefined : { opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.3, delay: 0.5, ease: stripeEase }}
            >
              ↓ Result: Hidden talent
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 px-4 py-8 lg:px-8 lg:py-0"
            initial={prefersReduced ? undefined : { opacity: 0, scale: 0.9 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.4, delay: 0.3, ease: stripeEase }}
          >
            <div className="hidden h-px w-12 bg-forest lg:block" />
            <div className="hidden lg:block">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="rotate-90 text-forest"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="rounded-lg bg-forest px-5 py-3 text-center shadow-md">
              <p className="font-display text-base font-bold italic text-cream sm:text-lg">
                They&apos;re not the same thing.
              </p>
              <p className="mt-1 font-heading text-xs font-bold uppercase tracking-widest text-moss sm:text-sm">
                Saola ranks by merit first.
              </p>
            </div>
            <div className="hidden h-px w-12 bg-forest lg:block" />
          </motion.div>

          <motion.div
            className="rounded-lg border-2 border-forest bg-white p-8"
            initial={prefersReduced ? undefined : { opacity: 0, x: 60 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.4, delay: 0.15, ease: stripeEase }}
            whileHover={prefersReduced ? undefined : { y: -4, boxShadow: "0 12px 40px -8px rgba(44, 95, 45, 0.2)" }}
          >
            <div className="mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-forest">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="font-heading text-lg font-bold text-forest">
              What actually matters
            </h3>
            <ul className="mt-5 space-y-3">
              {meritItems.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 font-medium text-forest-700"
                  initial={prefersReduced ? undefined : { opacity: 0, x: 20 }}
                  whileInView={prefersReduced ? undefined : { opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.08, ease: stripeEase }}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-moss" />
                  {item}
                </motion.li>
              ))}
            </ul>
            <motion.p
              className="mt-6 text-sm font-bold uppercase tracking-wider text-moss"
              initial={prefersReduced ? undefined : { opacity: 0 }}
              whileInView={prefersReduced ? undefined : { opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.3, delay: 0.5, ease: stripeEase }}
            >
              ↓ Result: Merit wins
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const problems = [
  {
    title: "Resumes filter out skilled people before a human ever looks",
    description:
      "ATS systems and keyword matching gatekeep talent based on formatting, not ability.",
  },
  {
    title: "Great businesses stay invisible because they can't compete with louder competitors",
    description:
      "Marketing budgets determine discoverability, not quality of work or service.",
  },
  {
    title: "High-impact work goes unfunded because merit and visibility aren't the same thing",
    description:
      "The best ideas lose to the best-funded ones. Merit gets buried under noise.",
  },
];

function Problems() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-brown px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="text-center font-heading text-3xl font-bold text-cream sm:text-4xl"
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.4, ease: stripeEase }}
        >
          The problem
        </motion.h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              className="rounded-lg border border-brown-700 bg-brown-700/50 p-6"
              initial={prefersReduced ? undefined : { opacity: 0, y: 30 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.15, ease: stripeEase }}
              whileHover={prefersReduced ? undefined : { y: -4, boxShadow: "0 12px 40px -8px rgba(0,0,0,0.25)" }}
            >
              <h3 className="font-heading text-lg font-semibold text-cream">
                {problem.title}
              </h3>
              <p className="mt-3 text-sm text-cream-300">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { label: "Find", description: "Discover talent, businesses, and ideas" },
  {
    label: "Rank by merit, not reach",
    description: "Quality and output determine standing, not popularity",
  },
  {
    label: "Surface to employers",
    description: "Match verified capability with opportunity",
  },
  {
    label: "Build track record",
    description: "Create a lasting record of real work and outcomes",
  },
];

function HowItWorks() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="text-center font-heading text-3xl font-bold text-bark sm:text-4xl"
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.4, ease: stripeEase }}
        >
          How it works
        </motion.h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center"
              initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.12, ease: stripeEase }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-moss text-lg font-bold text-forest-700">
                {i + 1}
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-bark">
                {step.label}
              </h3>
              <p className="mt-2 text-sm text-cream-700">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  {
    title: "Skills-based hiring is trending",
    description:
      "Companies are moving away from degree filters toward demonstrable ability and portfolio evidence.",
  },
  {
    title: "AI makes portfolios easy to verify",
    description:
      "Real work samples matter now more than ever. AI tools make it possible to validate output at scale.",
  },
  {
    title: "People distrust algorithmic feeds",
    description:
      "They want curation they can trust — signal over noise, quality over engagement metrics.",
  },
];

function WhyNow() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-cream-300 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="text-center font-heading text-3xl font-bold text-bark sm:text-4xl"
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.4, ease: stripeEase }}
        >
          Why now
        </motion.h2>
        <div className="mt-12 space-y-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              className="rounded-lg border border-cream-400 bg-white p-6"
              initial={prefersReduced ? undefined : { opacity: 0, scale: 0.97 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, scale: 1 }}
              viewport={viewport}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.12, ease: stripeEase }}
              whileHover={prefersReduced ? undefined : { y: -3, boxShadow: "0 12px 40px -8px rgba(61, 40, 23, 0.1)" }}
            >
              <h3 className="font-heading text-lg font-semibold text-bark">
                {reason.title}
              </h3>
              <p className="mt-2 text-cream-700">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Waitlist() {
  const prefersReduced = useReducedMotion();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"candidate" | "employer">("candidate");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
      } else {
        setStatus("error");
        setMessage(data.error);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <motion.section
      className="px-6 py-20"
      initial={prefersReduced ? undefined : { opacity: 0, y: 30 }}
      whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.4, ease: stripeEase }}
    >
      <div className="mx-auto max-w-lg text-center">
        <h2 className="font-heading text-3xl font-bold text-bark sm:text-4xl">
          Join the waitlist
        </h2>
        <p className="mt-4 text-cream-700">
          Be among the first to join when we launch.
        </p>
        {status === "success" ? (
          <motion.div
            className="mt-8 rounded-lg border border-moss bg-moss/10 p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: stripeEase }}
          >
            <p className="text-lg font-semibold text-bark">{message}</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <select
                value={role}
                onChange={(e) =>
                  setRole(e.target.value as "candidate" | "employer")
                }
                className="h-10 rounded-md border border-cream-500 bg-white px-3 text-sm text-bark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brown"
              >
                <option value="candidate">I&apos;m a candidate</option>
                <option value="employer">I&apos;m an employer</option>
              </select>
            </div>
            <AnimatedButton
              type="submit"
              className="w-full"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Joining..." : "Join the waitlist"}
            </AnimatedButton>
            {status === "error" && (
              <p className="text-sm text-red-600">{message}</p>
            )}
          </form>
        )}
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-cream-400 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <Image
          src="/saola-logo.svg"
          alt="Saola"
          width={120}
          height={65}
          className="h-8 w-auto"
        />
        <p className="text-sm text-cream-700">
          Built by{" "}
          <a
            href="https://smasduq.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brown underline underline-offset-4 transition-colors duration-200 hover:text-brown-600"
          >
            Smasduq
          </a>
        </p>
        <div className="flex gap-4 text-sm text-cream-600">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-bark"
          >
            Twitter
          </a>
          <a
            href="mailto:hello@saola.is"
            className="transition-colors duration-200 hover:text-bark"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <VisibilityVsMerit />
      <Problems />
      <HowItWorks />
      <WhyNow />
      <Waitlist />
      <Footer />
    </>
  );
}
