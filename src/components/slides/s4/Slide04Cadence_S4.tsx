import ScaledSlide from "../../ScaledSlide";

const items = [
  { num: "01", desc: "본업과 일상을 해치지 않는 선에서의 최대 빈도 확인" },
  { num: "02", desc: "콘텐츠의 퀄리티(밀도)와 발행 빈도 사이의 균형점" },
  { num: "03", desc: "단발성 업로드가 아닌 하나의 '채널'로 기능하기 위한 최소한의 약속" },
];

const Slide04Cadence_S4 = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">나만의 발행 주기</p>
    <h2 className="text-4xl font-bold text-foreground mb-16">현실적인 발행 주기</h2>
    <div className="flex-1 flex flex-col justify-center gap-8">
      {items.map((item) => (
        <div key={item.num} className="bg-slide-cream rounded-2xl px-12 py-8 flex items-center gap-10">
          <span className="text-5xl font-bold text-background leading-none">{item.num}</span>
          <p className="text-2xl text-background/90 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </ScaledSlide>
);

export default Slide04Cadence_S4;