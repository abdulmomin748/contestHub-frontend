import Container from "../Container";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/images/placeholder.jpg";
import logo from "../../../assets/images/logo-flat.png";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-contests">All Contests</NavLink>
      </li>
      <li>
        <NavLink to="/support">Support</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/privacy-policy">Privacy Policy</NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed w-full bg-white z-100 shadow-sm">
      <div className="py-4 ">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Link to="/">
              <img src={logo} alt="logo" width="100" height="100" />
            </Link>
            <ul className="hidden lg:flex menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
              {navLinks}
            </ul>
            {/* Dropdown Menu */}
            <div className="relative">
              <div className="flex flex-row items-center gap-3">
                {/* Dropdown btn */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-4 md:py-1 md:px-2 border border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                  <AiOutlineMenu />
                  <div className="hidden md:block">
                    {/* Avatar */}
                    <img
                      className="rounded-full"
                      referrerPolicy="no-referrer"
                      src={user && user.photoURL ? user.photoURL : avatarImg}
                      alt="profile"
                      height="30"
                      width="30"
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[60vw] md:w-[20vw] bg-white overflow-hidden right-0 top-12 text-sm">
                  <div className="flex flex-col cursor-pointer">
                    <ul className="flex w-full lg:hidden menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                      {navLinks}
                    </ul>
                    <hr />
                    {user ? (
                      <div className="px-5 py-2">
                        <p className=""></p>
                        <Link
                          to="/dashboard/profile"
                          className="px-4  italic flex items-center py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          <FaRegUserCircle />
                          {user.displayName}
                        </Link>
                        <Link
                          to="/dashboard"
                          className="px-4 flex items-center py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          <RxDashboard />
                          Dashboard
                        </Link>
                        <div
                          onClick={logOut}
                          className="px-4 py-3 flex items-center hover:bg-neutral-100 transition font-semibold cursor-pointer"
                        >
                          <IoIosLogOut />
                          Logout
                        </div>
                      </div>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
