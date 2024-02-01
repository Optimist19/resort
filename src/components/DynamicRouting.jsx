// import React from 'react'

import { Link, useParams } from "react-router-dom/dist";

import { dataStore } from "../data/data";
import NavCom from "./NavCom";

function DynamicRouting() {
  const { id } = useParams();
  console.log(id);

  const data = dataStore.find((room) => room?.sys?.id === id);

  console.log(data);

  const imageUrl = data?.fields?.images[0]?.fields?.file?.url;
  console.log("Image URL:", imageUrl);

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
              <p>{data?.fields?.type} Deluxe Room</p>
            </div>
            <div className="second-p">
              <Link to="/rooms">Back to Rooms</Link>
            </div>
          </div>
        </div>
      </div>

      <main>
        <div className="dyn-main">
          <div className="img-con">
            <div>
              <img src={data?.fields?.images[1]?.fields?.file?.url} alt="" />
            </div>
            <div>
              <img src={data?.fields?.images[2]?.fields?.file?.url} alt="" />
            </div>
            <div>
              <img src={data?.fields?.images[3]?.fields?.file?.url} alt="" />
            </div>
          </div>

          <div className="details-info">
            <div className="details">
              <h2>Details</h2>
              <p>{data?.fields?.description}</p>
            </div>

            <div className="info">
              <h2>Info</h2>
              <p>Price : {data?.fields?.price}</p>
              <p>Size : {data?.fields?.size}</p>
              <p>Max Capacity : {data?.fields?.capacity}</p>
              <p>
                {data?.fields?.pets === true
                  ? "Pets Allowed"
                  : "Pets Not Allowed"}
              </p>
              <p>
                {data?.fields?.breakfast === true
                  ? "Free BreakFast Included"
                  : "Free BreakFast Not Included"}
              </p>
            </div>
          </div>

          <div className="extras">
            <h4>Extras</h4>
            <div>
              {data?.fields?.extras.map((extra, i) => {
                return <p key={i}>- {extra}</p>;
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DynamicRouting;
