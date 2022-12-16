import { useRef } from "react";
import { NavLink } from "react-router-dom";
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

  const navActiveStyle = ({ isActive }) => {
    return { color: isActive ? "var(--color-dark)" : null };
  };

  return (
    <nav className='navbar'>
      <div className='nav-content wrapper'>
        <div className='logo' ref={logoRef}>
          <NavLink to='/'>
            <h2>armour</h2>
          </NavLink>
        </div>
        <ul className='links'>
          <li className='link' ref={li1}>
            <NavLink to='/featured' style={navActiveStyle}>
              Featured
            </NavLink>
          </li>
          <li className='link' ref={li2}>
            <NavLink to='/about' style={navActiveStyle}>
              About
            </NavLink>
          </li>
          <li className='link' ref={li3}>
            <NavLink to='/gallery' style={navActiveStyle}>
              Gallery
            </NavLink>
          </li>
          <li className='link' ref={li4}>
            <NavLink to='/blog' style={navActiveStyle}>
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
