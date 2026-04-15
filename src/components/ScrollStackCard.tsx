import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface ScrollStackCardProps {
  children: ReactNode;
  index: number;
  total: number;
}

const ScrollStackCard = ({ children, index, total }: ScrollStackCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [8, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        scale,
        opacity,
        rotateX,
        zIndex: index,
        position: "sticky",
        top: `${80 + index * 12}px`,
        transformOrigin: "center top",
        perspective: "1000px",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollStackCard;
