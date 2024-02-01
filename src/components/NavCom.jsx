import { Link, NavLink } from "react-router-dom";
function NavCom() {
  return (
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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>Rooms</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavCom;
