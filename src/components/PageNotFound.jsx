import { Link } from "react-router-dom";
import { dataStore } from "../data/data";
import NavCom from "./NavCom";

function PageNotFound() {


  const imageUrl = dataStore[2]?.fields?.images[0]?.fields?.file?.url;

  const styles = {
    backgroundImage: `url(${imageUrl})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };

  return (
    <div className="dynamic-con">
      <NavCom />

      <div className="backg-pic" style={styles}>
        <div className="backg">
          <div className="backg-p">
            <div className="first-p">
              <h1> PAGE NOT FOUND (404) </h1>
            </div>
            <div className="second-p">
              <Link to="/rooms">Back to Rooms</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
