import ScaledSlide from "../../ScaledSlide";
import bookImage from "@/assets/s2-reference-book.jpg";

const Slide02Reference_S2 = () => (
  <ScaledSlide>
    <p className="text-lg text-slide-cream font-semibold mb-2 tracking-widest uppercase">DEFINITION</p>
    <h2 className="text-4xl font-bold text-foreground mb-10">
      레퍼런스: 새로움을 만드는 재배치, 재맥락화
    </h2>
    <div className="flex-1 flex flex-col items-center justify-center gap-8">
      <img
        src={bookImage}
        alt="에디토리얼 씽킹 책"
        className="max-h-[520px] w-auto rounded-xl object-contain shadow-2xl"
      />
      <p className="text-xl text-foreground/90 leading-relaxed text-center max-w-[1400px]">
        하늘 아래 새로운 것이 정말로 없는 과잉생산 시대에 독창성을 '처음부터 끝까지 새로운 것을 만들어내는 능력'이 아니라 '재배치를 통해 차이를 만들어 내는 능력'으로 봐야 한다.
      </p>
    </div>
  </ScaledSlide>
);

export default Slide02Reference_S2;