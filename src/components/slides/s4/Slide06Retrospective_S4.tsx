import ScaledSlide from "../../ScaledSlide";

const items = [
  { num: "01", title: "잘한 점", desc: "스스로 잘했다고 느끼는 것, 실제로 해낸 것" },
  { num: "02", title: "아쉬운 점", desc: "더 잘할 수 있었던 것, 놓쳤던 것" },
  { num: "03", title: "배운 점", desc: "앞으로 가져갈 것, 새로 알게 된 것" },
];

const Slide06Retrospective_S4 = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">수료</p>
    <h2 className="text-4xl font-bold text-foreground mb-16">100일 회고</h2>
    <div className="flex-1 flex flex-col justify-center gap-8">
      {items.map((item) => (
        <div key={item.num} className="bg-slide-cream rounded-2xl px-12 py-8 flex items-center gap-10">
          <span className="text-5xl font-bold text-background leading-none">{item.num}</span>
          <div>
            <p className="text-2xl font-bold text-background mb-1">{item.title}</p>
            <p className="text-xl text-background/80">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </ScaledSlide>
);

export default Slide06Retrospective_S4;