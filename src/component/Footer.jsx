import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#160724] text-white py-6 mt-0">
      <div className="container mx-auto flex flex-col items-center space-y-2">
        {/* Navigation Links */}
        {/* <nav className="flex space-x-6">
          <a  className="hover:text-purple-400"> <Link to={'/home'}>Home</Link></a>
          <a  className="hover:text-purple-400"><Link to={'/'}>About</Link></a>
          <a className="hover:text-purple-400"> <Link to={'/projects'}>Projects</Link></a>
          <a className="hover:text-purple-400"><Link to={'/contact'}>Contact</Link></a>
        </nav>*/}

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/masooma-atayee-350611302"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className="hover:text-purple-400" />
          </a>
          <a
            href="https://github.com/masooma690"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} className="hover:text-purple-400" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61566201606615"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} className="hover:text-purple-400" />
          </a>
        </div>

        {/* Address and Email Section */}
        <div className="flex space-x-6">
          {/* Address */}
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt size={18} />
            <p className="text-sm text-gray-400">
              Kabul, Afghanistan
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-1">
            <FaEnvelope size={18} />
            <a
              href="mailto:masooma.atayee222@gmail.com"
              className="text-sm text-gray-400 hover:text-purple-400"
            >
              masooma.atayee222@gmail.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Masooma Atayee
        </p>
      </div>
    </footer>
  );
};

export default Footer;
