import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "motion/react";

import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";

const cooperations = [
  {
    avatar: "cooperation-avatar-1.png",
    content: `Chúng tôi thực sự hứng khởi khi đồng hành cùng Ami&M bởi ở đây có một đội ngũ nhân sự không chỉ giàu kinh nghiệm trong lĩnh vực ngân
    hàng - tài chính mà quan trọng hơn đầy nhiệt tâm với mong muốn đóng góp vào sự phát triển chung của quá trình giáo dục định hướng thế hệ trẻ.`,
    name: "TS. Đinh Thanh Vân",
    position: "Phó trưởng Khoa Ngân hàng - Tài chính, ĐH Kinh tế, GHQG Hà Nội",
    image: "/cooperation-image-1.png",
    active: true,
  },
  {
    avatar: "cooperation-avatar-2.png",
    content: `Ami&M là một trong những đơn vị tiên phong trong việc cung cấp
    các giải pháp giáo dục tài chính toàn diện cho học sinh, sinh viên
    Việt Nam. Chúng tôi rất vui mừng khi được hợp tác cùng Ami&M để
    mang lại những giá trị thiết thực cho cộng đồng.`,
    name: "TS. Nguyễn Thị Thu Hương",
    position: "Giảng viên cao cấp, Chuyên gia Tài chính cá nhân",
    image: "/cooperation-image-1.png",
    active: false,
  },
  {
    avatar: "cooperation-avatar-3.png",
    content: `Với sứ mệnh nâng cao kiến thức tài chính cho thế hệ trẻ, Ami&M đã và đang tạo ra những tác động tích cực trong cộng đồng. Chúng tôi rất tự hào khi được hợp tác cùng Ami&M trong hành trình này.`,
    name: "Nguyễn Thị Thu Hương",
    position:
      "Giám đốc Khối Dịch vụ Ngân hàng Bán lẻ, Ngân hàng TMCP Sài Gòn Thương Tín (Sacombank)",
    image: "/cooperation-image-1.png",
    active: false,
  },
];

const brands = [
  {
    normal: "/cooperation-1.png",
    hover: "/cooperation-1-color.png",
  },
  {
    normal: "/cooperation-2.png",
    hover: "/cooperation-2-color.png",
  },
  {
    normal: "/cooperation-3.png",
    hover: "/cooperation-3-color.png",
  },
  {
    normal: "/cooperation-4.png",
    hover: "/cooperation-4-color.png",
  },
  {
    normal: "/cooperation-5.png",
    hover: "/cooperation-5-color.png",
  },
];

