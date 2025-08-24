import { motion, type Variants } from "motion/react";

const text = ["Đồng hành", "khởi thịnh vượng"];

const container = {
  hidden: {},
  show: {
    transition: {
      // độ trễ giữa các từ
      staggerChildren: 0.1,
      // trễ trước khi từ đầu tiên chạy
      delayChildren: 0.2,
    },
  },
};

const word: Variants = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-hero-mobile lg:bg-hero bg-center bg-cover bg-no-repeat h-screen w-full relative text-white"
    >
      <div className="absolute bottom-0 left-0 pl-4.5 lg:pl-24 mb-[30vw] md:mb-[20vw] lg:mb-[10vw]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col"
        >
          {text.map((line, i) => (
            <h1
              key={i}
              className="space-x-3 uppercase text-[32px] lg:text-[3vw] leading-[1.2] font-bold"
            >
              {line.split(" ").map((w, j) => (
                <motion.span key={j} variants={word} className="inline-block">
                  {w}
                </motion.span>
              ))}
            </h1>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
