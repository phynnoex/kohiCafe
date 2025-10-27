import "./styles.scss";
import aboutImage from "../../assets/shop-image.png";

export default function AboutSection() {
  return (
    <div className="aboutSection">
      <div className="aboutContainer">
        <h1>About us </h1>
        <div className="aboutDescription">
          {/* <div className="leftDescription">
            <img src="" alt="" />
            <p>Our journey began with a passion for Japanese coffee culture and a desire to share its rich traditions with our community. Inspired by the precision and artistry of Japanese brewing techniques, </p>
          </div>
          <div className="rightDescription"></div> */}
          <div className="img-container" ></div>
          <p className="descriptionText">
            <span>O</span>ur journey began with a passion for Japanese coffee culture and a
            desire to share its rich traditions with our community. Inspired by
            the precision and artistry of Japanese brewing techniques, we set
            out to create a space where every cup tells a story. At our café, we
            take pride in sourcing high-quality beans, crafting hand-dripped
            pour-overs, and serving beloved Japanese favorites like matcha
            lattes and hojicha. <br /> <br />But beyond the coffee, our mission is simple to
            create a warm, welcoming space where people can connect, unwind, and
            experience a little piece of Japan. Whether you're a coffee
            enthusiast or just looking for a cozy spot to relax, we invite you
            to join us for a cup and be part of our story.
          </p>
        </div>
      </div>
    </div>
  );
}
