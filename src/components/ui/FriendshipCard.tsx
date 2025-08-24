import { motion } from "framer-motion";

export default function FriendshipCard({
  mission,
  active,
}: {
  mission: {
    icon: string;
    title: string;
    content: string;
  };
  active: boolean;
}) {
  return (
    <motion.li
      className="border border-[#EDEDED] rounded-2xl p-6 pt-0 mb-6 space-y-3 lg:pb-10 lg:border-0"
      animate={{ opacity: active ? 1 : 0.4 }}
      transition={{ duration: 0.3 }}
    >
      <img src={mission.icon} alt={mission.title} />
      <h3 className="uppercase text-[#165BB8] font-bold text-xl leading-[1.25] lg:text-[26px]">
        {mission.title}
      </h3>
      <p className="font-inter text-sm font-medium text-[#011942] leading-normal lg:text-lg lg:max-w-[379px]">
        {mission.content}
      </p>
    </motion.li>
  );
}
