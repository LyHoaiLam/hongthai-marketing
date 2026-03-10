"use client";

import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

type Direction = "up" | "down" | "left" | "right";

interface AnimateOnViewProps {
  children: ReactNode;
  delay?: 0 | 100 | 200 | 300 | 400 | 500 | 600 | 700;
  duration?: 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000;
  from?: Direction;
  className?: string;
  rootMargin?: string;
}

const durationClassMap = {
  200: "duration-200",
  300: "duration-300",
  400: "duration-400",
  500: "duration-500",
  600: "duration-600",
  700: "duration-700",
  800: "duration-800",
  900: "duration-900",
  1000: "duration-1000",
};

const delayClassMap = {
  0: "delay-0",
  100: "delay-100",
  200: "delay-200",
  300: "delay-300",
  400: "delay-400",
  500: "delay-500",
  600: "delay-600",
  700: "delay-700",
};

const fromClassMap = {
  up: "translate-y-10",
  down: "-translate-y-10",
  left: "translate-x-10",
  right: "-translate-x-10",
};

export default function AnimateOnView({
  children,
  delay = 0,
  duration = 700,
  from = "up",
  className,
  rootMargin = "-150px",
}: AnimateOnViewProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: rootMargin,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "will-change-transform transition-all ease-out",
        className,
        durationClassMap[duration],
        delayClassMap[delay],
        !inView && "opacity-0",
        !inView && fromClassMap[from],
        inView && "opacity-100 translate-x-0 translate-y-0",
      )}
    >
      {children}
    </div>
  );
}
