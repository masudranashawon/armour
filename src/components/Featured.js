import { useRef } from "react";
import {
  useGsapFeatureShutterOneUnveil,
  useGsapFeatureShutterTwoUnveil,
  useGsapFeatureShutterThreeUnveil,
} from "../hooks/gsap";

const Featured = () => {
  const featuredRef = useRef(null);
  const featureOneShutter = useRef(null);
  const featureTwoShutter = useRef(null);
  const featureThreeShutter = useRef(null);
  useGsapFeatureShutterOneUnveil(featureOneShutter, featuredRef);
  useGsapFeatureShutterTwoUnveil(featureTwoShutter, featureThreeShutter);
  useGsapFeatureShutterThreeUnveil(featureThreeShutter);

  return (
    <section className='featured wrapper' ref={featuredRef}>
      <h2 className='section-title'>Featured</h2>
      <div className='features'>
        <div className='feature-one'>
          <span className='feature-text'>Grey Jet Plane</span>
          <img
            src='https://images.pexels.com/photos/76971/fighter-jet-fighter-aircraft-f-16-falcon-aircraft-76971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Grey Jet Plane'
          />
          <span className='feature-one-shutter' ref={featureOneShutter}></span>
        </div>
        <div className='feature-two'>
          <span className='feature-text'>Military Vehicle</span>
          <img
            src='https://images.pexels.com/photos/2668654/pexels-photo-2668654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Military Vehicle Parked on Grass'
          />
          <span className='feature-two-shutter' ref={featureTwoShutter}></span>
        </div>
        <div className='feature-three'>
          <span className='feature-text'>Military Woman</span>
          <img
            src='https://images.pexels.com/photos/4964929/pexels-photo-4964929.jpeg?auto=compress&cs=tinysrgb&w=600emp'
            alt='A Woman in a Military Clothing Holding a Rifle'
          />
          <span
            className='feature-three-shutter'
            ref={featureThreeShutter}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;
