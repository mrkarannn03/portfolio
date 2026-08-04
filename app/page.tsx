import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { CaseStudies } from "@/components/case-studies"
import { Skills } from "@/components/skills"
import { Achievements } from "@/components/achievements"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <About />
      <Experience />
      <CaseStudies />
      <Skills />
      <Achievements />
      <SiteFooter />
    </main>
  )
}
