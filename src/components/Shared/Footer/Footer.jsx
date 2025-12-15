import { Link } from "react-router";
import logo from "../../../assets/images/logo-flat.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-white p-10 text-black">
      <aside>
        <img src={logo} alt="" srcset="" />
        <p>
          Copyright © {new Date().getFullYear()} ContestHub- All right reserved
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link>
            <FaFacebook  className="text-2xl text-blue-950"/>
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
