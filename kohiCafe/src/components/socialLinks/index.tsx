import "./styles.scss"
import { type IconType } from "react-icons";

type SocialLinkType = {
    icon: IconType;
    linkAddress : string;
}

export default function SocialLink({icon: Icon,  linkAddress} : SocialLinkType) {

    const handleLinkClick = () => {
        window.open(linkAddress, '_blank')
    }
  return (
    <div className="footer__social-icon" onClick={handleLinkClick}>
      <Icon />
    </div>
  );
}
