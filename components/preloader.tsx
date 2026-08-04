"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

const WORDS = ["Hello", "Namaste", "Bonjour", "Ciao", "こんにちは", "Karan Singh"]

export function Preloader() {
  const [done, setDone] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    // Only play once per browser session.
    if (typeof window !== "undefined" && sessionStorage.getItem("introSeen")) {
      setDone(true)
      return
    }
    if (index >= WORDS.length - 1) {
      const t = setTimeout(() => {
        setDone(true)
        try {
          // sessionStorage.setItem("introSeen", "1")
        } catch {
          /* ignore */
        }
      }, 500)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setIndex((i) => i + 1), index === 0 ? 500 : 300)
    return () => clearTimeout(t)
  }, [index])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-foreground text-background"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{
                opacity:0,
                y:20
              }}
              animate={{
                opacity:1,
                y:0
              }}
              exit={{
                opacity:0,
                y:-20
              }}
              transition={{
                duration:0.45
              }}
            >
            </motion.div>

            </AnimatePresence>
            <span className="size-2 rounded-full bg-background" />
            <span className="font-display text-3xl font-semibold uppercase tracking-tight md:text-5xl">
              {WORDS[index]}
            </span>
          </motion.div>
      )}
    </AnimatePresence>
  )
}