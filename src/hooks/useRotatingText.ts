import { useEffect, useState } from "react";

export function useRotatingText(items: string[], delay = 1800) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % items.length);
    }, delay);

    return () => window.clearInterval(timer);
  }, [delay, items.length]);

  return items[index];
}
