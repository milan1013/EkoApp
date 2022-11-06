import React, { Fragment } from "react";
import "./AboutUser.css";
import { FaUser } from "react-icons/fa";
import ProgressBar from "../ProgressBar/ProgressBar";
import MyEvents from "../../Pages/MyEvents";

const testData = [
  { bgcolor: "#6a1b9a", completed: 60 },
//   { bgcolor: "#6a1b6a", completed: 90 },
];

export default function AboutUser() {
  return (
    <Fragment>
      <div className="about-container">
        <div className="image-container">
          <FaUser size={150} />
        </div>
        <div className="information-container">
          <span>
            First name: <label for="first-name">Martin</label>
          </span>
          <span>
            Last name: <label for="last-name">Bonderovic</label>
          </span>
          <span>
            Username: <label for="username">bonderovicmartin</label>
          </span>
          <div className="progress-bar-container">
            <div className="about-progress-bar">
              <span>XP:</span>
            </div>
            <div className="progress-bar">
              {testData.map((item, idx) => (
                <ProgressBar
                  key={idx}
                  bgcolor={item.bgcolor}
                  completed={item.completed}
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
