import ScaledSlide from "../ScaledSlide";

const cards = [
  { title: "완벽해야 한다", desc: "첫 게시물이 너무 부담스러워요" },
  { title: "뭘 올릴지 모르겠다", desc: "소재 · 주제가 없는 것 같아요" },
  { title: "나는 특별하지 않다", desc: "내 이야기를 누가 볼까요?" },
  { title: "시간이 없다", desc: "만들고 올리는 게 너무 힘들어요" },
];

const Slide05Breakthrough = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">Breakthrough</p>
    <h2 className="text-4xl font-bold text-foreground mb-14">
      콘텐츠 시작을 가장 강하게 가로막는 걸림돌은?
    </h2>
    <div className="flex-1 grid grid-cols-2 gap-8">
      {cards.map((card) => (
        <div key={card.title} className="bg-slide-cream rounded-2xl p-10 flex flex-col justify-center">
          <p className="text-2xl font-bold text-accent-foreground mb-3">{card.title}</p>
          <p className="text-xl text-accent-foreground/70">{card.desc}</p>
        </div>
      ))}
    </div>
    <p className="text-lg text-muted-foreground text-center mt-8">
      가장 공감되는 걸림돌에 손들어봐요.
    </p>
  </ScaledSlide>
);

export default Slide05Breakthrough;
