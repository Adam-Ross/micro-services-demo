import {useState, useEffect} from 'react'
import PostInput from './components/PostInput'
import Posts from './components/Posts'
import axios from 'axios'

function App() {

  const [posts, setPosts] = useState({})
  const [comments, setComments] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get('http://localhost:3002/posts')
      setPosts(res.data)
    }

    getPosts()
  }, [posts])

  const createNewPost = async (text) => {
      await axios.post('http://localhost:3002/posts', {title: text})
  }

  const createComment = async (obj) => {
    const {text, postId} = obj
      const res = await axios.post(`http://localhost:3003/posts/${postId}/comments`, {body: text})
      setComments(res.data)
  }

  return (
    <div className="container">
      <PostInput createNewPost={createNewPost} />
      <Posts posts={posts} createComment={createComment} comments={comments} />
    </div>
  );
}

export default App;
