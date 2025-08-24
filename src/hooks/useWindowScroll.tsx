import { useEffect, useState } from "react";

export default function useWindowScroll() {
  const [scroll, setScroll] = useState({ y: 0 });
  const [direction, setDirection] = useState<"up" | "down" | "">("");

  useEffect(() => {
    setScroll({ y: window.scrollY });
    if (window.scrollY > 0) {
      setDirection("down");
    }

    let lastY = window.scrollY;

    const handleWindowScroll = () => {
      const currentY = window.scrollY;
      setDirection(currentY > lastY ? "down" : "up");
      setScroll({ y: currentY });
      lastY = currentY;
    };

    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return { ...scroll, direction };
}
