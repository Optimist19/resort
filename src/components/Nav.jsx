import { Link } from "react-router-dom"

function Nav() {
  return (
	<nav className="home-nav">
		<ul>
			<li>Home</li>
			{/* <li>About us</li> */}
			<li><Link to="/rooms">Our rooms</Link></li>
			{/* <li>Serenity Shores</li>
			<li>Reservation</li>
			<li>Amenities</li> */}
			{/* <li>Contact</li> */}
		</ul>
	</nav>
  )
}

export default Nav