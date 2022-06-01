import React, { useRef, useState } from 'react';
import PostForm from './component/PostForm';
import PostList from './component/PostList';
import MyInput from './component/UI/input/MyInput';
import MySelect from './component/UI/select/MySelect';
import Select from './component/UI/select/MySelect';

import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'JavaScript',
      body: 'JavaScript - великолепный язык програмированния',
    },
    {
      id: 2,
      title: 'React',
      body: 'React - великолепный язык програмированния',
    },
    {
      id: 3,
      title: 'Node',
      body: 'Node - великолепный язык програмированния',
    },
    {
      id: 4,
      title: 'React.native',
      body: 'React.native - великолепный язык програмированния',
    },
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuerry, setSearchQuerry] = useState('');

  const createPost = newPost => {
    setPosts([...posts, newPost]);
  };

  function getSortedPosts() {
    console.log('Done');
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }

  const sortedPosts = getSortedPosts();

  const removePost = post => {
    setPosts(posts.filter(item => item.id !== post.id));
  };

  const sortPost = sort => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0px' }} />
      <MyInput
        value={searchQuerry}
        onChange={e => setSearchQuerry(e.target.value)}
        placeholder="Поиск..."
      />
      <MySelect
        defaultValue=" Сортировка по"
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
        value={selectedSort}
        onChange={sortPost}
      />
      {posts.length ? (
        <PostList remove={removePost} posts={sortedPosts} title={'Список постов'} />
      ) : (
        <h2 style={{ textAlign: 'center' }}>Посты не найдены!</h2>
      )}
    </div>
  );
}

export default App;
