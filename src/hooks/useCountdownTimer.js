import {useEffect, useState} from "react";

/**
 * Hook for countdown seconds
 * @param {int} initialCount
 * @param {boolean} start
 */
export function useCountdownTimer(initialCount, start) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    if (start) {
      const secondsLeft = setInterval(() => {
        setCount(c => c - (c == 0 ? 0 : 1));
      }, 1000);
      return () => clearInterval(secondsLeft);
    }
  }, [start]);

  return [
    count,
    setCount,
    /** reset */
    () => {setCount(initialCount)}
  ];
}
