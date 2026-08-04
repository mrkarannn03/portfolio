"use client"

import { Mail, ArrowUpRight, ArrowUp } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { Reveal } from "@/components/reveal"
import { SiLeetcode } from "react-icons/si"; 

export const LeetcodeIcon = SiLeetcode;

const LINKS = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/mrkarannn03" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/karansingh2006/" },
  { icon: LeetcodeIcon, label: "Leetcode", href: "https://leetcode.com/u/karannn021/" },
  { icon: Mail, label: "Email", href: "mailto:karansingh.builds@gmail.com" },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="mx-auto mt-32 max-w-[1400px] px-5 pb-12 md:px-10">
      <div className="border-t border-border pt-16">
        <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <div className="mx-10 md:mx-40">
            <h2 className="font-anton text-6xl uppercase leading-[0.9] text-foreground md:text-8xl">
              Let&apos;s work together
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              I build products, fix bugs and occasionally win arguments with the
              code. Looking for someone who solves problems? Let&apos;s talk.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-foreground px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Say Hello
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-5 ml-10 md:ml-40 md:items-start md:pl-0">
            {LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-3 text-xl text-foreground transition-opacity hover:opacity-60"
              >
                <Icon className="size-5" />
                {label}
              </a>
            ))}
          </div>
        </Reveal>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>Uttarakhand, India · Open to Opportunities</p>
          <a href="#top" className="flex items-center gap-2 transition-colors hover:text-foreground">
            <ArrowUp className="size-4" />
            Back to Top
          </a>
          <p>Built with Next.js, care &amp; questionable sleep habits.</p>
        </div>
      </div>
    </footer>
  )
}
