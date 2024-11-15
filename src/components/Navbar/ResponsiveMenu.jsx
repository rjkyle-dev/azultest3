import React from "react";
import { NavbarLinks } from "./Navbar";
import { Link } from "react-router-dom";
import Profile from "../../assets/profile.jpg";
import Logo from "../../assets/logo.png";


const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}>
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <img
            src={Profile}
            alt=""
            className="h-14 w-14 object-cover rounded-full"
          />
          <div className="cursor-pointer">
            <h1>Kyle Dev</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {NavbarLinks.map((data) => (
              <li>
                <Link
                  to={data.link}
                  onClick={() => setShowMenu(false)}
                  className="mb-5 inline-block">
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer relative">
        <h1 className="text-sm flex">
          <span className="flex items-center text-2xl">
            © <img src={Logo} className="h-9 ml-2" alt="" />
            <a
              href="https://www.facebook.com/profile.php?id=61568479808035&mibextid=ZbWKwL
"
              className="ml-2 text-sm font-bold font-serif">
              {" "}
              AZUL CORP
            </a>{" "}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
