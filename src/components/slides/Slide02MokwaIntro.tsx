import ScaledSlide from "../ScaledSlide";

const introItems = [
  "인하우스 · 대행사 · 창업까지 거친 7년차 마케터",
  "마케팅 회사 '첫걸음 마케팅' 운영",
  "지속 가능한 콘텐츠 전략을 설계합니다",
];

const Slide02MokwaIntro = () => (
  <ScaledSlide>
    <div className="flex flex-col h-full">
      <p className="text-[28px] tracking-[0.2em] uppercase text-[hsl(var(--accent-foreground))]" style={{ color: "#fcf7ce" }}>
        모임장 소개
      </p>

      <div className="flex-1 flex items-center">
        <div className="flex flex-col gap-12">
          <div>
            <h1 className="text-[72px] font-bold text-foreground leading-tight">모과</h1>
            <p className="text-[32px] text-muted-foreground mt-2">마케터 · 첫걸음 마케팅 대표</p>
          </div>

          <div className="flex flex-col gap-5">
            {introItems.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: "#fcf7ce" }} />
                <p className="text-[28px] text-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-10 mt-4">
            <span className="text-[24px] text-muted-foreground">Instagram <span style={{ color: "#fcf7ce" }}>@mokwa</span></span>
            <span className="text-[24px] text-muted-foreground">YouTube <span style={{ color: "#fcf7ce" }}>나는모과</span></span>
          </div>
        </div>
      </div>
    </div>
  </ScaledSlide>
);

export default Slide02MokwaIntro;
