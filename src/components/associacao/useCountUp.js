import { animate } from "framer-motion";
import { useEffect, useState } from "react";
export function useCountUp(target, start, duration = 2.2) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [start, target, duration]);
  return value;
}
