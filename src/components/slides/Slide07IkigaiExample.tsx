import ScaledSlide from "../ScaledSlide";

const sections = [
  {
    label: "내가 좋아하는 것",
    items: "예쁜 것이라면 다 좋아함 · 패션/뷰티 덕후 · 현대미술 보는 것 · 정성껏 만든 음식 · 주인의 개성이 담긴 공간 · 웨이트 트레이닝",
  },
  {
    label: "내가 잘하는 것",
    items: "설명/강의/1:1 소통 · 개인 능력 파악 후 역할 배분 · 전체 그림 그리기/기획/전략 · 미감을 활용한 시각적 작업 · 마케팅 기획/실행 · 계획 수립과 실행력 · 패션 센스/운동 실력",
  },
  {
    label: "돈을 벌 수 있는 것",
    items: "마케팅 컨설팅 · 콘텐츠 전략 설계 · 1인 사업자 대상 SNS 코칭/강의 · 브랜드 마케팅 대행",
  },
  {
    label: "세상에 필요한 것",
    items: "방향을 잡지 못한 1인 사업자/소상공인을 위한 마케팅 전략 · 감 대신 체계로 운영하는 브랜드 만들기 · 개인 크리에이터의 SNS 셀프 브랜딩 · 솔로프리너를 위한 나다운 마케팅",
  },
];

const Slide07IkigaiExample = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">Ikigai — 모과 버전</p>
    <h2 className="text-3xl font-bold text-foreground mb-10">
      이키가이(Ikigai) 벤다이어그램 — 나만의 콘텐츠 교차점 찾기
    </h2>
    <div className="flex-1 grid grid-cols-2 gap-6">
      {sections.map((s) => (
        <div key={s.label} className="bg-slide-cream rounded-2xl p-8">
          <p className="text-xl font-bold text-accent-foreground mb-3">{s.label}</p>
          <p className="text-base text-accent-foreground/80 leading-relaxed">{s.items}</p>
        </div>
      ))}
    </div>
  </ScaledSlide>
);

export default Slide07IkigaiExample;
