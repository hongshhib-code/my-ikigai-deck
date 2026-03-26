import ScaledSlide from "../ScaledSlide";

const steps = [
  {
    step: "STEP 1",
    title: "인터뷰 → 이키가이 채우기 (각 20분)",
    lines: [
      "A가 질문 가이드를 보며 B에게 질문 → B의 벤다이어그램 작성",
      "역할을 바꿔 반복 (B → A)",
    ],
  },
  {
    step: "STEP 2",
    title: "상대방의 이키가이를 대신 발표",
    lines: [
      "A가 B의 이키가이를 읽어줌",
      "B가 A의 이키가이를 읽어줌",
    ],
  },
  {
    step: "STEP 3",
    title: "본인 추가 설명 + 포맷 결정",
    lines: [
      "발표 후 본인이 추가 · 수정 설명",
      "모과가 함께 포맷 제안 (릴스 · 쓰레드 · 블로그 등)",
    ],
  },
];

const Slide09PairInterview = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">Pair Interview</p>
    <h2 className="text-4xl font-bold text-foreground mb-14">
      짝 인터뷰 — 내 짝의 이키가이를 채워주세요
    </h2>
    <div className="flex-1 flex flex-col justify-center gap-10">
      {steps.map((s) => (
        <div key={s.step} className="flex items-start gap-8">
          <span className="text-2xl font-bold text-slide-cream whitespace-nowrap">{s.step}</span>
          <div>
            <p className="text-2xl font-bold text-foreground mb-2">{s.title}</p>
            {s.lines.map((line, i) => (
              <p key={i} className="text-xl text-muted-foreground">{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </ScaledSlide>
);

export default Slide09PairInterview;
