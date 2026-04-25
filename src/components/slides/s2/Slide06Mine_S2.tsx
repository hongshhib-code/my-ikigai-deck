import ScaledSlide from "../../ScaledSlide";

const items = [
  { emoji: "⭐", title: "잘하는 것", desc: "이 계정이 특히 잘하고 있는 점" },
  { emoji: "👀", title: "안 하는 것", desc: "이 계정이 놓치고 있는 점" },
  { emoji: "🪄", title: "내가 다르게 할 수 있는 것", desc: "내 색깔로 다르게 할 수 있는 점" },
];

const Slide06Mine_S2 = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">APPLY</p>
    <h2 className="text-4xl font-bold text-foreground mb-16">
      레퍼런스에서 나만의 차별화 포인트 만들기
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
      <p className="text-lg text-muted-foreground italic text-center">
        재배치하고 재맥락화해서 나만의 것으로 만드는 것이 핵심입니다.
      </p>
    </div>
  </ScaledSlide>
);

export default Slide06Mine_S2;