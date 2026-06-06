import { useState, useEffect, useCallback } from "react";
import SlideNavigation from "@/components/SlideNavigation";
import Slide01Cover_S4 from "@/components/slides/s4/Slide01Cover_S4";
import Slide02Questions_S4 from "@/components/slides/s4/Slide02Questions_S4";
import Slide03FirstMaking_S4 from "@/components/slides/s4/Slide03FirstMaking_S4";
import Slide04Cadence_S4 from "@/components/slides/s4/Slide04Cadence_S4";
import Slide05Value_S4 from "@/components/slides/s4/Slide05Value_S4";
import Slide06Retrospective_S4 from "@/components/slides/s4/Slide06Retrospective_S4";
import Slide07Closing_S4 from "@/components/slides/s4/Slide07Closing_S4";

const slides = [
  Slide01Cover_S4,
  Slide02Questions_S4,
  Slide03FirstMaking_S4,
  Slide04Cadence_S4,
  Slide05Value_S4,
  Slide06Retrospective_S4,
  Slide07Closing_S4,
];

const Session4 = () => {
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

export default Session4;