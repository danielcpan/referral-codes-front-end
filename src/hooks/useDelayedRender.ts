import { useState, useEffect } from "react";

const useDelayedRender = (delay: number) => {
  const [delayed, setDelayed] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setDelayed(false), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (fn) => !delayed && fn();
};

export default useDelayedRender;
