import React, { useRef, useState } from "react";
import PostForm from "./component/PostForm";
import PostList from "./component/PostList";
import MyButton from "./component/UI/button/MyBtn";
import MyInput from "./component/UI/input/MyInput";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      body: "JavaScript - великолепный язык програмированния",
    },
    {
      id: 2,
      title: "React",
      body: "React - великолепный язык програмированния",
    },
    {
      id: 3,
      title: "Node",
      body: "Node - великолепный язык програмированния",
    },
    {
      id: 4,
      title: "React.native",
      body: "React.native - великолепный язык програмированния",
    },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title={"Список постов"} />
      ) : (
        <h2 style={{ textAlign: "center" }}>Посты не найдены!</h2>
      )}
    </div>
  );
}

export default App;
