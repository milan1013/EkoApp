import Navbar from "./Components/Navbar/Navbar";
import "./Components/Navbar/Navbar.css";
import Profile from "./Pages/Profile";
import Map from "./Pages/Map";
import Home from "./Pages/Home";
import MyEvents from "./Pages/MyEvents";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myevents" element={<MyEvents />} />
        <Route path="/map" element={<Map />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
