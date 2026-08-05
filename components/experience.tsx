"use client"

import { useEffect, useRef, useState } from "react"
import {
    motion,
    useScroll,
    useSpring,
    useTransform
} from "motion/react"
import { Reveal } from "@/components/reveal"

const STATS = [
  { value: "3+", label: "YEARS" },
  { value: "12+", label: "BUILDS" },
  { value: "∞", label: "ITERATION" },
]

const JOBS = [
  {
    period: "2023 — PRESENT",
    org: "FREELANCING, REMOTE",
    role: "FREELANCE",
    place: "Remote",
    range: "2023 — Present",
    points: [
      "Translated 'We need to go digital...' into something users could actually click.",
      "Gave products the glow-up they deserved through UX revamps, cleaner flows, and interfaces people actually enjoy using. Listened first. Designed second. Coded third.",
      "Jumped between client calls, Figma, React, and deployment without caring where the problem lived.",
      "Turns out the best part isn't writing code, it's watching clients say, 'That's exactly what I imagined.'",
    ],
    tags: [
      "CLIENT COMMUNICATION",
      "UX ENGINEERING",
      "PRODUCT STRATEGY",
      "FULL-STACK DEVELOPMENT",
      "UI REVAMPS",
    ],
  },
  {
    period: "2025",
    org: "DIGITAL WORD OF MOUTH, VISAKHAPATNAM",
    role: "INTERN",
    place: "Remote",
    range: "May - Aug 2025",
    points: [
      "The Challenge — Manufactured parts often differ slightly from their CAD models due to machining tolerances and production errors. Manual inspection is time-consuming and susceptible to human error. Machines are costly.",
      "The Solution — Developing a system that registers LiDAR-generated point clouds with CAD models, compares their geometry, and automatically identifies dimensional deviations using CV and geometric algorithms.",
      "The Goal — Deliver an inspection workflow that reduces cost, improves manufacturing accuracy, reduces inspection time, and enables early fault detection for higher-quality production.",
    ],
    tags: ["COMPUTER VISION", "RESEARCH", "LIDAR", "PYTHON"],
  },
  // {
  //   period: "2026 — PRESENT",
  //   org: "SWINBURNE UNIVERSITY OF TECHNOLOGY, AUSTRALIA",
  //   role: "INTERN",
  //   place: "Swinburne University of Technology, Australia",
  //   range: "2026 — Present",
  //   points: [
  //     "The Challenge — Manufactured parts often differ slightly from their CAD models due to machining tolerances and production errors. Manual inspection is time-consuming and susceptible to human error. Machines are costly.",
  //     "The Solution — Developing a system that registers LiDAR-generated point clouds with CAD models, compares their geometry, and automatically identifies dimensional deviations using CV and geometric algorithms.",
  //     "The Goal — Deliver an inspection workflow that reduces cost, improves manufacturing accuracy, reduces inspection time, and enables early fault detection for higher-quality production.",
  //   ],
  //   tags: ["COMPUTER VISION", "RESEARCH", "LIDAR", "PYTHON"],
  // },
  // {
  //   period: "2026 — PRESENT",
  //   org: "SWINBURNE UNIVERSITY OF TECHNOLOGY, AUSTRALIA",
  //   role: "INTERN",
  //   place: "Swinburne University of Technology, Australia",
  //   range: "2026 — Present",
  //   points: [
  //     "The Challenge — Manufactured parts often differ slightly from their CAD models due to machining tolerances and production errors. Manual inspection is time-consuming and susceptible to human error. Machines are costly.",
  //     "The Solution — Developing a system that registers LiDAR-generated point clouds with CAD models, compares their geometry, and automatically identifies dimensional deviations using CV and geometric algorithms.",
  //     "The Goal — Deliver an inspection workflow that reduces cost, improves manufacturing accuracy, reduces inspection time, and enables early fault detection for higher-quality production.",
  //   ],
  //   tags: ["COMPUTER VISION", "RESEARCH", "LIDAR", "PYTHON"],
  // },
]

