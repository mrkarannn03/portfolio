"use client"

import { TrendingUp } from "lucide-react"
import { Reveal } from "@/components/reveal"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

const AREAS = [
  "Enhancing UX",
  "Frontend engineering",
  "Full-stack development",
  "Cloud deployments",
  "Web3 systems",
  "AI-powered products",
  "Research publications",
]

const PILLARS = [
  {
    title: "I FIGURE THINGS OUT.",
    body: 'Throw a vague requirement, a weird bug, or a completely new tech stack at me, and I&apos;ll map a way through it. I thrive in the "figure it out" phase of projects, turning chaos into clean, working architecture.',
  },
  {
    title: "I BUILD THINGS PEOPLE USE.",
    body: "Prototypes are cool, but shipping real software to real users is what matters. I&apos;ve collaborated with startups, agencies, and international teams to take ideas out of Figma and get them safely into production.",
  },
  {
    title: "I OWN THE FULL STACK.",
    body: "I don&apos;t just stop at the API layer. I&apos;m comfortable jumping from a smooth UI animation down to a messy SQL query, all the way to Dockerizing the app and configuring the AWS infrastructure and CI/CD pipelines.",
  },
  {
    title: "I DO RESEARCH TOO.",
    body: "I&apos;m not just guessing what works. I have a background as a published researcher in AI, ML, IoT, and blockchain, which means I bring a structured, deeply analytical approach to solving complex engineering problems.",
  },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  })

  const y = useTransform(
    scrollYProgress,
    [0.3, 1],
    [120, 0]
  )
  return (
    <section ref={sectionRef} id="about" className="relative mx-auto max-w-[1400px] px-5 pt-24 md:px-10">
      <div className="sticky top-0 h-screen">
        <Reveal>
          <h2 className="font-display text-6xl font-bold uppercase leading-none text-foreground md:text-[9vw]">
            Wondering who am I?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-20">
          <Reveal className="space-y-5 text-lg leading-relaxed md:text-xl">
            <p className="text-foreground">
              Most developers choose between engineering and design.
            </p>
            <p className="text-foreground">I never really did.</p>
            <p className="text-muted-foreground">My goal is simple</p>
            <p className="text-foreground">
              Build stuff that is useful, beautiful and convertible.
            </p>
            <p className="text-muted-foreground">
              Also, powered by caffeine, deadlines, and the unreasonable belief
              that every experience can be improved :)
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mb-5 text-muted-foreground">
              Over the last few years I&apos;ve worked across:
            </p>
            <ul className="space-y-3">
              {AREAS.map((area) => (
                <li key={area} className="flex items-center gap-3 text-lg text-foreground md:text-xl">
                  <TrendingUp className="size-5 shrink-0 text-muted-foreground" />
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
      
      <div className="relative z-20 -mt-16 rounded-3xl">
      {/* dark pillars block */}
        <motion.div style={{ y }} className="relative z-20 mt-20 rounded-t-[36px] rounded-b-2xl bg-foreground px-6 py-16 text-background shadow-[0_-40px_80px_rgba(0,0,0,0.25)] md:px-16 md:py-24" >   
          <Reveal>
            <p className="font-script text-4xl md:text-5xl">and...</p>
          </Reveal>

          <div className="mt-12 space-y-16">
            {PILLARS.map((p) => (
              <Reveal key={p.title} className="grid gap-4 md:grid-cols-2 md:gap-16">
                <h3 className="font-display text-3xl font-bold uppercase leading-tight md:text-5xl">
                  {p.title}
                </h3>
                <p
                  className="text-base leading-relaxed text-background/70 md:text-lg"
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
              </Reveal>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  )
}
