import { Link } from "react-router";
import logo from "../../../assets/images/logo-flat.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="border-gray-400 border-t footer footer-horizontal footer-center bg-white p-10 text-black"> 
      <nav className="grid grid-flow-col gap-4   list-none ">
        <li className="link link-hover">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="link link-hover">
          <Link to={"all-contests"}>All Contests</Link>
        </li>
        <li className="link link-hover">
          <Link to={"support"}>Support</Link>
        </li>
        <li className="link link-hover">
          <Link to={"about-us"}>About Us</Link>
        </li>
      </nav>
      <aside>
        <Link to={"/"}>
          <img src={logo} alt="logo" width="100" height="100" />
        </Link>
      </aside>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} ContestHub- All right reserved
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link>
            <FaFacebook className="text-2xl text-blue-950" />
          </Link>
          <Link>
            <FaLinkedin className="text-2xl text-blue-950" />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
