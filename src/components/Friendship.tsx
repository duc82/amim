import { useScroll } from "framer-motion";
import { useRef } from "react";
import WordSpan from "./ui/WordSpan";
import useWindowResize from "../hooks/useWindowResize";

const text =
  "“Tình bằng hữu, sự chính trực và tinh thần tự nâng tầm hun đúc nên tinh thần của một tổ chức không ngừng học tập để kiến tạo giá trị.”";

export default function Friendship() {
  const ref = useRef(null);
  const { width } = useWindowResize();
  // Lấy scroll progress trong phạm vi section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={ref} id="friendship" className="bg-[#102A4D] flex flex-col">
      <div className="relative">
        <img
          src={width >= 1024 ? "/friendship.png" : "/friendship-mobile.png"}
          alt="Tình bằng hữu"
          className="object-cover w-full"
        />
        <div className="absolute -bottom-16 xl:bottom-28 w-full left-1/2 -translate-x-1/2 text-xl font-bold text-center leading-tight flex flex-wrap justify-center lg:text-3xl xl:text-5xl z-10 max-w-[286px] lg:max-w-[768px] xl:max-w-[1291px]">
          {text.split(" ").map((word, i) => {
            // tính start và end cho từng chữ (phân chia theo index)
            const start = i / text.split(" ").length;
            const end = (i + 1) / text.split(" ").length;
            return (
              <WordSpan
                key={i}
                scrollYProgress={scrollYProgress}
                inputRange={[start, end]}
                outputRange={["rgba(249,249,249,0.25)", "#fff"]}
                word={word}
              />
            );
          })}
        </div>
      </div>

      <div className="bg-[#102A4D] w-full h-24 lg:h-[182px]"></div>
    </section>
  );
}
