"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { ArrowUpRight, Clock, Mail, MapPin } from "lucide-react"

const INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "karansingh.builds@gmail.com",
    href: "mailto:karansingh.builds@gmail.com",
  },
  { icon: MapPin, label: "Location", value: "Uttarakhand, India" },
  { icon: Clock, label: "Response", value: "Usually within 24 hours" },
]

const ENQUIRY = ["Hiring", "Client project", "Collaboration", "General inquiry"]

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function ContactSection() {
  const [sent, setSent] = useState(false)

  async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault()

  const form = e.currentTarget

  const data = Object.fromEntries(new FormData(form))

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    alert("Failed to send enquiry.")
    return
  }

  setSent(true)

  setTimeout(() => {
    setSent(false)
  }, 3000)

  form.reset()
}

  return (
    <section className="mx-auto max-w-[1200px] px-5 pb-12 pt-30 md:px-20 md:pt-30">
      <div className="grid items-start gap-16 md:gap-20 lg:gap-12 lg:grid-cols-[420px_minmax(0,1fr)] xl:grid-cols-[480px_minmax(0,1fr)]">
        <div className="flex h-full flex-col">
          <div>
            <h2 className="font-display  font-bold uppercase leading-tight text-foreground text-3xl sm:text-4xl lg:text-5xl">
              Let&apos;s build something
            </h2>
            <p className="font-script text-foreground text-2xl sm:text-3xl lg:text-5xl">BEAUTIFUL</p>
          </div>

          <div>
            <p className="mt-6 max-w-sm sm:max-w-md text-sm leading-relaxed text-muted-foreground md:text-s">
              Tell me whether you are hiring, creating, improving, launching or just wanna have a
              ☕.
            </p>
          </div>

          <div className="mt-auto space-y-4 pt-16">
            {INFO.map((item, i) => (
              <div key={item.label} >
                <div className="relative rounded-xl border transition-all duration-30 hover:border-foreground/30 hover:shadow-xl border-border bg-card p-5">
                  {item.href && (
                    <a
                      href={item.href}
                      aria-label="Email Aditi"
                      className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ArrowUpRight className="size-4" />
                    </a>
                  )}
                  <div className="flex items-start gap-4">
                    <span className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-full border border-border">
                      <item.icon className="size-4 text-foreground" />
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-0.5 block text-sm font-medium text-foreground transition-opacity hover:opacity-70"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border transition-all duration-500 hover:shadow-2xl border-border bg-card p-5 sm:p-7 lg:p-10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)] md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-5 md:grid-cols-2">
              {[
                { id: "name", label: "Your name *", type: "text", placeholder: "John Doe" },
                {
                  id: "email",
                  label: "Email address *",
                  type: "email",
                  placeholder: "you@example.com",
                },
                {
                  id: "phone",
                  label: "Phone number",
                  type: "tel",
                  placeholder: "+00 0000 0000 000",
                },
              ].map((f, i) => (
                <motion.div
                  key={f.id}
                  custom={i}
                  variants={fieldVariants}
                  viewport={{ once: true }}
                  className={f.id === "phone" ? "sm:col-span-1" : ""}
                >
                  <label htmlFor={f.id} className="mb-2 block break-all text-xs sm:text-sm text-muted-foreground">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    required={f.label.includes("*")}
                    placeholder={f.placeholder}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground focus:ring-2 focus:ring-foreground/10"
                  />
                </motion.div>
              ))}

              <motion.div
                custom={3}
                variants={fieldVariants}
                viewport={{ once: true }}
              >
                <label htmlFor="enquiry" className="mb-2 block text-sm text-muted-foreground">
                  Enquiry type
                </label>
                <select
                  id="enquiry"
                  name="enquiry"
                  defaultValue=""
                  className="w-full appearance-none rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-foreground"
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  {ENQUIRY.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </motion.div>
            </div>

            <motion.div custom={4} variants={fieldVariants} viewport={{ once: true }}>
              <label htmlFor="message" className="mb-2 block text-sm text-muted-foreground">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="What do you need, what is the goal, and when do you want to launch?"
                className="min-h-[150px] w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
              />
            </motion.div>

            <motion.div
              custom={5}
              variants={fieldVariants}
              viewport={{ once: true }}
              className="mt-2 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="text-xs text-muted-foreground">
                Just a short brief so I can understand the work.
              </p>
              <button
                type="submit"
                disabled={sent}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground w-full sm:w-auto px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background disabled:opacity-60"
              >
                {sent ? "Sent!" : "Send inquiry"}
                {!sent && <ArrowUpRight className="size-4" />}
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  )
}
