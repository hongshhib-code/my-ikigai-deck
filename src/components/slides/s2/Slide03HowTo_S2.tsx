import ScaledSlide from "../../ScaledSlide";

const items = [
  { num: "01", title: "주제 선택", desc: "이 계정은 왜 이 주제를 반복해서 다루고 있나?" },
  { num: "02", title: "편집 방식", desc: "어떻게 구성하고, 어떤 흐름으로 전달하나?" },
  { num: "03", title: "레이아웃·폰트·색상", desc: "왜 이렇게 만들었을까?" },
  { num: "04", title: "영향", desc: "이런 선택들이 보는 사람에게 어떤 영향을 주나?" },
];

const Slide03HowTo_S2 = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">레퍼런스 활용법</p>
    <h2 className="text-4xl font-bold text-foreground mb-16">
      이걸 보면 됩니다
    </h2>
    <div className="flex-1 flex items-center">
      <div className="grid grid-cols-4 gap-6 w-full">
        {items.map((item) => (
          <div key={item.num} className="bg-slide-cream rounded-2xl px-8 py-10 flex flex-col gap-4 min-h-[420px]">
            <p className="text-xl font-bold text-background/60">{item.num}</p>
            <p className="text-2xl font-bold text-background">{item.title}</p>
            <p className="text-lg text-background/80 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </ScaledSlide>
);

export default Slide03HowTo_S2;