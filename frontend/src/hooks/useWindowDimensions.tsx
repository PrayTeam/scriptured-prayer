import { useEffect, useState } from "react";

function getWindowDimensions() {
  const { innerWidth, innerHeight } = window;
  return { width: innerWidth, height: innerHeight };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );
  const handleResize = () => setWindowDimensions(getWindowDimensions());

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
