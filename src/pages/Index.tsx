import { useState, useEffect, useCallback } from "react";
import SlideNavigation from "@/components/SlideNavigation";
import Slide01Cover from "@/components/slides/Slide01Cover";
import Slide02Flow from "@/components/slides/Slide02Flow";
import Slide03StartWhy from "@/components/slides/Slide03StartWhy";
import Slide04DeepDive from "@/components/slides/Slide04DeepDive";
import Slide05Breakthrough from "@/components/slides/Slide05Breakthrough";
import Slide06Ikigai from "@/components/slides/Slide06Ikigai";
import Slide07IkigaiExample from "@/components/slides/Slide07IkigaiExample";
import Slide08QuestionGuide from "@/components/slides/Slide08QuestionGuide";
import Slide09PairInterview from "@/components/slides/Slide09PairInterview";
import Slide10Action from "@/components/slides/Slide10Action";

const slides = [
  Slide01Cover,
  Slide02Flow,
  Slide03StartWhy,
  Slide04DeepDive,
  Slide05Breakthrough,
  Slide06Ikigai,
  Slide07IkigaiExample,
  Slide08QuestionGuide,
  Slide09PairInterview,
  Slide10Action,
];

const Index = () => {
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

export default Index;
