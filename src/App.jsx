import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import AppLayout from "./ui/AppLayout";
import Rooms from "./components/Rooms";
import DynamicRouting from "./components/DynamicRouting";
import NoPageFound from "./components/PageNotFound";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="con">
<BrowserRouter>
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="rooms" element={<Rooms />} />
      <Route path="/rooms/:id" element={<DynamicRouting />} />
    </Route>
    <Route path="*" element={<PageNotFound />} />
  </Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
