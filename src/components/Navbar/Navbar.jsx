import React, {useState} from 'react';
import Logo from "../../assets/logo.png";
import {NavLink,Link} from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { HiOutlineMenu } from "react-icons/hi";

// import { FaCaretDown } from "react-icons/fa";



export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Features",
    link: "/features",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm shadow-md border-b-2 border-black ">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4  font-bold text-2xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="" className="h-16 m:ml-4" />
              </Link>
              <span className="">Azul Corp</span>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 ">
                <li className="py-4 font-bold">
                  <NavLink to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="py-4 font-bold">
                  <NavLink to="/features" activeClassName="active">
                    Features
                  </NavLink>
                </li>
                <li className="py-4 font-bold">
                  <NavLink to="/about" activeClassName="active">
                    About
                  </NavLink>
                </li>
                <li className="py-4 font-bold">
                  <NavLink to="/contact" activeClassName="active">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="md:hidden block">
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className=" cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiOutlineMenu
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};


export default Navbar
