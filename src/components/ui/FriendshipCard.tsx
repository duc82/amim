import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function FriendshipCard({
  mission,
  index,
  setActiveIndex,
}: {
  mission: {
    image: string;
    title: string;
    content: string;
  };
  index: number;
  setActiveIndex: (index: number) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  return (
    <motion.li
      ref={ref}
      className="border border-[#EDEDED] rounded-2xl p-6 mb-6 space-y-3 lg:pb-10 lg:border-0"
      animate={{ opacity: isInView ? 1 : 0.4 }}
      transition={{ duration: 0.3 }}
    >
      <img src={mission.image} alt={mission.title} />
      <h3 className="uppercase text-[#165BB8] font-bold text-xl leading-[1.25] lg:text-[26px]">
        {mission.title}
      </h3>
      <p className="font-inter text-sm font-medium text-[#011942] leading-normal lg:text-lg lg:max-w-[379px]">
        {mission.content}
      </p>
    </motion.li>
  );
}
