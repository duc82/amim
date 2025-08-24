import { motion, MotionValue, useTransform } from "motion/react";

interface WordSpanProps {
  scrollYProgress: MotionValue<number>;
  inputRange: number[];
  outputRange: string[];
  word: string;
}

export default function WordSpan({
  scrollYProgress,
  inputRange,
  outputRange,
  word,
}: WordSpanProps) {
  const color = useTransform(scrollYProgress, inputRange, outputRange);

  return <motion.span style={{ color }}>{word}&nbsp;</motion.span>;
}
