import { Link } from "react-router-dom";
import "./styles.scss";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div><img src={logo} alt="" /></div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
