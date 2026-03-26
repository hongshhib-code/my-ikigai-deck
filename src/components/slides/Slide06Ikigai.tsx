import ScaledSlide from "../ScaledSlide";

const Slide06Ikigai = () => (
  <ScaledSlide>
    <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
      이키가이(Ikigai) 벤다이어그램
    </h2>
    <p className="text-xl text-muted-foreground text-center mb-4">나만의 콘텐츠 교차점 찾기</p>
    <div className="flex-1 flex items-center justify-center">
      <svg viewBox="0 0 600 600" width="700" height="700">
        {/* Four overlapping translucent circles */}
        <circle cx="230" cy="230" r="170" fill="hsl(53, 90%, 89.6%)" opacity="0.12" stroke="hsl(53, 90%, 89.6%)" strokeWidth="1.5" />
        <circle cx="370" cy="230" r="170" fill="hsl(53, 90%, 89.6%)" opacity="0.12" stroke="hsl(53, 90%, 89.6%)" strokeWidth="1.5" />
        <circle cx="370" cy="370" r="170" fill="hsl(53, 90%, 89.6%)" opacity="0.12" stroke="hsl(53, 90%, 89.6%)" strokeWidth="1.5" />
        <circle cx="230" cy="370" r="170" fill="hsl(53, 90%, 89.6%)" opacity="0.12" stroke="hsl(53, 90%, 89.6%)" strokeWidth="1.5" />

        {/* Center cream circle */}
        <circle cx="300" cy="300" r="55" fill="hsl(53, 90%, 89.6%)" opacity="0.92" />
        <text x="300" y="295" textAnchor="middle" fill="#2A2A2A" fontSize="15" fontWeight="700">나만의</text>
        <text x="300" y="315" textAnchor="middle" fill="#2A2A2A" fontSize="15" fontWeight="700">콘텐츠</text>

        {/* Labels inside each circle center */}
        <text x="170" y="165" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">내가</text>
        <text x="170" y="185" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">좋아하는 것</text>

        <text x="430" y="165" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">내가</text>
        <text x="430" y="185" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">잘하는 것</text>

        <text x="430" y="430" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">돈을 벌 수</text>
        <text x="430" y="450" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">있는 것</text>

        <text x="170" y="430" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">세상에</text>
        <text x="170" y="450" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">필요한 것</text>
      </svg>
    </div>
  </ScaledSlide>
);

export default Slide06Ikigai;
