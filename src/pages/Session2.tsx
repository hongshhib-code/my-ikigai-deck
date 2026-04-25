import { useState, useEffect, useCallback } from "react";
import SlideNavigation from "@/components/SlideNavigation";
import Slide01Cover_S2 from "@/components/slides/s2/Slide01Cover_S2";
import Slide02Reference_S2 from "@/components/slides/s2/Slide02Reference_S2";
import Slide03HowTo_S2 from "@/components/slides/s2/Slide03HowTo_S2";
import Slide04FarField_S2 from "@/components/slides/s2/Slide04FarField_S2";
import Slide05Share_S2 from "@/components/slides/s2/Slide05Share_S2";
import Slide06Mine_S2 from "@/components/slides/s2/Slide06Mine_S2";
import Slide07Action_S2 from "@/components/slides/s2/Slide07Action_S2";

const slides = [
  Slide01Cover_S2,
  Slide02Reference_S2,
  Slide03HowTo_S2,
  Slide04FarField_S2,
  Slide05Share_S2,
  Slide06Mine_S2,
  Slide07Action_S2,
];

const Session2 = () => {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => setCurrent((c) => Math.min(c + 1, slides.length - 1)), []);
  const goPrev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  const SlideComponent = slides[current];

  return (
    <div className="w-screen h-screen overflow-hidden relative bg-background select-none">
      <div className="w-full h-full relative overflow-hidden">
        <SlideComponent />
      </div>
      <SlideNavigation
        current={current + 1}
        total={slides.length}
        onPrev={goPrev}
        onNext={goNext}
      />
    </div>
  );
};

export default Session2;