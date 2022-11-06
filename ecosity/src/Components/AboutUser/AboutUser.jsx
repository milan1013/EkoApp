import React, { Fragment } from "react";
import "./AboutUser.css";
import { FaUser } from "react-icons/fa";
import ProgressBar from "../ProgressBar/ProgressBar";

const testData = [
  { bgcolor: "#6a1b9a", completed: 60 },
//   { bgcolor: "#6a1b6a", completed: 90 },
];

export default function AboutUser() {
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
    <Fragment>
      <div className="about-container">
        <div className="image-container">
          <FaUser size={150} />
        </div>
        <div className="information-container">
          <span>
            First name: <label for="first-name">${user.firstName}</label>
          </span>
          <span>
            Last name: <label for="last-name">${user.lasttName}</label>
          </span>
          <span>
            Username: <label for="username">${user.username}</label>
          </span>
          <div className="progress-bar-container">
            <div className="about-progress-bar">
              <span>${user.xp}</span>
            </div>
            <div className="progress-bar">
              {testData.map((item, idx) => (
                <ProgressBar
                  key={idx}
                  bgcolor={item.bgcolor}
                  completed={user.xp}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="myEvents">
        <div className="eventsChecked">
          {/* TODO:Napraviti sekciju sa eventovima na kojima smo prisustvovali i pravili */}
        </div>
      </div>
    </Fragment>
  );
}
