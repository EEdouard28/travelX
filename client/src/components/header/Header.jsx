import { Link } from "react-router-dom";
import "./Header.css";
import TravelXlogo from "../images/TravelX.png";

function Header() {
  return (
    <div>
      <Link to="/">
        <h1 className="appTitle">
          <img src={TravelXlogo} alt="TravelXlogo" height="150" width="400" />
        </h1>
      </Link>
    </div>
  );
}

export default Header;
