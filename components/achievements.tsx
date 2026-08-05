import { ExternalLink } from "lucide-react"
import { Reveal } from "@/components/reveal"

const STATS = [
  { value: "1+", label: "HACKATHON WINS" },
  { value: "1k+", label: "TEAMS FACED" },
  { value: "2", label: "ACADEMIC HONORS" },
]

const HACKATHONS = [
  {
    title: "SIH",
    meta: "3rd PLACE · UNIVERSITY HACKATHON",
    body: "Secured third place in the SIH at a 24-hour hackathon hosted by Haridwar University College of Engineering, Roorkee.",
    link: "https://drive.google.com/file/d/1tqKmEeDifcdThzHM6jABH5i2NZlDLIuK/view?usp=drive_link",
  },
  {
    title: "ST & C",
    meta: "35th RANK · INTERNATIONAL QUIZ",
    body: "Competed at a 2-hour international quiz alongside 4000+ participants at unstop, online.",
    link: "https://drive.google.com/file/d/1ON1GAboqQBxayi7vPW4jqqHmzsqA_1ju/view?usp=drive_link"
  },
  // {
  //   title: "HACKBYTE 2.0",
  //   meta: "MLH SPONSOR AWARD · MONGODB UTILIZATION",
  //   body: "Built SoulSpeak at IIITDM Jabalpur's 36-hour hackathon and received the M5GO IoT Starter Kit from Major League Hacking.",
  // },
]

const AWARDS = [
  {
    title: "TOPPER REWARD",
    meta: "HARIDWAR UNIVERSITY",
    body: "Reward and cash prize for outstanding academic performance during bachelor's studies.",
  },
  // {
  //   title: "CERTIFICATE OF MERIT",
  //   meta: "VPM COLLEGE",
  //   body: "Scored 97.69% in the Summer 2021 exam and received a Certificate of Merit and gift.",
  // },
  {
    title: "ARTIFICIAL INTELLIGENCE WITH ML",
    meta: "PREGRAD",
    body: "Completed ARTIFICIAL INTELLIGENCE WITH ML — Become a ML Master — prediction project.",
  },
  {
    title: "FINTECH PRODUCT MANAGEMENT",
    meta: "UDEMY",
    body: "Completed a product-focused fintech certification course.",
  },
  {
    title: "COMPUTER VISION WITH DEEP LEARNING",
    meta: "IIT KHARAGPUR",
    body: "Earned Elite + Silver certification.",
  },
]

function Entry({ title, meta, body, link }: { title: string; meta: string; body: string; link: string }) {
  return (
    <article className="border-t border-border py-6">
      <div className="flex items-start justify-between gap-4">
        <h4 className="font-display text-xl font-bold uppercase text-foreground md:text-2xl">
          {title}
        </h4>
        <a
          href={link}
          aria-label={`Open ${title} certificate`}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <ExternalLink className="size-5" />
        </a>
      </div>
      <p className="mt-1 text-xs font-medium tracking-wide text-muted-foreground">{meta}</p>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">{body}</p>
    </article>
  )
}

export function Achievements() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pt-42 md:px-10">
      <Reveal>
        <h2 className="font-anton text-5xl uppercase leading-none text-foreground md:text-8xl">
          Proof under pressure.
        </h2>
      </Reveal>

      <div className="mt-12 grid max-w-xl grid-cols-3 gap-6">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <p className="font-display text-4xl font-bold text-foreground md:text-5xl">{s.value}</p>
            <p className="mt-1 text-xs tracking-wide text-muted-foreground">{s.label}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-20">
        <Reveal>
          <h3 className="font-anton text-3xl uppercase text-foreground">Hackathons</h3>
          <div className="mt-4">
            {HACKATHONS.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.06}>
                <Entry {...h} />
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="font-anton text-3xl uppercase text-foreground">Awards &amp; Learning</h3>
          <div className="mt-4">
            {AWARDS.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <Entry {...a} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
