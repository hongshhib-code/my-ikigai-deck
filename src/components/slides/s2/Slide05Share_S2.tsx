import ScaledSlide from "../../ScaledSlide";

const steps = [
  { step: "①", title: "어떤 계정인가요?" },
  { step: "②", title: "왜 이 계정을 선택했나요?" },
  { step: "③", title: "이 계정이 잘 되는 이유는 뭘까요?" },
];

const Slide05Share_S2 = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">SHARE</p>
    <h2 className="text-4xl font-bold text-foreground mb-12">
      찾아온 계정을 소개해주세요
    </h2>
    <div className="flex-1 flex items-center justify-center">
      <div className="grid grid-cols-3 gap-10 w-full">
        {steps.map((s) => (
          <div
            key={s.step}
            className="aspect-square bg-slide-cream rounded-full flex flex-col items-center justify-center text-center px-8 gap-4"
          >
            <p className="text-6xl font-bold text-background">{s.step}</p>
            <p className="text-2xl font-bold text-background leading-snug">{s.title}</p>
          </div>
        ))}
      </div>
    </div>
  </ScaledSlide>
);

export default Slide05Share_S2;