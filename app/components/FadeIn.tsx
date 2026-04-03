"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeIn({ children, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      // 1. Inicia totalmente invisível (Sem mexer em escala ou posição)
      initial={{
        opacity: 0,
      }}
      // 2. Revela apenas a opacidade
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        // Duração estendida para 0.8s: cria uma entrada nobre e elegante
        duration: 0.8,
        delay: delay,
        // easeInOut: começa devagar, acelera no meio e termina devagar
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
