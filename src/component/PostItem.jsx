import React from "react";
import "../styles/App.css";
import MyButton from "./UI/button/MyBtn";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="delete__post">
        <MyButton onClick={() => props.remove(props.post)} className="dlt__btn">
          Удалить
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;
