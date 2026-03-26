import ScaledSlide from "../ScaledSlide";

const Slide01Cover = () => (
  <ScaledSlide>
    <div className="flex-1 flex flex-col items-center justify-center text-center gap-8">
      <h1 className="text-6xl font-bold text-foreground leading-tight">
        내 강점을 담은 콘텐츠
      </h1>
      <p className="text-2xl text-slide-cream font-medium">
        나다운 방식으로 SNS 시작하기
      </p>
    </div>
    <div className="text-center pb-4">
      <p className="text-lg text-muted-foreground">
        마케터 모과 · 첫걸음 마케팅
      </p>
    </div>
  </ScaledSlide>
);

export default Slide01Cover;
