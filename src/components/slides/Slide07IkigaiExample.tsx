import ScaledSlide from "../ScaledSlide";

const Slide07IkigaiExample = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">Ikigai — 모과 버전</p>
    <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
      이키가이(Ikigai) 벤다이어그램
    </h2>
    <div className="flex-1 flex items-center justify-center relative">
      {/* Left-top text block */}
      <div className="absolute left-0 top-0 w-[340px] text-right pr-4 pt-2">
        <p className="text-lg font-bold text-slide-cream mb-2">좋아하는 것</p>
        <p className="text-base text-foreground/80 leading-relaxed">
          예쁜 것이라면 다 좋아함<br />
          (물건·작품·사람)<br />
          패션·뷰티 덕후<br />
          현대미술 보는 것<br />
          주인의 개성이 담긴 공간<br />
          웨이트 트레이닝
        </p>
      </div>

      {/* Right-top text block */}
      <div className="absolute right-0 top-0 w-[360px] pl-4 pt-2">
        <p className="text-lg font-bold text-slide-cream mb-2">잘하는 것</p>
        <p className="text-base text-foreground/80 leading-relaxed">
          설명·강의·1:1 소통<br />
          개인 능력 파악 후 역할 배분<br />
          전체 그림 그리기·기획·전략<br />
          미감을 활용한 시각적 작업<br />
          마케팅 기획·실행 / 계획 수립과 실행력<br />
          패션 센스·운동 실력
        </p>
      </div>

      {/* Left-bottom text block */}
      <div className="absolute left-0 bottom-0 w-[360px] text-right pr-4 pb-2">
        <p className="text-lg font-bold text-slide-cream mb-2">세상에 필요한 것</p>
        <p className="text-base text-foreground/80 leading-relaxed">
          방향을 잡지 못한 1인 사업자·소상공인을 위한<br />
          마케팅 전략<br />
          감 대신 체계로 운영하는 브랜드 만들기<br />
          개인 크리에이터의 SNS 셀프 브랜딩<br />
          솔로프리너를 위한 나다운 마케팅
        </p>
      </div>

      {/* Right-bottom text block */}
      <div className="absolute right-0 bottom-0 w-[340px] pl-4 pb-2">
        <p className="text-lg font-bold text-slide-cream mb-2">돈을 벌 수 있는 것</p>
        <p className="text-base text-foreground/80 leading-relaxed">
          마케팅 컨설팅 · 콘텐츠 전략 설계<br />
          1인 사업자 대상 SNS 코칭·강의<br />
          브랜드 마케팅 대행
        </p>
      </div>

      {/* Venn Diagram — same size as Slide 6 */}
      <svg viewBox="0 0 600 600" width="700" height="700">
        <circle cx="230" cy="230" r="170" fill="hsl(53, 90%, 89.6%)" opacity="0.12" stroke="hsl(53, 90%, 89.6%)" strokeWidth="1.5" />
        <circle cx="370" cy="230" r="170" fill="hsl(53, 90%, 89.6%)" opacity="0.12" stroke="hsl(53, 90%, 89.6%)" strokeWidth="1.5" />
        <circle cx="370" cy="370" r="170" fill="hsl(53, 90%, 89.6%)" opacity="0.12" stroke="hsl(53, 90%, 89.6%)" strokeWidth="1.5" />
        <circle cx="230" cy="370" r="170" fill="hsl(53, 90%, 89.6%)" opacity="0.12" stroke="hsl(53, 90%, 89.6%)" strokeWidth="1.5" />

        <circle cx="300" cy="300" r="55" fill="hsl(53, 90%, 89.6%)" opacity="0.92" />
        <text x="300" y="295" textAnchor="middle" fill="#2A2A2A" fontSize="15" fontWeight="700">나만의</text>
        <text x="300" y="315" textAnchor="middle" fill="#2A2A2A" fontSize="15" fontWeight="700">콘텐츠</text>

        <text x="170" y="165" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">좋아하는 것</text>
        <text x="430" y="165" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">잘하는 것</text>
        <text x="430" y="445" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">돈을 벌 수 있는 것</text>
        <text x="170" y="445" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">세상에 필요한 것</text>
      </svg>
    </div>
  </ScaledSlide>
);

export default Slide07IkigaiExample;
