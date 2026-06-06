import ScaledSlide from "../../ScaledSlide";

const items = [
  { num: "01", desc: "기획 단계의 아이디어와 실제 제작된 결과물의 간극" },
  { num: "02", desc: "제작 과정에서 가장 정체가 심했던 구간과 그 이유" },
  { num: "03", desc: "소비자가 아닌 '생산자'의 시선으로 마주한 SNS 환경" },
];

const Slide03FirstMaking_S4 = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">첫 제작의 감각</p>
    <h2 className="text-4xl font-bold text-foreground mb-16">직접 만들어보니</h2>
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

export default Slide03FirstMaking_S4;