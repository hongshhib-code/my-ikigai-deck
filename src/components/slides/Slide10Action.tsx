import ScaledSlide from "../ScaledSlide";

const Slide10Action = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">Action</p>
    <h2 className="text-4xl font-bold text-foreground mb-16">
      기획의 실전 — 지금 바로, 첫 번째 기획안 완성하기
    </h2>
    <div className="flex-1 flex flex-col justify-center gap-10 max-w-[1400px]">
      <div className="bg-slide-cream rounded-2xl p-12">
        <p className="text-xl font-bold text-accent-foreground mb-2">STEP 1</p>
        <p className="text-2xl font-bold text-accent-foreground mb-3">계정 소개글 작성하기</p>
        <p className="text-xl text-accent-foreground/70">이키가이에서 찾은 나를 표현하기</p>
      </div>
      <div className="bg-slide-cream rounded-2xl p-12">
        <p className="text-xl font-bold text-accent-foreground mb-2">STEP 2</p>
        <p className="text-2xl font-bold text-accent-foreground mb-3">내 계정에 올라갈 콘텐츠 주제 3개 정하기</p>
        <p className="text-xl text-accent-foreground/70">소개글의 나라면 어떤 콘텐츠를 올릴까?</p>
      </div>
    </div>
  </ScaledSlide>
);

export default Slide10Action;
