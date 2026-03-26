import ScaledSlide from "../ScaledSlide";

const sections = [
  {
    num: "①",
    label: "좋아하는 일",
    items: [
      "퇴근 후 자연스럽게 손이 가는 것은?",
      "돈 안 받아도 몇 시간이고 할 수 있는 일은?",
      "친구한테 신나서 이야기한 적 있는 주제는?",
      "남들이 시키지 않아도 매일 하는 것은?",
    ],
  },
  {
    num: "②",
    label: "잘하는 일",
    items: [
      "주변에서 자주 물어보는 것은?",
      "설명하면 다들 '어, 그렇구나!' 하는 분야는?",
      "1시간 동안 거뜬히 이야기할 수 있는 주제는?",
      "시간이나 돈을 꾸준히 투자해온 분야는?",
    ],
  },
  {
    num: "③",
    label: "돈을 벌 수 있는 일",
    items: [
      "나와 비슷한 걸로 이미 돈 버는 사람은?",
      "내 지식·경험에 기꺼이 돈을 낼 사람은?",
      "강의·컨설팅·제품 중 연결될 수 있는 형태는?",
      "지금 내가 하는 일 중 돈이 되는 것은?",
    ],
  },
  {
    num: "④",
    label: "세상에 필요한 일",
    items: [
      "내가 당연히 아는데 모르는 사람이 많은 것은?",
      "주변에서 나한테 조언을 구하는 주제는?",
      "내가 해결해줄 수 있는 누군가의 불편함은?",
      "비슷한 고민을 하는 사람들이 찾는 정보는?",
    ],
  },
];

const Slide08QuestionGuide = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">Question Guide</p>
    <h2 className="text-3xl font-bold text-foreground mb-8">
      항목별 질문 가이드 — 막막하다면 이 질문들로 시작해보세요
    </h2>
    <div className="flex-1 grid grid-cols-2 gap-6">
      {sections.map((s) => (
        <div key={s.label} className="bg-secondary rounded-2xl p-7">
          <p className="text-xl font-bold text-slide-cream mb-4">
            {s.num} {s.label}
          </p>
          <ul className="space-y-2">
            {s.items.map((item, i) => (
              <li key={i} className="text-base text-foreground/90 flex items-start gap-2">
                <span className="text-slide-cream mt-1">·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </ScaledSlide>
);

export default Slide08QuestionGuide;
