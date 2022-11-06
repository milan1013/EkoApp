import { Fragment } from "react";
import CustomNavbar from "./Components/CustomNavbar/CustomNavbar"
import CustomCard from "./Components/Card/CustomCard";
import Profile from "./Pages/Profile";
import MapView from "./Pages/MapView";
import Home from "./Pages/Home/Home";
import MyEvents from "./Pages/MyEvents";
import Register from "./Pages/Login/Register";
import Login from "./Pages/Login/login/Login.jsx";
import "./App.css";

import { Routes, Route } from "react-router-dom";

function App() {
    return ( <
        div style = {
            { positon: "relative" }
        } >
        <
        CustomNavbar className = "customNavbar-container" / >
        <
        Routes className = "routes-container" >
        <
        Route path = "/"
        element = { < Home / > }
        />  <Route path = "/myevents
        " element = { < MyEvents /> } / > <
        Route path = "/mapview"
        element = { < MapView / > }
        />  <
        Route path = "/profile"
        element = { < Profile / > }
        />  <
        Route path = "/register"
        element = { < Register / > }
        /> <
        Route path = "/login"
        element = { < Login / > }
        /> < /
        Routes > <
        /div>
    );
}

// window.onscroll = function() {stickyNavbar()};

// var navbar = document.getElementById("navbar");

// var sticky = navbar.offsetTop;

// function stickyNavbar() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

export default App;