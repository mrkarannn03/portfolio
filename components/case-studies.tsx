import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

const PROJECTS = [
  {
    num: "01",
    year: "2026",
    title: "GANGA VIEW CAFE",
    category: "FULL STACK / CLIENT WORK",
    image: "/ganga_website.png",
    large: false,
    link: "https://gangaviewcafe.com",
  },
  {
    num: "02",
    year: "2026",
    title: "AADI YOGA SCHOOL",
    category: "PROPOSAL PROJECT",
    image: "/AADIYOGASCHOOL.png",
    large: false,
    link: "https://reliable-meerkat-2e3d9e.netlify.app/",
  },
  {
    num: "03",
    year: "2026",
    title: "GUWAHATI RESIDENCY",
    category: "FULL STACK / PROPOSAL PROJECT",
    image: "/guwahati_website.png",
    large: false,
    link: "https://glistening-squirrel-9c500d.netlify.app/",
  },
  {
    num: "04",
    year: "2025",
    title: "ARCHITECT",
    category: "AI / FULL STACK / PYTHON",
    image: "/architect.png",
    large: false,
    link: "",
  },
  {
    num: "05",
    year: "2025",
    title: "COLD CHAIN MONITORING SYSTEM",
    category: "RESEARCH / IOT",
    image: "/coontainer_iot.png",
    large: false,
    link: "",
  },
]

export function CaseStudies() {
  return (
    <section
      id="work"
      className="mx-auto max-w-[1400px] px-5 pt-42 md:px-10"
    >
      <Reveal>
        <p className="font-script text-3xl text-muted-foreground md:text-4xl">
          Featured Case Studies
        </p>
      </Reveal>

      <div className="mt-12 grid gap-x-10 gap-y-20 md:grid-cols-2 md:gap-x-14 md:gap-y-32 lg:gap-x-16 lg:gap-y-40">
        {PROJECTS.map((p, i) => {
          const CardContent = (
            <>
              <div className="relative aspect-[14/9] overflow-hidden rounded-xl bg-secondary">
                <Image
                  src={p.image}
                  alt={`${p.title} project preview`}
                  fill
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Gradient */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/30
                    to-transparent
                    opacity-100
                    md:opacity-0
                    md:group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                />

                {/* Project information */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    flex
                    items-end
                    justify-between
                    p-7
                  "
                >
                  <div
                    className="
                      translate-y-0
                      opacity-100
                      transition-all
                      duration-500

                      md:translate-y-6
                      md:opacity-0
                      md:group-hover:translate-y-0
                      md:group-hover:opacity-100
                    "
                  >
                    <p className="text-sm text-white/70">
                      {p.year}
                    </p>

                    <h3 className="mt-2 font-display text-3xl font-bold uppercase text-white">
                      {p.title}
                    </h3>

                    <p className="mt-2 text-xs tracking-[0.18em] text-white/70">
                      {p.category}
                    </p>
                  </div>

                  {p.link && (
                    <ArrowUpRight
                      className="
                        size-7
                        shrink-0
                        text-white
                        transition-all
                        duration-500

                        md:translate-x-4
                        md:translate-y-4
                        md:opacity-0

                        md:group-hover:translate-x-0
                        md:group-hover:translate-y-0
                        md:group-hover:opacity-100
                      "
                    />
                  )}
                </div>
              </div>
            </>
          )

          return (
            <Reveal
              key={p.num}
              delay={(i % 2) * 0.1}
              className={p.large ? "md:col-span-2" : ""}
            >
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-3xl"
                  aria-label={`View ${p.title} live website`}
                >
                  {CardContent}
                </a>
              ) : (
                <div
                  className="
                    group
                    relative
                    block
                    overflow-hidden
                    rounded-3xl
                  "
                >
                  {CardContent}
                </div>
              )}
            </Reveal>
          )
        })}
      </div>

      <Reveal className="mt-12 flex justify-center">
        <span className="px-8 py-3 text-lg font-medium tracking-wide text-foreground">
          & More
        </span>
      </Reveal>
    </section>
  )
}