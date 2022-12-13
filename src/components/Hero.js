import React, { useRef } from "react";
import { useGsapHeroTextUpStagger } from "../hooks/gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const heroText1Ref = useRef(null);
  const heroText2Ref = useRef(null);
  const heroBtnRef = useRef(null);
  const heroTextArr = [heroText1Ref, heroText2Ref, heroBtnRef];

  useGsapHeroTextUpStagger(heroTextArr, 1.5);

  return (
    <section
      className='hero'
      ref={heroRef}
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1637947582297-24ccbef1bd19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1281&q=80')",
      }}
    >
      <div className='hero-content wrapper'>
        <h1 className='ethereal' ref={heroText1Ref}>
          war is
        </h1>
        <h1 className='canvas' ref={heroText2Ref}>
          Coming !
        </h1>
        <button className='hero-btn' ref={heroBtnRef}>
          Be Ready
        </button>
      </div>
    </section>
  );
};

export default Hero;
