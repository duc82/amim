import { useState } from "react";
import useWindowScroll from "../hooks/useWindowScroll";
import { motion } from "motion/react";
import useWindowResize from "../hooks/useWindowResize";
import { cn } from "../utils/cn";

export default function Header() {
  const { y, direction } = useWindowScroll();
  const { width } = useWindowResize();
  const [language, setLanguage] = useState("vie");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40",
        direction === "down" &&
          "-translate-y-[120%] transition-all duration-300 ease-ease",
        direction === "up" &&
          "translate-y-0 transition-all duration-300 ease-ease",
        y > 0 && "bg-black"
      )}
    >
      <div className="flex items-center justify-between px-4.5 lg:px-24 py-4 lg:py-6 lg:items-start">
        <a href="/" title="Ami&M">
          <motion.img
            src="/logo.png"
            alt="Ami&M Logo"
            initial={false}
            animate={
              width >= 1024
                ? {
                    width: y > 0 ? 100 : "auto",
                  }
                : { width: 80 }
            }
            transition={{
              type: "tween",
              duration: 0.5,
            }}
          />
        </a>
        <div className="space-x-4 flex items-center">
          <div className="rounded-full bg-[#231F20]/13 flex items-center justify-between px-2 py-1 text-white">
            <button
              type="button"
              onClick={() => setLanguage("vie")}
              className={cn(
                "cursor-pointer rounded-full font-bold text-xs lg:text-sm size-9 lg:size-10",
                language === "vie" && "bg-primary"
              )}
            >
              VIE
            </button>
            <button
              type="button"
              onClick={() => setLanguage("eng")}
              className={cn(
                "rounded-full cursor-pointer font-bold text-xs lg:text-sm size-9 lg:size-10",
                language === "eng" && "bg-primary"
              )}
            >
              ENG
            </button>
          </div>
          <button
            type="button"
            className="cursor-pointer size-11 lg:h-12 lg:w-auto lg:px-7 bg-white lg:bg-[#231f20]/13 rounded-full flex items-center justify-center font-bold space-x-2"
          >
            <span className="hidden lg:inline-block text-white uppercase">
              Menu
            </span>
            <div className="flex flex-col items-center justify-center space-y-1">
              <div className="h-0.5 w-4 bg-[#011942] lg:bg-white"></div>
              <div className="h-0.5 w-4 bg-[#011942] lg:bg-white"></div>
              <div className="h-0.5 w-4 bg-[#011942] lg:bg-white"></div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
