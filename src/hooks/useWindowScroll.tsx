import { useEffect, useState } from "react";

export default function useWindowScroll() {
  const [scroll, setScroll] = useState({
    y: window.scrollY,
  });
  const [direction, setDirection] = useState<"up" | "down" | "">("");

  useEffect(() => {
    const handleWindowScroll = () => {
      setDirection(window.scrollY > scroll.y ? "down" : "up");
      setScroll({ y: window.scrollY });
    };
    window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, [scroll]);

  return { ...scroll, direction };
}
