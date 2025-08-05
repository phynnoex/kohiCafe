import Sponsors from "../../components/Sponsors";
import AboutSection from "../../layout/aboutSection";
import FeatureSection from "../../layout/feautureSection";
import Hero from "../../layout/heroSection";


export default function Home() {
    return (
        <div>
            <Hero></Hero>
            <Sponsors></Sponsors>
            <AboutSection></AboutSection>
            <FeatureSection></FeatureSection>
        </div>
    )
}