import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dataStore } from "../data/data";
import NavCom from "./NavCom";

function Rooms() {
  const [data, setData] = useState(dataStore);
  // const [dat, setDat] = useState("")

  const [value, setValue] = useState({
    guest: "",
    pet: "",
    breakFast: "",
    roomprice: "",
    roomtype: ""
  });

  function roomType() {
    console.log("second");
    if (value.roomtype === "all") {
      setData(dataStore);
    } else {
      const filteredData = dataStore.filter((room) =>
        room.fields.type.includes(value.roomtype.toLowerCase())
      );
      setData(filteredData);
    }
  }

  function roomPriceFtn(value) {
    const filteredData = dataStore.filter(
      (room) => room.fields.price === Number(value)
    );
    setData(filteredData);
  }

  function guestFtn(value) {
    const filteredData = dataStore.filter(
      (room) => room.fields.capacity === Number(value)
    );
    // console.log(filteredData, "filteredData");
    setData(filteredData);
  }

  function petFtn() {
    const filteredData = dataStore.filter(
      (room) => room.fields.pets === value.pet
    );
    setData(filteredData);
  }

  function breakFastFtn(check) {
    const filteredData = dataStore.filter(
      (room) => room.fields.breakfast === check
    );
    setData(filteredData);
  }

  console.log(value);
  return (
    <>
      <NavCom />
      <main className="rooms-main">
        <h5>Search Rooms</h5>

        <div className="filter">
          <div>
            <label htmlFor="roomtype">Room Type</label>

            <select
              className="input-width"
              onClick={() => roomType()}
              id="roomtype"
              name="roomtype"
              onChange={(e) =>
                setValue({ ...value, [e.target.name]: e.target.value })
              }
              value={value.roomtype}>
              <option value="all">all</option>
              <option value="double">double</option>
              <option value="single">single</option>
              <option value="family">family</option>
              <option value="presidential">presidential</option>
            </select>
          </div>

          <div>
            <label htmlFor="roomprice">Room Price {value.roomprice}</label>
            <input
              type="range"
              min={0}
              max={650}
              step={50}
              value={value.roomprice}
              name="roomprice"
              onChange={(e) => {
                const val = e.target.value;
                setValue({ ...value, [e.target.name]: val });
                roomPriceFtn(val);
              }}
            />
          </div>

          <div>
            <label htmlFor="guest">Guests</label>
            <select
              className="input-width"
              name="guest"
              id="guest"
              onChange={(e) => {
                setValue({ ...value, [e.target.name]: e.target.value });
                guestFtn(e.target.value);
              }}
              value={value.guest}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div>
            <label htmlFor="pet">Pets</label>
            <input
              id="pet"
              type="checkbox"
              onChange={(e) => {
                setValue({ ...value, [e.target.name]: e.target.checked });
                petFtn();
              }}
              name="pet"
            />
          </div>
          <div>
            <label htmlFor="breakFast">Breakfast</label>
            <input
              id="breakFast"
              type="checkbox"
              onChange={(e) => {
                const check = e.target.checked
                setValue({ ...value, [e.target.name]: check });
                breakFastFtn(check);
              }}
              name="breakFast"
            />
          </div>
        </div>

        <div className="featured-rooms">
          {data.map((field) => {
            return (
              <Link key={field.sys?.id} to={`/rooms/${field.sys?.id}`}>
                <div>
                  <div className="p-img">
                    <div>
                      <img
                        src={field.fields?.images[0].fields?.file?.url}
                        alt="room-view"
                      />
                    </div>
                    <p>${field.fields.price}</p>
                    <div className="services-room-type">
                      <p>{field.fields.type} deluxe</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Rooms;
