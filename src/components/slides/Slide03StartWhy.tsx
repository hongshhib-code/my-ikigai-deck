import ScaledSlide from "../ScaledSlide";

const cards = [
  { emoji: "💰", title: "돈을 벌고 싶어서", sub: "부업 · 수익화" },
  { emoji: "✍️", title: "내 이야기를 나누고 싶어서", sub: "표현 · 기록" },
  { emoji: "🏷️", title: "브랜딩이 필요해서", sub: "신뢰 · 전문성" },
];

const Slide03StartWhy = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">Start Why</p>
    <h2 className="text-4xl font-bold text-foreground mb-16">
      내가 SNS를 시작하고 싶은 진짜 이유는 무엇인가요?
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
    <p className="text-lg text-muted-foreground text-center mt-10">
      여러분의 이유는 무엇인가요? 옆 사람과 1분씩 이야기해봐요.
    </p>
  </ScaledSlide>
);

export default Slide03StartWhy;
