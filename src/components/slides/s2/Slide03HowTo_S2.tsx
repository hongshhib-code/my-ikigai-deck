import ScaledSlide from "../../ScaledSlide";

const items = [
  { emoji: "🎯", title: "주제 선택", desc: "이 계정은 왜 이 주제를 반복해서 다루고 있나?" },
  { emoji: "✂️", title: "편집 방식", desc: "어떻게 구성하고, 어떤 흐름으로 전달하나?" },
  { emoji: "🎨", title: "레이아웃·폰트·색상", desc: "왜 이렇게 만들었을까?" },
  { emoji: "💡", title: "영향", desc: "이런 선택들이 보는 사람에게 어떤 영향을 주나?" },
];

const Slide03HowTo_S2 = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">ANALYSIS</p>
    <h2 className="text-4xl font-bold text-foreground mb-16">
      레퍼런스 분석하기
    </h2>
    <div className="flex-1 flex flex-col justify-center gap-10">
      <div className="flex items-center justify-center gap-10">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex-1 bg-slide-cream rounded-2xl p-12 flex flex-col items-center text-center gap-4"
          >
            <span className="text-5xl">{item.emoji}</span>
            <p className="text-2xl font-bold text-accent-foreground">{item.title}</p>
            <p className="text-xl text-accent-foreground/70 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </ScaledSlide>
);

export default Slide03HowTo_S2;