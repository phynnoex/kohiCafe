import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import "./styles.scss";
import logoImage from "../../assets/logo.png";
import { type IconType } from "react-icons";
import SocialLink from "../../components/socialLinks";

type SocialLinkType = {
  icon: IconType;
  linkAddress: string;
};

const socials: SocialLinkType[] = [
  { icon: FaFacebook, linkAddress: "www.google.com" },
  { icon: FaInstagram, linkAddress: "www.google.com" },
  { icon: FaXTwitter, linkAddress: "www.google.com" },
];

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__description">
        <div className="footer__links">
          <div className="footer__logo">
            <img src={logoImage} alt="" />
          </div>

          <div className="footer__social-container">
            {socials.map((social, index) => (
              <SocialLink
                key={index}
                icon={social.icon}
                linkAddress={social.linkAddress}
              />
            ))}
          </div>
        </div>

        <div className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="footer__nav-item">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="footer__nav-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer__application">
          <p className="footer__application-text">
            Wanna work with us <br /> Get in Touch
          </p>
          <Button buttonType="card" text="apply here" onClick={() => {}} />
        </div>
      </div>
      <div className="footer__copyright">
        <hr className="footer__horizontal-line" />
        <p className="footer__copyright-text">&copy; 2025 copyright</p>
      </div>
    </div>
  );
}
