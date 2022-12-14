import { useRef } from "react";
import {
  useGsapAboutHeading,
  useGsapAboutImageShutter,
  useGsapAboutItemDownStagger,
  useGsapAnsDetailsRef,
} from "../hooks/gsap";

const About = () => {
  const aboutHeadingRef = useRef(null);
  const aboutRef = useRef(null);
  const aboutContentRef = useRef(null);
  const aboutImageShutter = useRef(null);
  const aboutTextRef = useRef(null);
  const questionRef = useRef(null);
  const qusAnsRef = useRef(null);
  const ansDetailsRef = useRef(null);
  const aboutContentArr = [questionRef, qusAnsRef];

  useGsapAboutItemDownStagger(aboutContentArr, aboutContentRef);
  useGsapAboutHeading(aboutHeadingRef, aboutRef);
  useGsapAboutImageShutter(aboutImageShutter, aboutContentRef);
  useGsapAnsDetailsRef(ansDetailsRef, aboutContentRef);

  return (
    <section className='about wrapper' ref={aboutRef}>
      <h2 className='section-title'>About</h2>
      <p className='about-heading' ref={aboutHeadingRef}>
        WARCORPS IS AIMED AT PROVIDING SUPPORT FOR NATIONAL MILITARY FORCES
        LOCATED ACROSS THE GLOBE
      </p>
      <p className='about-tagline'>
        The national interests lie at the heart of our mission.
      </p>
      <div className='about-content' ref={aboutContentRef}>
        <div className='about-image'>
          <img
            src='https://images.pexels.com/photos/2859054/pexels-photo-2859054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='A army officer in uniform with all achivement badges'
          />
          <span className='about-image-shutter' ref={aboutImageShutter}></span>
        </div>
        <div className='about-text' ref={aboutTextRef}>
          <span className='question' ref={questionRef}>
            What is armour
          </span>
          <h3 className='qus-ans' ref={qusAnsRef}>
            Armour is an active sport and not for the faint of heart!
          </h3>
          <p className='ans-details' ref={ansDetailsRef}>
            Armour machinery often resembles real firearms, but the replicas
            shoot small plastic 6mm BBs. In its nature, airsoft is similar to
            first-person shooting video games, and it allows experiencing
            realistic battle and tactical scenario gameplay.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
