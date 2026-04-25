import ScaledSlide from "../../ScaledSlide";

const Slide04FarField_S2 = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">다른 분야 레퍼런스</p>
    <h2 className="text-4xl font-bold text-foreground mb-12">
      멀수록 더 새롭다
    </h2>
    <div className="flex-1 flex flex-col justify-center gap-8 max-w-[1500px]">
      <div className="bg-slide-cream rounded-2xl px-14 py-12">
        <p className="text-2xl text-background leading-relaxed mb-4">
          "같은 분야 안의 유추보다 먼 분야의 유추가 더 독창적인 아이디어를 만든다"
        </p>
        <p className="text-base italic text-background/60">
          — Analogical Thinking & Innovation, MIT Sloan Management Review
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-slide-cream/90 rounded-2xl px-10 py-7">
          <p className="text-xl text-background font-medium">뷰티 콘텐츠를 만든다면 → F&B 레퍼런스</p>
        </div>
        <div className="bg-slide-cream/90 rounded-2xl px-10 py-7">
          <p className="text-xl text-background font-medium">교육 콘텐츠를 만든다면 → 패션 레퍼런스</p>
        </div>
      </div>
    </div>
  </ScaledSlide>
);

export default Slide04FarField_S2;