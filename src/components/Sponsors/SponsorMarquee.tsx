type MarqueeProps = {
    images: string[];
}

import star from "../../assets/star.svg"

export default function SponsorsMarquee({ images }: MarqueeProps) {
    const repeatedImages = [...images, ...images, ...images, ...images]; // Repeat images for continuous scroll effect
    return (
        <div className="sponsors__marquee">
            <div className="sponsors__marquee-track">
                {repeatedImages.map((image, index) => (
                    <>
                        <div className="sponsors__marquee-item" key={index}>
                            <img src={image} alt={`Sponsor ${index + 1}`} />

                        </div>
                        <img className="star" src={star} alt="Star" />
                    </>
                ))}
            </div>
        </div>

    )
}