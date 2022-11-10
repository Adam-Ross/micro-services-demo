import {useState, useEffect} from 'react'
import axios from 'axios'
import PostCreate from './components/PostCreate'
import PostList from './components/PostList'

function App() {

  return (
    <div className="container">
      <PostCreate />
      <PostList />
    </div>
  );
}

export default App;
