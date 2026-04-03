"use client"; // Essencial para o Framer rodar no Next App Router

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number; // Opcional: para fazer animações em sequência
  direction?: "up" | "down" | "left" | "right"; // Opcional: direção do deslize
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  // Configuração dos eixos de deslize
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  };

  return (
    <motion.div
      // 1. Estado Inicial (Escondido)
      initial={{
        opacity: 0,
        ...directions[direction], // Desliza um pouquinho na direção escolhida
      }}
      // 2. Estado Quando Aparece na Tela (In View)
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      // 3. Configurações da Viewport (O segredo da elegância)
      viewport={{
        once: true, // Importante: Anima só a PRIMEIRA vez que aparece. Evita o "efeito cassino"
        amount: 0.2, // Começa a animar quando 20% do elemento já está na tela
      }}
      // 4. Configuração da Transição (Suave)
      transition={{
        duration: 0.7, // Duração de quase 1 segundo para ser bem suave
        delay: delay, // Aplica o delay se houver
        ease: [0.25, 1, 0.5, 1], // Uma curva de velocidade "Cubic Bezier" clássica de luxo
      }}
    >
      {children}
    </motion.div>
  );
}
