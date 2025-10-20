import MapComponent from "../mapContainer";
import "./styles.scss";

export default function AvailabilityDisplay() {
  return (
    <div className="availabilityDisplay">
      <MapComponent />
      <div className="hoursAside">
        <p className="hoursTitle">Open Hours</p>
        <hr />
        <ul className="hoursList">
          <li>
            <div>Monday</div> <div>8:00 - 18:00</div>
          </li>
          <li>
            <div>Tuesday</div> <div>8:00 - 18:00</div>
          </li>
          <li>
            <div>Wednesday</div> <div>8:00 - 18:00</div>
          </li>
          <li>
            <div>Thursday</div> <div>8:00 - 18:00</div>
          </li>
          <li>
            <div>Friday</div> <div>8:00 - 18:00</div>
          </li>
          <li>
            <div>Saturday</div> <div>9:00 - 22:00</div>
          </li>
          <li>
            <div>Sunday</div> <div>Closed</div>
          </li>
        </ul>
        <hr />
        <p className="location">
          <b>Queens store - </b>300 Queens Ave, London, ON N6B 1X2 <br /><hr />
          <b>Belton store - </b>1132 Adelaide Road North, London, ON N6A 4T7
        </p>
      </div>
    </div>
  );
}
