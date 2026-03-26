import { useRef, useEffect, useState, ReactNode } from "react";

interface ScaledSlideProps {
  children: ReactNode;
}

const ScaledSlide = ({ children }: ScaledSlideProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const parent = containerRef.current.parentElement;
      if (!parent) return;
      const scaleX = parent.clientWidth / 1920;
      const scaleY = parent.clientHeight / 1080;
      setScale(Math.min(scaleX, scaleY));
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    const observer = new ResizeObserver(updateScale);
    if (containerRef.current?.parentElement) {
      observer.observe(containerRef.current.parentElement);
    }
    return () => {
      window.removeEventListener("resize", updateScale);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="slide-content absolute"
      style={{
        width: 1920,
        height: 1080,
        left: "50%",
        top: "50%",
        marginLeft: -960,
        marginTop: -540,
        transform: `scale(${scale})`,
        transformOrigin: "center center",
      }}
    >
      <div className="w-full h-full bg-background p-20 flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default ScaledSlide;
