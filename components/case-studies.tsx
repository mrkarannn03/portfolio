import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

const PROJECTS = [
  // {
  //   num: "01",
  //   year: "2026",
  //   title: "AGENCY SCANURL",
  //   category: "UI/UX / CLIENT WORK",
  //   image: "/project-web3.png",
  //   large: true,
  // },
  {
    num: "01",
    year: "2026",
    title: "GANGA VIEW CAFE",
    category: "FULL STACK / CLIENT WORK",
    image: "/ganga_website.png",
    large: false,
  },
  {
    num: "02",
    year: "2026",
    title: "GUWAHATI RESIDENCY",
    category: "FULL STACK / PROPOSAL PROJECT",
    image: "/guwahati_website.png",
    large: false,
  },
  {
    num: "03",
    year: "2025",
    title: "ARCHITECT",
    category: "AI / FULL STACK / PYTHON",
    image: "/architect.png",
    large: false,
  },
  {
    num: "04",
    year: "2025",
    title: "COLD CHAIN MONITORING SYSTEM",
    category: "RESEARCH / IOT",
    image: "/coontainer_iot.png",
    large: false,
  },
]

export function CaseStudies() {
  return (
    <section id="work" className="mx-auto max-w-[1400px] px-5 pt-32 md:px-10">
      <Reveal>
        <p className="font-script text-3xl text-muted-foreground md:text-4xl">
          Featured Case Studies
        </p>
      </Reveal>

      <div className="mt-10 grid gap-15 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal
            key={p.num}
            delay={(i % 2) * 0.1}
            className={p.large ? "md:col-span-2" : ""}
          >
          <a
            //href=""
            className="group block"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-secondary">
              <Image
                src={p.image || "/placeholder.svg"}
                alt={`${p.title} project preview`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground">{p.year}</p>
                <h3 className="mt-1 font-display text-2xl font-bold uppercase text-foreground md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs tracking-wide text-muted-foreground">
                  {p.category}
                </p>
              </div>
              <ArrowUpRight className="size-6 shrink-0 text-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 flex justify-center">
        <a  
          className=" px-8 py-3 text-l font-medium tracking-wide text-foreground transition-colors "
        >
          & More
        </a>
      </Reveal>
    </section>
  )
}
