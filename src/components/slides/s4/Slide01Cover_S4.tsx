import ScaledSlide from "../../ScaledSlide";

const Slide01Cover_S4 = () => (
  <ScaledSlide>
    <div style={{ position: "absolute", inset: "-80px", background: "white", zIndex: 0 }} />
    <div
      style={{
        position: "absolute",
        left: -80,
        top: -80,
        bottom: -80,
        width: 30,
        zIndex: 1,
      }}
      className="bg-background"
    />
    <div className="relative z-10 w-full h-full flex items-center">
      <div
        className="ml-[120px] bg-slide-cream w-[60%] px-20 rounded-sm flex flex-col justify-center"
        style={{ height: "40%" }}
      >
        <h1 className="text-5xl font-bold text-background leading-tight mb-6">
          나만의 콘텐츠 공식 완성
        </h1>
        <p className="text-xl text-background/80">
          나다운 방식으로 SNS 시작하기 — 4회차
        </p>
      </div>
    </div>
    <div className="absolute bottom-10 left-[120px] z-10">
      <p className="text-base text-background/60">마케터 모과 · 첫걸음 마케팅</p>
    </div>
  </ScaledSlide>
);

export default Slide01Cover_S4;