import clsx from "clsx";
import { useState } from "react";
import useWindowResize from "../hooks/useWindowResize";

const initialInvestments = [
  {
    iconActive: "/logo.png",
    icon: "/logo-2.png",
    value: "Investment",
    active: true,
  },
  {
    iconActive: "/logo.png",
    icon: "/logo-2.png",
    value: "Wealth Management",
    active: false,
  },
  {
    iconActive: "/logo.png",
    icon: "/logo-2.png",
    value: "Training",
    active: false,
  },
  {
    iconActive: "/logo.png",
    icon: "/logo-2.png",
    value: "Consulting",
    active: false,
  },
  {
    iconActive: "/logo.png",
    icon: "/logo-2.png",
    value: "Hospitality",
    active: false,
  },
];

export default function Investment() {
  const [investments, setInvestments] = useState(initialInvestments);
  const { width } = useWindowResize();

  const bigDiameter = width >= 1536 ? 872 : 500;
  const smallDiameter = 112;
  const radius = bigDiameter / 2 - smallDiameter / 2 + smallDiameter / 2;

  return (
    <section
      id="Investment"
      className="flex flex-col lg:flex-row lg:space-y-0 space-y-32 pt-40 pb-14 bg-white"
    >
      <div className="px-2.5 lg:w-1/2 relative mb-14">
        <div className="relative z-10 lg:pl-[100px]">
          <div className="text-[#165BB8] uppercase font-inter font-bold text-sm flex items-center space-x-1.5 mb-1.5 lg:text-base lg:font-semibold">
            <div className="size-1.5 bg-[#165BB8] rounded-full"></div>
            <span>Lĩnh vực đầu tư</span>
          </div>
          <h2 className="pr-3 tracking-tight text-2xl font-bold leading-[1.2] bg-linear-[-84deg] from-[#FF0D39] from-0% to-[#328AE2] to-100% bg-clip-text text-transparent mb-6 lg:max-w-[526px] lg:text-3xl">
            Ami&M là đối tác tư vấn - đầu tư bền vững, phát triển dịch vụ cao
            cấp và nâng tầm giáo dục trải nghiệm.
          </h2>
          <p className="font-inter text-sm leading-normal font-medium text-[#333333] lg:max-w-[493px] lg:text-lg">
            Với hệ sinh thái tối ưu, Ami&M truyền cảm hứng xây dựng sự thịnh
            vượng đích thực cho những Người đồng hành và tạo lập di sản xứng tầm
            cho thế hệ tương lai.
          </p>
        </div>

        <img
          src="/investment.png"
          alt="Investment"
          className="hidden lg:block pl-14 mt-10"
        />

        <img
          src="/investment-decoration.png"
          alt="Investment Decoration"
          className="hidden lg:block absolute bottom-0 left-10"
        />
      </div>

      {/* Desktop */}
      <div className="relative flex-1 overflow-hidden hidden w-1/2 lg:block">
        <div className="absolute -top-18 -right-20 2xl:-top-36 2xl:-right-32 size-[500px] 2xl:size-[872px] bg-investment-2 bg-no-repeat xl:bg-bottom-left rounded-full flex items-center justify-center">
          <div className="text-white">
            <div className="mb-7">
              <img src="./logo.png" alt="Logo" className="mb-4 ml-auto" />
              <p className="text-2xl text-right font-semibold">Training</p>
            </div>
            <p className="uppercase text-right font-inter text-lg mb-7">
              Cung cấp dịch vụ <br />
              <span className="font-extrabold text-xl leading-normal">
                Quản lý & Khai thác Tài sản, <br /> Chuỗi cơ sở lưu trú.
              </span>
            </p>
            <button
              type="button"
              className="flex items-center justify-center space-x-2 text-white w-[200px] h-[60px] rounded-full border border-white ml-auto font-inter font-semibold text-sm"
            >
              <span>Tìm hiểu thêm</span>
              <img src="/arrow-right.svg" alt="Arrow Right" />
            </button>
          </div>
          {investments.map((investment, i) => {
            const angle = 90 + (110 / (investments.length - 1)) * i;

            return (
              <button
                type="button"
                key={i}
                onClick={() => {
                  setInvestments((prev) => {
                    const newInvestments = prev.map((inv, index) => ({
                      ...inv,
                      active: index === i,
                    }));
                    return newInvestments;
                  });
                }}
                className={clsx(
                  "absolute text-[7px] font-medium rounded-full tracking-tight size-28 flex justify-center items-center shadow-sm",
                  investment.active
                    ? "bg-linear-to-t from-[#3E4089] to-[#1F226E] text-white"
                    : "bg-white text-[#3E4089]"
                )}
                style={{
                  transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                }}
              >
                <div className="space-y-1 text-right">
                  <img
                    src={
                      investment.active
                        ? investment.iconActive
                        : investment.icon
                    }
                    alt="Logo"
                    width={65}
                  />
                  <span>{investment.value}</span>
                </div>
              </button>
            );
          })}
          {/* <div className="absolute bg-linear-[40deg] from-[#328AE2] to-[#FF0D39] w-full h-full rounded-full p"></div> */}
          .
        </div>
      </div>

      {/* Mobile */}
      <div className="relative lg:hidden">
        <div className="absolute -top-11 left-1/2 -translate-x-1/2 w-full flex flex-wrap justify-center -space-y-4">
          {investments.map((investment, index) => (
            <button
              type="button"
              key={index}
              onClick={() =>
                setInvestments((prev) => {
                  const newInvestments = prev.map((inv, i) => ({
                    ...inv,
                    active: i === index,
                  }));
                  return newInvestments;
                })
              }
              className={clsx(
                "text-[7px] font-medium rounded-full tracking-tight size-28 flex justify-center items-center shadow-sm",
                investment.active
                  ? "bg-linear-to-t from-[#3E4089] to-[#1F226E] text-white"
                  : "bg-white text-[#3E4089]"
              )}
            >
              <div className="space-y-1 text-right">
                <img
                  src={
                    investment.active ? investment.iconActive : investment.icon
                  }
                  alt="Logo"
                  width={65}
                />
                <span>{investment.value}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="absolute bottom-14 left-0 right-0 flex flex-col px-2.5 text-white text-center">
          <p className="uppercase font-inter font-medium leading-normal mb-2.5">
            Ami&M Investment
          </p>
          <h2 className="font-inter text-lg leading-normal font-extrabold mb-5 uppercase">
            Quản lý & khai thác tài sản, chuỗi cơ sở lưu trú.
          </h2>
          <button
            type="button"
            className="w-40 mx-auto text-xs font-semibold font-inter flex items-center justify-center space-x-2 rounded-full py-3.5 px-6 border border-white/50 hover:border-white"
          >
            <span>Tìm hiểu thêm</span>
            <img src="/arrow-right.svg" alt="Arrow Right" />
          </button>
        </div>
        <img src="/investment-mobile.png" alt="Investment" className="w-full" />
      </div>
    </section>
  );
}
