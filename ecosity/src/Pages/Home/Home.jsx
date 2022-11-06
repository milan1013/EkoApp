import React, { Fragment, useEffect, useState } from "react";
import Post from "../../Components/Post/Post";
import { FaCheck, FaRegComment, FaBookmark, FaEllipsisH, FaPlus } from "react-icons/fa";

import CreateEventDialog from "../../Components/CreateEventDialog/CreateEventDialog"
import "./Home.css";
import Urls from "../../Constants/Urls"
import "../../style/utils.css";
import "../../style/button.css";

import axios from "axios"

export default function Home() {

  const [isShownCreateEvent, setIsShownCreateEvent] = useState(false);

  const posts = [
    {
      id: 1,
      title: "Post 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      postCreator: "PeraPeric",
      photoUrl: "https://images.pexels.com/photos/761297/pexels-photo-761297.jpeg?auto=compress&cs=tinysrgb&w=1600",
      comments: [
        {
          id: 1,
          content: "Lorem ipsum dolor sit amet",
          creatorUserName: "PeraPeric"
        },
        {
          id: 2,
          content: "Lorem ipsum dolor sit amet",
          creatorUserName: "NovicaNovic"
        },
        {
          id: 3,
          content: "Lorem ipsum dolor sit amet",
          creatorUserName: "StasaStasic"
        }
      ]
    },
    {
      id: 2,
      title: "Post 2",
      description: "Description 2",
      postCreator: "Pera Peric",
      photoUrl: "https://images.pexels.com/photos/2409022/pexels-photo-2409022.jpeg?auto=compress&cs=tinysrgb&w=1600",
      comments: [
        {
          id: 4,
          content: "Lorem ipsum dolor sit amet",
          creatorUserName: "PeraPeric"
        },
        {
          id: 5,
          content: "Lorem ipsum dolor sit amet",
          creatorUserName: "NovicaNovic"
        },
        {
          id: 6,
          content: "Lorem ipsum dolor sit amet",
          creatorUserName: "StasaStasic"
        }
      ]
    },
  ];

  const getAllEvents = async() => {
    try {
      return await axios.get(Urls.GET_ALL_EVENTS);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() =>{
    const response = getAllEvents();
    console.log(response);
  }, []);
  return (
    <div className="home-wrapper">
      {isShownCreateEvent? <CreateEventDialog/> : null}
      {/* <CustomCard /> */}

      <button onClick={()=>{
       setIsShownCreateEvent(true);
      }} className="outline-button add-post-event-button">
        <FaPlus style={{margin: "0 8"}}/>
        Add post or event
      </button>
      {posts.map((post, index) =>{
        return <Fragment key={index}>
          <div className="createEvent">

          </div>
          <Post
            title={post.title}
            description={post.description}
            postCreator={post.postCreator}
            photoUrl={post.photoUrl}
            comments={post.comments}
          />
      </Fragment>
      }
      )}

    </div>
  );
}
