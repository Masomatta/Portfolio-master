import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";


const Footer = () => {
  return(
  <footer className="bg-[#160724] text-white py-6 mt-0">
    <div className="container mx-auto flex flex-col items-center px-4 sm:px-2">
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
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-4">
        {/* Address */}
        <div className="flex items-center space-x-2 justify-center sm:justify-start">
          <FaMapMarkerAlt size={18} />
          <p className="text-sm text-gray-400">
            Kabul, Afghanistan
          </p>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-1 justify-center sm:justify-start">
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
      <p className="text-sm text-gray-400 mt-3">
        © {new Date().getFullYear()} Masooma Atayee
      </p>
    </div>
  </footer>

  );
};

export default Footer;
