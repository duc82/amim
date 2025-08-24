import { motion } from "framer-motion";

import { useState } from "react";
import FriendshipCard from "./ui/FriendshipCard";

const missions = [
  {
    image: "/mission-1.png",
    title: "Với cán bộ nhân viên",
    content:
      "Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá, phát triển, khẳng định giá trị bản thân",
  },
  {
    image: "/mission-2.png",
    title: "Với khách hàng",
    content:
      "Cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang đến cho khách hàng những trải nghiệm tốt nhất",
  },
  {
    image: "/mission-3.png",
    title: "Với đối tác",
    content:
      "Tin tưởng và muốn hợp tác dài lâu trên nền tảng của sự phát triển bền vững và hướng tới những giá trị tốt đẹp",
  },
  {
    image: "/mission-4.png",
    title: "Với cộng đồng",
    content:
      "Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, đóng góp tích cực cho các hoạt động hướng về cộng đồng",
  },
];

export default function Mission() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="mission"
      className="bg-corner bg-no-repeat bg-contain bg-gradient-to-b from-[#373981]/10 to-[#FFE1E5]/0 to-[81%] pt-[70px] lg:pt-44 lg:text-base lg:font-semibold"
    >
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        viewport={{ once: true }}
        className="text-[#165BB8] uppercase font-inter font-bold text-sm flex items-center justify-center space-x-1.5 mb-4"
      >
        <div className="size-1.5 bg-[#165BB8] rounded-full"></div>
        <span>Sứ mệnh</span>
        <div className="size-1.5 bg-[#165BB8] rounded-full"></div>
      </motion.div>
      <motion.h2
        initial={{
          y: 50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
        viewport={{ once: true }}
        className="px-2 text-center text-2xl tracking-tight font-bold leading-[1.2] bg-linear-[84deg] from-[#328AE2] to-[#FF0D39] bg-clip-text text-transparent mb-[50px] max-w-[645px] mx-auto lg:mb-[88px] lg:text-[40px]"
      >
        Mang lại cuộc sống tốt đẹp hơn cho những người đồng hành
      </motion.h2>
      <div className="lg:flex lg:items-start space-y-6 lg:space-y-0 relative lg:px-16">
        <div className="px-2.5 lg:flex-[41%] lg:max-w-[41%] order-2 lg:sticky lg:top-[150px] lg:px-0 z-10">
          <img
            src="/mission-image.png"
            alt="Mission"
            className="rounded-2xl w-full"
          />
        </div>

        <div className="relative lg:flex-1/2 lg:max-w-1/2 xl:flex-[33%] xl:max-w-[33%] lg:mr-[8%]">
          <div className="hidden lg:inline-block sticky top-[150px] left-0 font-inter leading-6 font-normal">
            {String(activeIndex + 1).padStart(2, "0")}/
            {String(missions.length).padStart(2, "0")}
          </div>
          <ul className="px-2.5 lg:px-0 lg:pl-36">
            {missions.map((mission, i) => {
              return (
                <FriendshipCard
                  mission={mission}
                  key={i}
                  index={i}
                  setActiveIndex={setActiveIndex}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
