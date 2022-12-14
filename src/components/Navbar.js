import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsapDownStagger } from "../hooks/gsap";

const Navbar = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const li4 = useRef(null);
  const logoRef = useRef(null);

  const liArr = [li1, li2, li3, li4];
  const logoArr = [logoRef];

  useGsapDownStagger(liArr, 0.8);
  useGsapDownStagger(logoArr, 1.3);

  return (
    <nav className='navbar'>
      <div className='nav-content wrapper'>
        <div className='logo' ref={logoRef}>
          <Link to='/'>
            <h2>armour</h2>
          </Link>
        </div>
        <ul className='links'>
          <li className='link' ref={li1}>
            <Link to='/featured'>Featured</Link>
          </li>
          <li className='link' ref={li2}>
            <Link to='/about'>About</Link>
          </li>
          <li className='link' ref={li3}>
            <Link to='/gallery'>Gallery</Link>
          </li>
          <li className='link' ref={li4}>
            <Link to='/blog'>Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
