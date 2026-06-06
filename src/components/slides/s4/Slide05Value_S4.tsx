import ScaledSlide from "../../ScaledSlide";

const cards = [
  { title: "연결", sub: "나를 증명하고, 비슷한 결의 사람들과 밀도 높은 커뮤니티 형성" },
  { title: "수익", sub: "퍼스널 브랜딩을 넘어 구체적인 비즈니스 모델과 현금 흐름 창출" },
  { title: "커리어", sub: "텍스트와 이미지로 증명하는 가장 확실한 포트폴리오 자산화" },
];

const Slide05Value_S4 = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">콘텐츠를 계속 만드는 이유</p>
    <h2 className="text-4xl font-bold text-foreground mb-16">내 콘텐츠로 만들고 싶은 것</h2>
    <div className="flex-1 flex flex-col justify-center gap-10">
      <div className="flex items-stretch justify-center gap-10">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex-1 bg-slide-cream rounded-2xl p-12 flex flex-col items-center justify-center text-center gap-4 min-h-[340px]"
          >
            <p className="text-3xl font-bold text-background">{card.title}</p>
            <p className="text-xl text-background/75 leading-relaxed">{card.sub}</p>
          </div>
        ))}
      </div>
      <p className="text-lg text-muted-foreground italic text-center">
        정답은 없습니다. 지금 드는 생각을 꺼내보세요.
      </p>
    </div>
  </ScaledSlide>
);

export default Slide05Value_S4;