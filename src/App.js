import './App.css';
import React, { useState } from 'react';
import UserList from './component/UserList';
import Post from './component/Post';

function App() {
  const [PostList, setPostList] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [editObj, setEditObj] = useState({
    title: "",
    body: "",
  });

  const [value, setValue] = useState({
    title: "",
    body: "",
  });



  return (
    <div className="App">

      <UserList
        setPostList={setPostList}
        PostList={PostList}
        setEditObj={setEditObj}
        editObj={editObj}
        setValue={setValue}
      />
      <Post
        editObj={editObj}
        setValue={setValue}
        value={value}
        PostList={PostList}
        setPostList={setPostList}
        setIsEdit={setIsEdit}
      />

    </div>
  );
}

export default App;
