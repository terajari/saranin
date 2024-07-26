import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList() {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  const hidelModalHandler = () => setModalIsVisible(false);

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
    {modalIsVisible && <Modal onClose={hidelModalHandler}>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
        />
      </Modal>}
      
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostsList;