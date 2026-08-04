"use client";

import Image from "next/image";
import { Mail, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { SiLeetcode } from "react-icons/si"; 
import { Reveal } from "@/components/reveal";
import { AnimatedName } from "@/components/animated-name";
import { motion } from "framer-motion";
import { useState } from "react";

export const LeetcodeIcon = SiLeetcode;

export function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="top"
      className="relative md:mx-20 flex min-h-screen max-w-[1400px] flex-col justify-center px-5 pb-24 pt-45 md:pt-35 md:px-10"
    >
      {/* Heading */}
      <Reveal>
        <p className="mb-13 text-center md:text-right font-display text-foreground text-s font-medium uppercase tracking-wide text-foreground md:text-2xl">
          I{" "}
          <span className="font-script text-2xl px-3 italic md:text-3xl">
            LOVE
          </span>{"   "}figuring stuff out.
        </p>
      </Reveal>

      {/* Hero */}
      <Reveal delay={0.08}>
        <div className="flex flex-col items-center gap-5 md:flex-row md:justify-center md:py-10  md:gap-6">

          <AnimatedName text="KARAN" />

          <motion.div
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="relative aspect-[5/3] w-64 rotate-3 overflow-visible rounded-md md:w-80"
          >
            <Image
              src="/portrait.png"
              alt="Portrait"
              fill
              className="rounded-md object-cover shadow-xl"
            />
            <motion.div
                animate={
                  hovered
                    ? {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }
                    : {
                        opacity: 0,
                        scale: 0.8,
                        y: 0,
                      }
                }
                transition={{
                  delay: 0,
                  type: "spring",
                }}
                className="absolute -rotate-6 text-xs left-4 -top-1.5 rounded-full bg-white px-2 py-1 shadow-xl border-2 dark:text-black"
              >
                ✈️ TRAVEL
            </motion.div>

            <motion.div
              animate={
                hovered
                  ? {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      scale: 0.8,
                      y: 0,
                    }
              }
              transition={{
                delay: 0.00,
                type: "spring",
              }}
              className="absolute rotate-3 text-xs -bottom-4 left-7/12 -translate-x-1/2 rounded-full bg-white px-2 py-1 shadow-xl border-2 dark:text-black"
            >
              💪 FITNESS
            </motion.div>

            <motion.div
              animate={
                hovered
                  ? {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      scale: 0.8,
                      y: 0,
                    }
              }
              transition={{
                delay: 0.0,
                type: "spring",
              }}
              className="absolute -rotate-3 text-xs -bottom-2 -right-5 rounded-full bg-white px-2 py-1 shadow-xl border-2 dark:text-black"
            >
              🎨 TREKING
            </motion.div>
          </motion.div>

          <AnimatedName text="SINGH" />

        </div>
      </Reveal>

      {/* Bottom */}
      <Reveal delay={0.16}>
        <div className="mt-6 flex items-center flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <p className="font-display text-xl md:font-semibold uppercase tracking-wide text-foreground md:text-2xl">
            Freelancer
          </p>

          <div className="flex gap-3">
            {[
              { icon: Mail, label: "Email", href: "mailto:karansingh.builds.com" },
              { icon: GithubIcon, label: "GitHub", href: "https://github.com/mrkarannn03/" },
              { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/karansingh2006/" },
              { icon: LeetcodeIcon, label: "Leetcode", href: "https://leetcode.com/u/karannn021/" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 hover:scale-110 hover:bg-foreground hover:text-background"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>

        </div>
      </Reveal>

      {/* Footer */}
      <Reveal delay={0.24}>
  <div className="mt-16 flex flex-col items-center justify-center gap-6 text-sm font-medium md:flex-row md:justify-between md:gap-0 relative min-h-[80px]">
    <a
      href="#about"
      className="flex items-center gap-2 transition-opacity hover:opacity-60 absolute bottom-3 left-1/2 -translate-x-1/2 md:static md:translate-x-0"
    >
      Scroll to Explore
      <ChevronDown className="size-4 animate-bounce" />
    </a>

    <a
      href="#work"
      className="transition-opacity hover:opacity-60 hidden md:block"
    >
      Featured Projects
    </a>
  </div>
</Reveal>     
    </section>
  );
}