import Carousel from "../../components/carouselCards"
import "./styles.scss"

export default function FeatureSection() {
    return(
        <div className="featureSection">
            <h1 className="headingText">
                Feautured Items
            </h1>
            <Carousel></Carousel>
        </div>
    )
}