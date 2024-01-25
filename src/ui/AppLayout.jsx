// import React from 'react'

import { Outlet } from "react-router-dom"


function AppLayout() {
  return (
	<div>
	{/* <p>jhgfgh</p> */}
		<Outlet />
	</div>
  )
}

export default AppLayout