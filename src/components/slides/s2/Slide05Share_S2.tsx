import ScaledSlide from "../../ScaledSlide";

const cards = [
  { emoji: "🔍", title: "어떤 계정인가요?", sub: "계정명·분야·팔로워 수" },
  { emoji: "❤️", title: "왜 이 계정을 선택했나요?", sub: "끌린 이유" },
  { emoji: "✨", title: "이 계정이 잘 되는 이유는?", sub: "내 생각" },
];

const Slide05Share_S2 = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">SHARE</p>
    <h2 className="text-4xl font-bold text-foreground mb-16">
      찾아온 계정을 소개해주세요
    </h2>
    <div className="flex-1 flex items-center justify-center gap-10">
      {cards.map((card) => (
        <div
          key={card.title}
          className="flex-1 bg-slide-cream rounded-2xl p-12 flex flex-col items-center text-center gap-4"
        >
          <span className="text-5xl">{card.emoji}</span>
          <p className="text-2xl font-bold text-accent-foreground">{card.title}</p>
          <p className="text-xl text-accent-foreground/70">{card.sub}</p>
        </div>
      ))}
    </div>
  </ScaledSlide>
);

export default Slide05Share_S2;