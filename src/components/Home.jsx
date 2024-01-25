import { useEffect } from "react";
import Nav from "./Nav";
import { useState } from "react";
import { FaCocktail } from "react-icons/fa";
import { FaPersonHiking } from "react-icons/fa6";
import { FaShuttleVan } from "react-icons/fa";
import { RiBeerLine } from "react-icons/ri";
import { dataStore } from "../data/data";

function Home() {
  const [data, setDate] = useState(dataStore);
  const [time, setTime] = useState({
    hrs: "",
    mins: "",
    secs: ""
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();

      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();

      setTime({ ...time, hrs: hours, mins: minutes, secs: seconds });
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  return (
    <div className="home">
      <div className="home-bg-con">
        <div className="home-bg">
          <Nav />
          <div className="welcome">
            <h2>Welcome to</h2>
            <h3>Serenity Shores</h3>
            <h4>Where tranquility meets luxury 2-4-7</h4>
            {time.hrs ? (
              <div className="time">
                <h5>{`Current Time: ${time.hrs}:${time.mins}:${time.secs}`}</h5>
              </div>
            ) : (
              "Loading..."
            )}
          </div>
        </div>
      </div>

      <main className="main-home">
        <div className="services-con">
          <h2>Services</h2>
          <div className="services">
            <div>
              <FaCocktail className="react-icon" />
              <h4>Free Cocktails</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                etraset sheets containing Lorem
              </p>
            </div>
            <div>
              <FaPersonHiking className="react-icon" />
              <h4>Endless Hiking</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
              </p>
            </div>
            <div>
              <FaShuttleVan className="react-icon" />
              <h4>Free Shuttle</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
            </div>
            <div>
              <RiBeerLine className="react-icon" />
              <h4>Strongest Beer</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
            </div>
          </div>
        </div>

        <div className="featured-rooms-con">
          <h2>Featured Rooms</h2>
          <div className="featured-rooms">
            <div className="p-img">
              <div>
                <img
                  src={data[0].fields?.images[0].fields.file.url}
                  alt="room-view"
                />
              </div>
              <p>${data[0].fields?.price}</p>
              <div className="services-room-type">
                <p>{data[0].fields?.type} deluxe</p>
              </div>
            </div>

            <div className="p-img">
              <div>
                <img
                  src={data[4].fields?.images[0].fields.file.url}
                  alt="room-view"
                />
              </div>
              <p>${data[4].fields?.price}</p>
              <div className="services-room-type">
                <p>{data[4].fields?.type} deluxe</p>
              </div>
            </div>

            <div className="p-img">
              <div>
                <img
                  src={data[9].fields?.images[0].fields.file.url}
                  alt="room-view"
                />
              </div>
              <p>${data[9].fields?.price}</p>
              <div className="services-room-type">
                <p>{data[9].fields?.type} deluxe</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
