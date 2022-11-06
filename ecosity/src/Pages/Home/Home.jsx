import React, { Fragment } from "react";
import Post from "../../Components/Card/Post";
import "./Home.css";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "Post 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      postCreator: "Pera Peric",
      photoUrl: "https://media.tenor.com/qnlPzuJIQbIAAAAC/zero-two-srbija.gif"
    },
    {
      id: 2,
      title: "Post 2",
      description: "Description 2",
      postCreator: "Pera Peric",
      photoUrl: "https://media.tenor.com/qnlPzuJIQbIAAAAC/zero-two-srbija.gif"
    },
  ];
  return (
    <div className="home-wrapper">
      {/* <CustomCard /> */}
      {posts.map((post, index) =>{
        return <Fragment key={index}>
          <Post
            title={post.title}
            description={post.description}
            postCreator={post.postCreator}
            photoUrl={post.photoUrl}
          />
      </Fragment>
      })}
    </div>
  );
}
