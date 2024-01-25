import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import AppLayout from "./ui/AppLayout";
import Rooms from "./components/Rooms";

function App() {
  return (
    <div className="con">
      <BrowserRouter>
        <Routes>
          {/* <Route element={<AppLayout />}>
            <Route index replace element={<Navigate to="rooms" />} />
            <Route path='/' element={<Home />} />
            <Route path='rooms' element={<Rooms />} />
          </Route> */}
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="rooms" element={<Rooms />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
