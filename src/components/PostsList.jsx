/* eslint-disable react/prop-types */

import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';
import { useEffect, useState } from 'react';
import Post from './Post'

function PostsList({isClosing, onStopPosting}) {
  const [posts, setPost] = useState([])

  const addPost = (postData) => {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setPost([postData, ...posts])
  }

  useEffect(()=>{
    async function fetchPost() {
      const response = await fetch('http://localhost:8080/posts')
      const resData = await response.json()
      setPost(resData.posts)
    }
    fetchPost()
  }, [])


  return (
    <>
    {isClosing && <Modal onClose={onStopPosting}>
        <NewPost
          onCancel={onStopPosting}
          onAddPost={addPost}
        />
      </Modal>}
      
      {posts.length > 0 ? <ul className={classes.posts}>
        {posts.map((post) => <Post key={post.author} author={post.author} body={post.body}/>)}
      </ul>: <div style={{textAlign: 'center', color: 'white'}}>Belum ada saran.
        <p>Tambahkan saran baru!</p></div>}
    </>
  );
}

export default PostsList;