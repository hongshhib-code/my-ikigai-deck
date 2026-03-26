import ScaledSlide from "../ScaledSlide";

const items = [
  "누군가 물어봤을 때 신이 나서 설명하는 것",
  "유튜브 · 책 · 글에서 자주 검색하는 것",
  "시간 가는 줄 모르고 빠져드는 것",
  "주변에서 자주 조언을 구하는 것",
];

const Slide04DeepDive = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">Deep Dive</p>
    <h2 className="text-4xl font-bold text-foreground mb-16">
      몇 시간이고 지치지 않고 즐겁게 이야기할 수 있는 주제는?
    </h2>
    <div className="flex-1 flex flex-col justify-center gap-10 max-w-[1400px]">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-6">
          <span className="w-3 h-3 rounded-full bg-slide-cream shrink-0" />
          <p className="text-2xl text-foreground">{item}</p>
        </div>
      ))}
    </div>
  </ScaledSlide>
);

export default Slide04DeepDive;
