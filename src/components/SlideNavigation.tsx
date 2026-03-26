import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideNavigationProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

const SlideNavigation = ({ current, total, onPrev, onNext }: SlideNavigationProps) => {
  return (
    <>
      {/* Left/Right buttons */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-secondary/60 hover:bg-secondary transition-colors text-foreground"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-secondary/60 hover:bg-secondary transition-colors text-foreground"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slide counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-secondary/60 text-muted-foreground text-sm font-medium tracking-wider">
        {current} / {total}
      </div>
    </>
  );
};

export default SlideNavigation;
