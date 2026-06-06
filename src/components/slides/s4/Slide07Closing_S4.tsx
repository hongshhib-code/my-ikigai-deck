import ScaledSlide from "../../ScaledSlide";

const lines = [
  "완벽한 기획보다 불완전한 실행이 트래픽을 만든다.",
  "나만의 속도를 찾는 것이 가장 빠른 지름길이다.",
  "가치를 명확히 정의한 콘텐츠는 결코 사라지지 않는다.",
];

const Slide07Closing_S4 = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">수료</p>
    <h2 className="text-4xl font-bold text-foreground mb-16">
      첫걸음의 완성, 그리고 새로운 시작
    </h2>
    <div className="flex-1 flex flex-col justify-center gap-6">
      {lines.map((line, i) => (
        <div key={i} className="bg-muted rounded-2xl px-12 py-10 w-full">
          <p className="text-2xl text-foreground text-center leading-relaxed">{line}</p>
        </div>
      ))}
    </div>
  </ScaledSlide>
);

export default Slide07Closing_S4;