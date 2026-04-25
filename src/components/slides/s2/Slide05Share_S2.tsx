import ScaledSlide from "../../ScaledSlide";

const steps = [
  { step: "01", title: "어떤 계정인가요?" },
  { step: "02", title: "왜 이 계정을 선택했나요?" },
  { step: "03", title: "이 계정이 잘 되는 이유는 뭘까요?" },
];

const Slide05Share_S2 = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">레퍼런스 발표</p>
    <h2 className="text-4xl font-bold text-foreground mb-3">
      찾아온 계정을 소개해주세요
    </h2>
    <p className="text-xl text-muted-foreground mb-12">
      각자 2-3개 계정을 가지고 왔죠? 하나씩 이야기해봐요.
    </p>
    <div className="flex-1 flex flex-col justify-center gap-6">
      {steps.map((s) => (
        <div key={s.step} className="bg-slide-cream rounded-2xl px-12 py-8">
          <p className="text-2xl font-bold text-background">{s.step}. {s.title}</p>
        </div>
      ))}
    </div>
  </ScaledSlide>
);

export default Slide05Share_S2;