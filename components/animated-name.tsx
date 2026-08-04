"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function AnimatedName({ text }: { text: string }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <h1 className="flex font-anton uppercase leading-[0.85] tracking-[-0.01em] text-[19vw] md:text-[9.4vw]">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          onHoverStart={() => setHovered(index)}
          onHoverEnd={() => setHovered(null)}
          whileHover={{ y: -10 }}
          animate={{
            scaleY: hovered === index ? 1.34 : 1.1,
            scaleX: 0.9,
          }}
          transition={{
            type: "tween",
            duration: 0.2,
            ease: "easeInOut"
          }}
          className="inline-block origin-bottom cursor-default"
        >
          {letter}
        </motion.span>
      ))}
    </h1>
  );
}