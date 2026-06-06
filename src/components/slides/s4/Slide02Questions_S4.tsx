import ScaledSlide from "../../ScaledSlide";

const cards = [
  { num: "01", tag: "첫 제작의 감각", question: "직접 만들어보니 어땠나요?" },
  { num: "02", tag: "나만의 발행 주기", question: "얼마 주기로 올릴 수 있을 것 같나요?" },
  { num: "03", tag: "콘텐츠를 계속 만드는 이유", question: "어떤 가치를 만들고 싶나요?" },
];

const Slide02Questions_S4 = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">4회차</p>
    <h2 className="text-4xl font-bold text-foreground mb-16">
      세 가지 질문과 마침표
    </h2>
    <div className="flex-1 flex items-center justify-center gap-10">
      {cards.map((card) => (
        <div
          key={card.num}
          className="flex-1 bg-muted rounded-2xl overflow-hidden flex flex-col"
        >
          <div className="bg-background px-10 py-6 flex items-center gap-4">
            <span className="text-base font-bold text-slide-cream tracking-widest">{card.num}</span>
            <span className="text-base font-bold text-slide-cream tracking-wider">{card.tag}</span>
          </div>
          <div className="flex-1 p-12 flex items-center justify-center">
            <p className="text-2xl font-bold text-foreground text-center leading-relaxed">
              {card.question}
            </p>
          </div>
        </div>
      ))}
    </div>
  </ScaledSlide>
);

export default Slide02Questions_S4;