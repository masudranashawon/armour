import { useRef } from "react";
import { useGsapDownStagger } from "../hooks/gsap";

const NotFound = ({ needFullHeight }) => {
  const errorFirst4Ref = useRef(null);
  const bombImgRef = useRef(null);
  const errorLast4Ref = useRef(null);
  const pageNotFoundRef = useRef(null);
  const error404Arr = [errorFirst4Ref, bombImgRef, errorLast4Ref];
  const pageNotFoundRefArr = [pageNotFoundRef];

  useGsapDownStagger(error404Arr, 1.8);
  useGsapDownStagger(pageNotFoundRefArr, 2.7);

  return (
    <section
      className={`${needFullHeight && "min-h-scrren"} not-found wrapper`}
    >
      <h1>
        <span ref={errorFirst4Ref}>4</span>

        <img
          ref={bombImgRef}
          src='https://www.clipartmax.com/png/full/109-1091966_here-we-go-bomb-icon.png'
          alt='Black Bomb vector'
        />

        <span ref={errorLast4Ref}>4</span>
      </h1>
      <p ref={pageNotFoundRef}> page Not Found</p>
    </section>
  );
};

export default NotFound;