function JobCard({ job }: { job: (typeof JOBS)[number] }) {
  return (
    <article className="rounded-3xl bg-card p-7 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.4)] md:p-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="font-anton text-4xl uppercase text-foreground md:text-5xl">{job.role}</h3>
        <div className="sm:text-right">
          <p className="text-sm text-muted-foreground">{job.range}</p>
          <p className="font-semibold text-foreground">{job.place}</p>
        </div>
      </div>

      <div className="my-7 h-px w-full bg-border" />

      <ul className="space-y-5">
        {job.points.map((point, i) => (
          <li key={i} className="flex gap-3 text-base leading-relaxed text-foreground/80 md:text-lg">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/60" />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-9 flex flex-wrap gap-2.5">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-4 py-1.5 text-xs font-medium tracking-wide text-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}

export function Experience() {
  const [active, setActive] = useState(0)
  const cardRefs = useRef<(HTMLElement | null)[]>([])
  const cardsRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset:["start center","end center"]
    })

    const progress = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1]),
    {
        stiffness: 90,
        damping: 24,
    }
)

    const lineHeight = useTransform(
      scrollYProgress,
      [0,1],
      ["0%","100%"]
  )
  const smoothHeight = useSpring(lineHeight,{
      stiffness:90,
      damping:22
  })

    useEffect(()=>{

        const unsubscribe = scrollYProgress.on("change",(v)=>{

            const total = JOBS.length

            const index = Math.min(
                Math.floor(v * total),
                total - 1
            )

            setActive(
                Math.max(
                    0,
                    Math.min(index, JOBS.length-1)
                )
            )

        })

        return () => unsubscribe()

    },[scrollYProgress])


  function scrollToCard(i: number) {
    cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <section ref={sectionRef} id="experience" className="mx-auto max-w-[1400px] px-5 pt-42 md:px-10">
      <div className="grid gap-12 md:grid-cols-[minmax(0,380px)_1fr] md:gap-16">
        <div className="md:sticky md:top-28 md:self-start">
          <Reveal>
            <h2 className="font-anton text-6xl uppercase text-foreground md:text-7xl">Experience</h2>
            <div className="my-8 h-px w-full bg-border" />
            <div className="grid grid-cols-3 gap-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-4xl font-bold text-foreground">{s.value}</p>
                  <p className="mt-1 text-xs tracking-wide text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <nav ref={sectionRef} aria-label="Experience timeline" className="relative mt-12">
            <div
                ref={timelineRef}
                className="absolute left-[7px] top-5 bottom-5 w-[2px] rounded-full bg-border overflow-hidden"
            >
                <motion.div
                    style={{
                        scaleY: progress,
                    }}
                    className="absolute inset-0 origin-top bg-black dark:bg-white"
                />
            </div>

            <div className="space-y-10">
              {JOBS.map((j, i) => (
                <button
                  key={j.org}
                  type="button"
                  onClick={() => scrollToCard(i)}
                  className="relative flex w-full items-start gap-4 pl-8 text-left"
                >
                  <motion.span
                  aria-hidden
                  animate={
                    active === i
                      ? {
                          backgroundColor: "#ffffff",
                          scale: [1.1, 1.18, 1.1],
                          boxShadow: [
                            "0 0 8px rgba(255,255,255,.35)",
                            "0 0 18px rgba(255,255,255,.75)",
                            "0 0 8px rgba(255,255,255,.35)",
                          ],
                        }
                      : {
                          backgroundColor: "transparent",
                          scale: 1,
                          boxShadow: "0 0 0px rgba(255,255,255,0)",
                        }
                  }
                  transition={
                    active === i
                      ? {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                      : {
                          duration: 0.3,
                        }
                  }

                  className="
                  absolute
                  left-0
                  top-0.5
                  flex
                  h-4
                  w-4
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-foreground
                  bg-background
                  "
                  />
                  <span className={`transition-opacity duration-300 ${active === i ? "opacity-100" : "opacity-45"}`}>
                    <span className="block text-xs tracking-wide text-muted-foreground">{j.period}</span>
                    <span className="mt-1 block font-display text-lg font-semibold uppercase text-foreground">
                      {j.org}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </nav>
        </div>

        <div ref={cardsRef} className="flex flex-col gap-10 md:gap-16">
          {JOBS.map((job, i) => (
            <div
              key={job.org}
              ref={(el) => {
                cardRefs.current[i] = el
              }}
              className="scroll-mt-28"
            >
              <Reveal delay={i * 0.06}>
                <JobCard job={job} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
