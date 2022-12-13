import { useEffect } from "react";
import gsap, { Expo } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapDownStagger = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "-100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.1,
        ease: Expo.easeIn,
        delay: delay,
      }
    );
  }, []);
};

export const useGsapHeroTextUpStagger = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.4,
        ease: Expo.easeOut,
        delay: delay,
      }
    );
  }, []);
};

export const useGsapFeatureShutterOneUnveil = (item, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        left: 0,
      },
      {
        left: "100%",
        duration: 1.3,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapFeatureShutterTwoUnveil = (item, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        left: 0,
      },
      {
        left: "-100%",
        duration: 1.3,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapFeatureShutterThreeUnveil = (item) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        top: 0,
      },
      {
        top: "100%",
        duration: 1.3,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
