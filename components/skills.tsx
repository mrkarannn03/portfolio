import { Reveal } from "@/components/reveal"

const CATEGORIES = [
  {
    num: "01",
    kicker: "PIXEL ENGINE ROOM",
    title: "FRONTEND TECHNOLOGIES",
    desc: "Where interfaces get fast, animated, and suspiciously satisfying.",
    tags: ["Bootstrap", "React", "Zustand", "Three.js", "Next.js", "Vite", "TailwindCSS", "GSAP", "UI Libraries"],
  },
  {
    num: "02",
    kicker: "VISUAL MISCHIEF LAB",
    title: "DESIGN APPS",
    desc: "For turning vague ideas into screens people can actually understand.",
    tags: ["Figma", "Framer", "Spline", "InkScape", "Verge3D"],
  },
  {
    num: "03",
    kicker: "LOGIC BASEMENT",
    title: "BACKEND TECHNOLOGIES",
    desc: "APIs, contracts, databases, and the occasional existential query.",
    tags: ["Node.js", "Express.js", "API", "Prisma", "Solidity", "Hardhat", "Monorepo", "PHP", "JSP", "Python", "NoSQL", "SQL"],
  },
  {
    num: "04",
    kicker: "SHIP IT DEPARTMENT",
    title: "DEVOPS",
    desc: "For when 'works on my machine' needs to become everyone else's problem too.",
    tags: ["AWS", "Docker", "Kubernetes", "GitHub", "CI/CD", "Nginx", "ArgoCD", "Prometheus", "Grafana"],
  },
  {
    num: "05",
    kicker: "NEXT RABBIT HOLES",
    title: "CURRENTLY EXPLORING",
    desc: "AI agents, resilient system design, and product architecture that can survive real users, weird edge cases, and Monday deployments.",
    tags: ["AI Agents", "System Design", "Product Architecture", "Automation"],
  },
]

const SOFT = [
  "Active Listening & Feedback Integration",
  "Time Management & Meeting Deadlines",
  "Remote Collaboration across global teams",
  "Problem Solving & Debugging",
  "Project Designing & End-to-End Delivery",
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1400px] px-5 pt-42 md:px-10">
      <Reveal>
        <h2 className="font-display text-4xl font-bold uppercase leading-tight text-foreground md:text-7xl">
          Things I can break, fix, ship &amp; explain
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {CATEGORIES.map((c, i) => (
          <Reveal
            key={c.num}
            delay={(i % 2) * 0.1}
            className={`rounded-2xl border border-border bg-card p-7 md:p-9 ${
              i === CATEGORIES.length - 1 ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex items-start justify-between">
              <p className="font-script text-xl text-muted-foreground">{c.kicker}</p>
              <span className="font-display text-2xl font-bold text-muted-foreground/40">
                {c.num}
              </span>
            </div>
            <h3 className="mt-2 font-anton text-2xl uppercase text-foreground md:text-3xl">
              {c.title}
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
              {c.desc}
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {c.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      {/* soft skills */}
      <Reveal className="mt-8 rounded-2xl border border-border bg-card p-7 md:p-12">
        <p className="font-script text-xl text-muted-foreground">HUMAN API</p>
        <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h3 className="font-anton text-3xl uppercase leading-none text-foreground md:text-5xl">
            Soft skills, but make them operational
          </h3>
          <p className="text-muted-foreground md:max-w-48 md:text-right">
            Code is easier when humans are aligned.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SOFT.map((s, i) => (
            <div key={s} className="rounded-xl border border-border p-5">
              <p className="font-display text-2xl font-bold text-muted-foreground/50">0{i + 1}</p>
              <p className="mt-3 text-sm text-foreground">{s}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
