import Wrapper from "./Wrapper";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <a href="/#" className="footer__logo">
          Rasulov Blog
        </a>
        <ul className="permalinks">
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/fazliddin-rasulov/"
            target="blank"
          >
            <FiLinkedin />
          </a>
          <a href="https://www.instagram.com/fazliddinrasulov1/" target="blank">
            <FiInstagram />
          </a>
          <a href="https://t.me/fazliddinrasulov/" target="blank">
            <FaTelegramPlane />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Rasulov. All rights reserved</small>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
