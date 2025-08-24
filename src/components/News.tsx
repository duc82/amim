import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowResize from "../hooks/useWindowResize";
import { motion } from "framer-motion";

export default function News() {
  const { width } = useWindowResize();

  return (
    <section
      id="news"
      className="bg-white pt-9 pb-7 px-1.5 lg:pt-[77px] lg:pb-8 lg:px-3"
    >
      <div className="bg-linear-to-b from-[#2F2E79] to-[#191868] rounded-2xl relative pb-6 overflow-hidden">
        <div className="size-[274px] bg-linear-to-br from-[#F4475C]/0 to-[#8E2A36] rounded-full absolute -top-[115px] -left-[57px]"></div>
        <div className="text-white space-y-11 lg:space-y-0 flex flex-col lg:flex-row lg:items-center relative">
          <div className="px-6 lg:pl-16 lg:flex-[0_0_30%] lg:pr-24">
            <motion.div className="font-bold font-inter text-sm uppercase flex items-center space-x-1.5 mt-8 mb-2 lg:text-base lg:font-semibold">
              <div className="size-1.5 bg-white rounded-full"></div>
              <span>Danh sách tin tức</span>
            </motion.div>
            <h2 className="text-[32px] font-bold tracking-tight lg:text-[50px] lg:mb-10">
              Có gì mới tại Ami&M?
            </h2>
            <motion.p className="font-inter font-meidum hidden lg:block lg:mb-8">
              Ami&M, viết tắt của Amity and More Tình bằng hữu và hơn thế nữa
              chính là cái tên và cũng là sự khẳng định cho tôn chỉ mà chúng tôi
              luôn tâm niệm.
            </motion.p>
            <motion.button
              type="button"
              className="hidden lg:block text-sm font-semibold font-inter rounded-full py-3.5 px-6 border border-[#3E4089] hover:border-white"
            >
              Xem chi tiết
            </motion.button>
          </div>
          <div className="px-2 lg:pt-[150px] lg:flex-[0_0_70%] lg:px-0">
            <Swiper
              slidesPerView="auto"
              spaceBetween={16}
              breakpoints={{
                1024: {
                  spaceBetween: 24,
                },
              }}
              className="mb-7 px-2!"
            >
              <SwiperSlide className="bg-white rounded-xl pb-3 lg:pb-0 w-[307px]! lg:w-[401px]! lg:bg-transparent lg:hover:bg-linear-0 lg:hover:from-[rgba(47,46,121,0%)] lg:hover:to-[rgba(15,15,72,75%)] lg:hover:to-[78%] lg:transition-colors">
                <div className="relative mb-5 lg:mb-0">
                  <div className="absolute top-3 left-4 flex items-center justify-center bg-white text-[#165BB8] rounded-full w-24 h-9 font-inter font-semibold text-sm leading-snug">
                    Nổi bật
                  </div>
                  <img
                    src={width >= 1024 ? "/news.png" : "/news-mobile.png"}
                    alt="News"
                    className="rounded-xl w-full"
                  />
                </div>
                <div className="px-5 lg:hidden">
                  <h3 className="font-bold text-[#333333] mb-1.5">
                    20/10 Tràn ngập tiếng cười ấm áp tại văn phòng Ami&M
                  </h3>
                  <p className="line-clamp-2 text-[#828282] text-sm font-inter font-medium mb-4">
                    Những con số chỉ là một phần của câu chuyện, ý nghĩa thực sự
                    là những dấu ấn sâu đậm về sự đổi mới, trách nhiệm xã hội và
                    sự tin cậy từ những Người đồng hành. Trách nhiệm xã hội và
                    sự tin cậy từ những Người đồng hành.
                  </p>
                  <div className="text-[#011942] font-semibold text-xs leading-6 flex items-center justify-between">
                    <span>24/12/2023</span>
                    <div className="flex items-center space-x-2">
                      <span>Đọc thêm</span>
                      <img src="/arrow-top-right.svg" alt="Arrow Top Right" />
                    </div>
                  </div>
                </div>
                <div className="px-5 mt-5 hidden lg:block">
                  <h3 className="font-bold text-white text-xl mb-2.5">
                    20/10 Tràn ngập tiếng cười ấm áp tại văn phòng Ami&M
                  </h3>
                  <p className="text-white/[81%] font-inter text-sm">
                    24/12/2023
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-white rounded-xl pb-3 lg:pb-0 w-[307px]! lg:w-[401px]! lg:bg-transparent lg:hover:bg-linear-0 lg:hover:from-[rgba(47,46,121,0%)] lg:hover:to-[rgba(15,15,72,75%)] lg:hover:to-[78%] lg:transition-colors">
                <div className="relative mb-5 lg:mb-0">
                  <div className="absolute top-3 left-4 flex items-center justify-center bg-white text-[#165BB8] rounded-full w-24 h-9 font-inter font-semibold text-sm leading-snug">
                    Nổi bật
                  </div>
                  <img
                    src={width >= 1024 ? "/news.png" : "/news-mobile.png"}
                    alt="News"
                    className="rounded-xl w-full"
                  />
                </div>
                <div className="px-5 lg:hidden">
                  <h3 className="font-bold text-[#333333] mb-1.5">
                    20/10 Tràn ngập tiếng cười ấm áp tại văn phòng Ami&M
                  </h3>
                  <p className="line-clamp-2 text-[#828282] text-sm font-inter font-medium mb-4">
                    Những con số chỉ là một phần của câu chuyện, ý nghĩa thực sự
                    là những dấu ấn sâu đậm về sự đổi mới, trách nhiệm xã hội và
                    sự tin cậy từ những Người đồng hành. Trách nhiệm xã hội và
                    sự tin cậy từ những Người đồng hành.
                  </p>
                  <div className="text-[#011942] font-semibold text-xs leading-6 flex items-center justify-between">
                    <span>24/12/2023</span>
                    <div className="flex items-center space-x-2">
                      <span>Đọc thêm</span>
                      <img src="/arrow-top-right.svg" alt="Arrow Top Right" />
                    </div>
                  </div>
                </div>
                <div className="px-5 mt-5 hidden lg:block">
                  <h3 className="font-bold text-white text-xl mb-2.5">
                    20/10 Tràn ngập tiếng cười ấm áp tại văn phòng Ami&M
                  </h3>
                  <p className="text-white/[81%] font-inter text-sm">
                    24/12/2023
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-white rounded-xl pb-3 lg:pb-0 w-[307px]! lg:w-[401px]! lg:bg-transparent lg:hover:bg-linear-0 lg:hover:from-[rgba(47,46,121,0%)] lg:hover:to-[rgba(15,15,72,75%)] lg:hover:to-[78%] lg:transition-colors">
                <div className="relative mb-5 lg:mb-0">
                  <div className="absolute top-3 left-4 flex items-center justify-center bg-white text-[#165BB8] rounded-full w-24 h-9 font-inter font-semibold text-sm leading-snug">
                    Nổi bật
                  </div>
                  <img
                    src={width >= 1024 ? "/news.png" : "/news-mobile.png"}
                    alt="News"
                    className="rounded-xl w-full"
                  />
                </div>
                <div className="px-5 lg:hidden">
                  <h3 className="font-bold text-[#333333] mb-1.5">
                    20/10 Tràn ngập tiếng cười ấm áp tại văn phòng Ami&M
                  </h3>
                  <p className="line-clamp-2 text-[#828282] text-sm font-inter font-medium mb-4">
                    Những con số chỉ là một phần của câu chuyện, ý nghĩa thực sự
                    là những dấu ấn sâu đậm về sự đổi mới, trách nhiệm xã hội và
                    sự tin cậy từ những Người đồng hành. Trách nhiệm xã hội và
                    sự tin cậy từ những Người đồng hành.
                  </p>
                  <div className="text-[#011942] font-semibold text-xs leading-6 flex items-center justify-between">
                    <span>24/12/2023</span>
                    <div className="flex items-center space-x-2">
                      <span>Đọc thêm</span>
                      <img src="/arrow-top-right.svg" alt="Arrow Top Right" />
                    </div>
                  </div>
                </div>
                <div className="px-5 mt-5 hidden lg:block">
                  <h3 className="font-bold text-white text-xl mb-2.5">
                    20/10 Tràn ngập tiếng cười ấm áp tại văn phòng Ami&M
                  </h3>
                  <p className="text-white/[81%] font-inter text-sm">
                    24/12/2023
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
            <button
              type="button"
              className="rounded-full w-full h-11 border border-white flex items-center justify-center font-inter text-sm font-semibold lg:hidden"
            >
              Xem tất cả
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
