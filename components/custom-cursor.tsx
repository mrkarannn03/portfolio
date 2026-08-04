"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse).
    if (!window.matchMedia("(pointer: fine)").matches) return
    setEnabled(true)

    function move(e: MouseEvent) {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target as HTMLElement | null
      const interactive = !!target?.closest("a, button, input, textarea, select, [role='button']")
      setActive(interactive)
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x: springX, y: springY }}
    >
      <motion.span
        className="block rounded-full border border-foreground/60"
        animate={{
          width: active ? 44 : 26,
          height: active ? 44 : 26,
          x: active ? -22 : -13,
          y: active ? -22 : -13,
          backgroundColor: active ? "var(--foreground)" : "rgba(0,0,0,0)",
          opacity: active ? 0.12 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
    </motion.div>
  )
}
