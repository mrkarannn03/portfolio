"use client"

import { useState } from "react"
import Link from "next/link"
import { Sun, Moon, Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useTheme } from "@/components/theme-provider"
import { Manufacturing_Consent } from "next/font/google";

const manufacturingConsent = Manufacturing_Consent({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-manufacturing-consent",
});

const NAV = [
  { label: "Home", href: "/#" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#work" },
  { label: "Contact", href: "/contact" },
]

const menuVariants = {
  open: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  closed: {},
}

const itemVariants = {
  open: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
  closed: { y: 40, opacity: 0 },
}

export function SiteHeader() {
  const { dark, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10">
          <Link
            href="/"
            aria-label="Home"
            className="
              font-logo
              text-[2.7rem]
              leading-none
              text-foreground
              transition-transform
              duration-300
              hover:scale-110
            "
          >
            K
          </Link>

          <nav className="flex items-center gap-6 text-sm md:gap-8">
            {/* <span className="hidden text-muted-foreground sm:inline">v1</span> */}

            <button
              type="button"
              onClick={toggle}
              className="flex items-center gap-2 text-foreground transition-opacity hover:opacity-60"
              aria-label="Toggle color theme"
            >
              {dark ? <Moon className="size-4" /> : <Sun className="size-4" />}
              <span>{dark ? "Dark" : "Light"}</span>
            </button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 text-foreground transition-opacity hover:opacity-60"
            >
              <span className="hidden sm:inline">Menu</span>
              <Menu className="size-5" aria-label="Open navigation" />
            </button>
          </nav>
        </div>
      </header>

      {/* Fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-foreground text-background"
            initial={{ clipPath: "circle(0% at calc(100% - 3rem) 3rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 3rem) 3rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 3rem) 3rem)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="mx-auto flex h-full max-w-[1400px] flex-col px-5 py-4 md:px-10">
              <div className="flex items-center justify-end py-1">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 transition-opacity hover:opacity-60"
                >
                  <span className="hidden sm:inline">Close</span>
                  <X className="size-6" aria-label="Close navigation" />
                </button>
              </div>

              <motion.nav
                variants={menuVariants}
                initial="closed"
                animate="open"
                className="flex flex-1 flex-col items-center justify-center gap-1 md:gap-3"
              >
                {NAV.map((item) => (
                  <motion.div key={item.href} variants={itemVariants} className="overflow-hidden">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block font-display text-5xl font-bold uppercase leading-tight tracking-tight transition-opacity hover:opacity-50 md:text-8xl"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.5 }}
                className="text-center font-script text-2xl"
              >
                Let&apos;s build something.
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
