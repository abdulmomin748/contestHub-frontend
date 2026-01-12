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
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/all-contests">All Contests</NavLink></li>
      <li><NavLink to="/support">Support</NavLink></li>
      <li><NavLink to="/about-us">About Us</NavLink></li>
      <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
    </>
  );

  return (
    <div className="fixed w-full bg-white z-50 shadow-sm">
      <Container>
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="logo" className="w-24" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex menu menu-horizontal gap-2">
            {navLinks}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 border rounded-full"
            >
              <AiOutlineMenu size={20} />
            </button>

            {/* Avatar */}
            <img
              className="hidden lg:block w-8 h-8 rounded-full"
              src={user?.photoURL || avatarImg}
              alt="profile"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-md rounded-lg p-4">
            <ul
              onClick={() => setIsOpen(false)}
              className="menu menu-vertical gap-2"
            >
              {navLinks}

              <hr />

              {user ? (
                <>
                  <li>
                    <Link to="/dashboard/profile">
                      <FaRegUserCircle /> {user.displayName}
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard">
                      <RxDashboard /> Dashboard
                    </Link>
                  </li>
                  <li onClick={logOut}>
                    <span className="flex items-center gap-2">
                      <IoIosLogOut /> Logout
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/signup">Sign Up</Link></li>
                </>
              )}
            </ul>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
