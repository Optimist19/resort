import { useState } from "react";
import { Link } from "react-router-dom";
import { dataStore } from "../data/data";

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

  // function filterFtn(){
  //   if(data){
  //   const a = data.filter(room =>{
  //     return room.fields.price >= value.roomprice
  //    })

  //    data(a)
  //   }
  // }

  console.log(value);
  return (
    <>
      <nav className="rooms-nav">
        <div>
          <header>
            <h1>
              <Link to="/">
                <span>Serenity</span> <span>Shores</span>
              </Link>
            </h1>
          </header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Rooms</li>
          </ul>
        </div>
      </nav>
      <main className="rooms-main">
        <h5>Search Rooms</h5>

        <div className="filter">
          <div>
            <label htmlFor="roomtype">Room Type</label>

            <select className="input-width"
              id="roomtype"
              name="roomtype"
              onChange={(e) =>
                setValue({ ...value, [e.target.name]: e.target.value })
              }
              value={value.roomtype}>
              <option value="all">all</option>
              <option value="triple">triple</option>
              <option value="double">double</option>
              <option value="single">single</option>
              <option value="family">family</option>
            </select>
          </div>
          <div>
            <label htmlFor="roomprice">Room Price {value.roomprice}</label>
            <input onClick={()=>filterFtn}
              type="range"
              min={0}
              max={1000}
              step={100}
              value={value.roomprice}
              name="roomprice"
              onChange={(e) =>
                setValue({ ...value, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="guest">Guests</label>
            <select className="input-width"
              name="guest"
              id="guest"
              onChange={(e) =>
                setValue({ ...value, [e.target.name]: e.target.value })
              }
              value={value.guest}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div>
            <label htmlFor="pet">Pets</label>
            <input onClick={()=>filterFtn}
              id="pet"
              type="checkbox"
              onChange={(e) =>
                setValue({ ...value, [e.target.name]: e.target.checked })
              }
              name="pet"
            />
          </div>
          <div>
            <label htmlFor="breakFast">Breakfast</label>
            <input
              id="breakFast"
              type="checkbox"
              onChange={(e) =>
                setValue({ ...value, [e.target.name]: e.target.checked })
              }
              name="breakFast"
            />
          </div>
        </div>
        {/* <button onClick={()=>filterFtn()}>click</button> */}
        {/* <div>{
          data
        }</div> */}
        {/* <p>{dat.description}</p> */}
        <div className="featured-rooms">
          {data.map((field) => {
            return (
              <div key={field.sys?.id}>
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
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Rooms;
