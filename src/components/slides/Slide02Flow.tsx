import ScaledSlide from "../ScaledSlide";

const items = [
  { num: "01", title: "자기소개 / Start Why", desc: "내가 SNS를 시작하고 싶은 진짜 이유는?" },
  { num: "02", title: "Deep Dive", desc: "몇 시간이고 지치지 않고 즐겁게 이야기할 수 있는 주제는?" },
  { num: "03", title: "Breakthrough", desc: "콘텐츠 시작을 가장 강하게 가로막는 걸림돌은?" },
];

const Slide02Flow = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">Today's Flow</p>
    <h2 className="text-4xl font-bold text-foreground mb-16">오늘 함께할 3가지</h2>
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

export default Slide02Flow;
