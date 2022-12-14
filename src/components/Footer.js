import { useRef } from "react";
import { useGsapFooterHeadline } from "../hooks/gsap";

const Footer = () => {
  const footerRef = useRef(null);
  const footerHeadlineRef = useRef(null);

  useGsapFooterHeadline(footerHeadlineRef, footerRef);
  return (
    <footer className='footer wrapper' ref={footerRef}>
      <h1 ref={footerHeadlineRef}>thank you</h1>
      <p>
        © {new Date().getFullYear()} Armour by Masud Rana Shawon. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
