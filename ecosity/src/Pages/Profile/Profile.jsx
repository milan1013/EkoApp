import React from "react";
import AboutUser from "../../Components/AboutUser/AboutUser";


export default function Profile() {
  const user = [
    {
    id:1,
    username:"markoS",
    firstName:"Marko",
    lastName:"Savic",
    xp:0
    }
  ];
  return (
    <>
      <AboutUser />
    </>
  );
}
