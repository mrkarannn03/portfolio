import { SiteHeader } from "@/components/site-header"
import { ContactSection } from "@/components/contact-section"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <ContactSection />
    </main>
  )
}
