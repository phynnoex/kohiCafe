import "./styles.scss"
import sponsor1 from "../../assets/66307.png"
import sponsor2 from "../../assets/663074.png"
import sponsor3 from "../../assets/663072.png"
import sponsor4 from "../../assets/663071.png"

import SponsorsMarquee from "./SponsorMarquee"

export default function Sponsors() {
    return (
        <div className="sponsorsContainer">
            <div className="left-fade"></div>
            <div className="right-fade"></div>

            <SponsorsMarquee images={[sponsor1, sponsor2, sponsor3, sponsor4]} />
        </div>
    )
}