import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      {posts.map((value, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={value}
          key={value.id}
        />
      ))}
    </div>
  );
};

export default PostList;
