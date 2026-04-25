import ScaledSlide from "../../ScaledSlide";

const Slide07Action_S2 = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">ACTION</p>
    <h2 className="text-4xl font-bold text-foreground mb-16">
      지금 바로, 두번째 기획안 작성하기
    </h2>
    <div className="flex-1 flex flex-col justify-center gap-10 max-w-[1400px]">
      <div className="bg-slide-cream rounded-2xl p-12">
        <p className="text-xl font-bold text-accent-foreground mb-2">STEP 1</p>
        <p className="text-2xl font-bold text-accent-foreground mb-3">레퍼런스에서 가져올 요소 1가지 정하기</p>
        <p className="text-xl text-accent-foreground/70">분석한 내용 중 내 다음 콘텐츠에 적용할 것 하나를 고른다</p>
      </div>
      <div className="bg-slide-cream rounded-2xl p-12">
        <p className="text-xl font-bold text-accent-foreground mb-2">STEP 2</p>
        <p className="text-2xl font-bold text-accent-foreground mb-3">다음 콘텐츠 기획안 작성하기</p>
        <p className="text-xl text-accent-foreground/70">주제 + 포맷 + 첫 문장(훅)까지 써본다</p>
      </div>
    </div>
  </ScaledSlide>
);

export default Slide07Action_S2;