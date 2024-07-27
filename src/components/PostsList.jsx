/* eslint-disable react/prop-types */

import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({isClosing, onStopPosting}) {

  return (
    <>
    {isClosing && <Modal onClose={onStopPosting}>
        <NewPost
          onCancel={onStopPosting}
        />
      </Modal>}
      
      <ul className={classes.posts}>
      </ul>
    </>
  );
}

export default PostsList;