import { Fragment } from "react";
import CustomNavbar from "./Components/CustomNavbar/CustomNavbar"
import Profile from "./Pages/Profile/Profile";
import Forest from "./Pages/Forest/Forest";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
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
        element = { < Home />}
        />   <
        Route path = "/forest"
        element = { < Forest /> }
        />  <
        Route path = "/profile"
        element = { < Profile /> }
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