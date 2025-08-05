import Button from "../../components/button";
import "./styles.scss";
import heroImage from "../../assets/japanese-man-making-coffee-restaurant (1) 1.png"

export default function Hero() {
  return (
    <div className="heroSection">
      <div className="heroDescription">
        <h1>Kanpai & Coffee! Bold Japanese Brews Await</h1>
        <p>
          Bold brews, smooth sips, and a touch of Japan in every cup! From
          hand-dripped coffee to creamy matcha, we’re serving up tradition with
          a fun twist. Kanpai to great coffee!
        </p>
        <div className="buttonContainer">
          {" "}
          <Button buttonType="secondary" text="About us" onClick={() => {}} />
            <Button buttonType="primary" text="Order now" onClick={() => {}} />
        </div>
      </div>
      <div className="heroImage">
        <div className="imageContainer">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
}
