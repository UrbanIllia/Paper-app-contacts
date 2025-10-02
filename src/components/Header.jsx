import { Link, NavLink } from "react-router-dom";
import { MdOutlineContactPhone } from "react-icons/md";
import clsx from "clsx";
import NavInOut from "./NavInOut";
import NavLogOut from "./NavLogOut";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectorAuth";
import WellcomUser from "./WellcomUser";

const styleLinkNotActive =
  "font-semibold hover:text-red-500 transition rounded-2xl px-2";
const styleLinkActive = "shadow-lg shadow-black font-bold";

const styledLink = ({ isActive }) =>
  clsx(styleLinkNotActive, isActive && styleLinkActive);

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log("isLoggedIn:", isLoggedIn);
  return (
    <header
      className={clsx(
        "fixed top-5 flex w-full flex-row items-center justify-between rounded-md border-b-2 border-t-2 border-black bg-gray-100 px-[20px]",
        "sm:max-w-[375px] sm:px-[30px]",
        "md:max-w-[768px] md:px-[40px]",
        "lg:max-w-[1028px] lg:px-[80px]",
        "xl:max-w-[1440px] xl:px-[100px]",
      )}
    >
      <div className="transition-all duration-700 ease-in-out hover:rotate-[360deg] hover:scale-[1.15]">
        <Link to="/">
          <MdOutlineContactPhone size={38} />
        </Link>
      </div>
      {isLoggedIn && <WellcomUser />}
      <nav className="flex flex-row items-center justify-center gap-5">
        <ul className="flex flex-row gap-5">
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
        </ul>
        {isLoggedIn ? <NavLogOut /> : <NavInOut styledLink={styledLink} />}
      </nav>
    </header>
  );
};

export default Header;
