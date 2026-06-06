import ScaledSlide from "../../ScaledSlide";

const Slide01Cover_S4 = () => (
  <ScaledSlide>
    <div className="absolute inset-0 bg-white" />
    <div className="absolute left-0 top-0 bottom-0 w-[30px] bg-background" />
    <div className="absolute inset-0 flex items-center">
      <div className="ml-[120px] bg-slide-cream w-[60%] py-24 px-20 rounded-sm">
        <h1 className="text-5xl font-bold text-background leading-tight mb-6">
          나만의 콘텐츠 공식 완성
        </h1>
        <p className="text-xl text-background/80">
          나다운 방식으로 SNS 시작하기 — 4회차
        </p>
      </div>
    </div>
    <div className="absolute bottom-10 left-[120px]">
      <p className="text-base text-background/60">마케터 모과 · 첫걸음 마케팅</p>
    </div>
  </ScaledSlide>
);

export default Slide01Cover_S4;