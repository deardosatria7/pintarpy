"use client";
import {motion} from "motion/react";
import {ReactNode} from "react";

type AnimationProps = {
  children: ReactNode;
  state?: boolean;
};

export function ScrollAnimation({children}: AnimationProps) {
  return (
    <motion.div
      initial={{opacity: 0, y: 50}} // Mulai dengan opacity 0 dan posisi 50px lebih bawah
      whileInView={{opacity: 1, y: 0}} // Saat masuk viewport, naik ke posisi normal
      transition={{duration: 0.6, ease: "easeOut"}} // Animasi smooth
      viewport={{once: true}} // Hanya animasi sekali
    >
      {children}
    </motion.div>
  );
}

export function SidebarAnimation({children, state}: AnimationProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-5"
      initial={{x: "-100%"}} // Mulai dari luar layar (kiri)
      animate={{x: state ? "0%" : "-100%"}} // Slide masuk/keluar
      transition={{type: "spring", stiffness: 300, damping: 30}}
    >
      {children}
    </motion.div>
  );
}