export default function Cooperation() {
  return (
    <section
      id="cooperation"
      className="relative bg-cooperation-eclipse bg-no-repeat bg-contain bg-[#102A4D] text-white pt-20 pb-20 lg:p-0 lg:bg-linear-to-b lg:from-[#102A4D] lg:via-[#191868] lg:via-100% lg:to-[#191868]"
    >
      <div className="text-white font-bold font-inter text-sm uppercase flex items-center space-x-1.5 px-5 mb-8 lg:hidden">
        <div className="size-1.5 bg-white rounded-full"></div>
        <span>Hợp tác vững bền</span>
      </div>

      {/* Mobile */}
      <Swiper
        spaceBetween={60}
        slidesPerView="auto"
        navigation={{
          nextEl: ".cooperation-next",
          prevEl: ".cooperation-prev",
        }}
        breakpoints={{
          1024: {
            slidesPerView: 1,
          },
        }}
        className="px-5! lg:hidden!"
        modules={[Navigation]}
      >
        {cooperations.map((cooperation, i) => (
          <SwiperSlide key={i} className="w-64! lg:w-auto! cooperation-slide">
            <div className="relative top-4 left-28 rounded-full size-[50px] bg-linear-[123deg] from-[#E759AE] to-[#ED1B2F] flex items-center justify-center">
              <img
                src="/quotation-mark.png"
                alt="Quotation Mark"
                className="w-4 lg:w-auto"
              />
            </div>
            <img
              src={cooperation.avatar}
              alt={`Avatar ${i + 1}`}
              className="mb-4"
              width={125}
              height={125}
            />

            <p className="font-inter font-medium text-sm mb-6 leading-normal">
              {cooperation.content}
            </p>
            <div className="space-y-1">
              <h2 className="font-inter font-bold text-xs leading-normal">
                {cooperation.name}
              </h2>
              <p className="font-inter text-[10px] text-[#F0FAFF]/53 font-semibold leading-normal w-48">
                {cooperation.position}
              </p>
              <div className="flex items-center space-x-1">
                <div className="size-1.5 bg-[#996598] rounded-full"></div>
                <div className="size-1 bg-[#D24D70] rounded-full"></div>
                <div className="size-0.5 bg-[#ED1B2F] rounded-full"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="space-x-1 mt-3">
          <button
            type="button"
            className="cooperation-prev size-9 inline-flex items-center justify-center"
          >
            <img src="/arrow-left.svg" alt="Arrow Left" />
          </button>
          <button
            type="button"
            className="cooperation-next size-9 inline-flex items-center justify-center"
          >
            <img src="/arrow-right.svg" alt="Arrow Right" />
          </button>
        </div>
      </Swiper>

      {/* Desktop */}
      <div className="bg-cooperation-background hidden lg:flex items-start justify-center relative h-screen">
        <div className="w-[60%] max-w-[800px] lg:w-[50%] xl:w-[60%] pl-32 z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-white/80 font-inter uppercase flex items-center space-x-1.5 mb-6 text-base font-semibold"
          >
            <div className="size-1.5 bg-white/80 rounded-full"></div>
            <span>Hợp tác vững bền</span>
          </motion.div>
          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-inter font-semibold text-lg xl:text-[28px] mb-6 leading-[1.4]"
          >
            {cooperations[0].content}
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-1"
          >
            <h2 className="font-inter font-semibold text-base xl:text-[22px]">
              {cooperations[0].name}
            </h2>
            <div className="flex items-center space-x-2.5">
              <div className="flex items-center space-x-1">
                <div className="size-0.5 bg-[#8DC63F] rounded-full"></div>
                <div className="size-1 bg-[#35AA94] rounded-full"></div>
                <div className="size-1.5 bg-[#0088CB] rounded-full"></div>
              </div>
              <p className="font-inter text-sm text-white font-semibold leading-normal">
                {cooperations[0].position}
              </p>
              <div className="flex items-center space-x-1">
                <div className="size-1.5 bg-[#996598] rounded-full"></div>
                <div className="size-1 bg-[#D24D70] rounded-full"></div>
                <div className="size-0.5 bg-[#ED1B2F] rounded-full"></div>
              </div>
            </div>
          </motion.div>
          <div className="flex items-center space-x-10 mt-10">
            {cooperations.map((cooperation, i) => (
              <motion.button
                type="button"
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                <img
                  src={cooperation.avatar}
                  alt="Cooperation"
                  width={cooperation.active ? 94 : 70}
                />
              </motion.button>
            ))}
          </div>
        </div>
        <div className="relative lg:w-[50%] xl:w-[40%]">
          <img
            src="/cooperation-image-1.png"
            alt="Cooperation"
            className="relative z-10"
          />
          <div className="size-[200px] absolute top-[10%] right-[30%] rounded-full flex items-center justify-center bg-linear-[123deg] from-[#E759AE] to-[#ED1B2F]">
            <img src="/quotation-mark.png" alt="Quotation Mark" />
          </div>
        </div>
      </div>

      <div className="bg-cooperation-union-mobile lg:bg-cooperation-union bg-no-repeat bg-contain relative z-10 mt-9 lg:-mt-72 xl:-mt-80">
        <div className="pt-3.5 xl:pt-7">
          <div className="text-[#165BB8] font-bold font-inter text-sm uppercase flex items-center justify-center lg:justify-start lg:ml-32 xl:ml-60 space-x-1.5 mb-2">
            <div className="size-1.5 bg-[#165BB8] rounded-full"></div>
            <span>Đối tác tiêu biểu</span>
            <div className="size-1.5 bg-[#165BB8] rounded-full"></div>
          </div>
          <h2 className="bg-linear-[86deg] from-[#328AE2] to-[#FF0D39] bg-clip-text text-transparent text-center lg:max-w-[320px] lg:ml-32 xl:ml-60 lg:text-left lg:uppercase font-bold text-2xl lg:text-lg xl:text-[26px] tracking-tight mb-9">
            Đồng hành cùng Ami&m
          </h2>
          <div className="mb-[30px] lg:mb-9">
            <div className="flex gap-[51px] lg:gap-[73px] overflow-hidden">
              <motion.div
                animate={{ x: ["0%", "-105%"] }}
                transition={{
                  duration: 10,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="flex flex-shrink-0 items-center gap-[51px] lg:gap-[73px]"
              >
                {brands.concat(brands).map((brand, i) => (
                  <HoverImage
                    key={i}
                    normal={brand.normal}
                    hover={brand.hover}
                  />
                ))}
              </motion.div>
              <motion.div
                animate={{ x: ["0%", "-105%"] }}
                transition={{
                  duration: 10,
                  ease: "linear",
                  repeat: Infinity,
                }}
                aria-hidden="true"
                className="flex flex-shrink-0 items-center gap-[51px] lg:gap-[73px]"
              >
                {brands.concat(brands).map((brand, i) => (
                  <HoverImage
                    key={i}
                    normal={brand.normal}
                    hover={brand.hover}
                  />
                ))}
              </motion.div>
            </div>
          </div>
          <img src="/cooperation-video.png" alt="Video" className="w-full" />
        </div>
      </div>

      <img
        src="/cooperation-vector-mobile-2.png"
        alt="Vector"
        className="absolute top-44 left-0 lg:hidden"
      />

      <img
        src="/cooperation-vector-mobile-1.png"
        alt="Vector"
        className="absolute top-0 left-0 w-full lg:hidden"
      />
    </section>
  );
}

const HoverImage = ({ normal, hover }: { normal: string; hover: string }) => {
  const [src, setSrc] = useState(normal);

  return (
    <img
      src={src}
      alt="Partner logo"
      onMouseEnter={() => setSrc(hover)}
      onMouseLeave={() => setSrc(normal)}
      className="w-[102px] xl:w-auto"
    />
  );
};
