"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "top" | "bottom" | "left" | "right";

type Props = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
};

const getInitial = (direction: Direction) => {
  switch (direction) {
    case "top":
      return { opacity: 0, y: -30 };
    case "bottom":
      return { opacity: 0, y: 30 };
    case "left":
      return { opacity: 0, x: -30 };
    case "right":
      return { opacity: 0, x: 30 };
    default:
      return { opacity: 0, y: 30 };
  }
};

export default function MotionWrapper({
  children,
  direction = "bottom",
  delay = 0,
  duration = 0.5,
}: Props) {
  return (
    <motion.div
      initial={getInitial(direction)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}