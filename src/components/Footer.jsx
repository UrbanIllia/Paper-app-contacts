import clsx from "clsx";
import React from "react";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectorAuth";
import NavLogOut from "./NavLogOut";
import NavInOut from "./NavInOut";

const styleLinkNotActive =
  "font-semibold hover:text-red-500 transition rounded-2xl px-2";
const styleLinkActive = "shadow-lg shadow-black font-bold";

const styledLink = ({ isActive }) =>
  clsx(styleLinkNotActive, isActive && styleLinkActive);

const Footer = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <footer
      className={clsx(
        "rounded-md border-b-2 border-t-2 border-black bg-gray-100 px-[20px] pb-[40px] pt-[20px]",
        "sm:max-w-[375px] sm:px-[30px]",
        "md:max-w-[768px] md:px-[40px]",
        "lg:max-w-[1028px] lg:px-[80px]",
        "xl:max-w-[1440px] xl:px-[100px]",
      )}
    >
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2">
          <div className="flex items-center">
            <Link>
              <MdOutlineRocketLaunch size={140} />
            </Link>
          </div>
          <nav>
            <ul className="mb-5 flex flex-col gap-5">
              <li>
                <NavLink to="/" className={styledLink}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacts" className={styledLink}>
                  Contacts
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/login" className={styledLink}>
                  Log IN
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className={styledLink}>
                  Register
                </NavLink>
              </li> */}
            </ul>
            {isLoggedIn ? <NavLogOut /> : <NavInOut styledLink={styledLink} />}
          </nav>
        </div>
        <div className="border-t-2 border-black pt-5">
          <p className="text-center text-sm">
            Copyrights © 2021 Shopdoc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
