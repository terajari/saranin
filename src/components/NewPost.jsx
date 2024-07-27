/* eslint-disable react/prop-types */
import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost({onCancel}) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }


  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const postData = {
      body: enteredBody,
      author: enteredAuthor
    }
    console.log(postData)
    onCancel()
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Saran</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
      </p>
      <p>
        <label htmlFor="name">Nama Kamu</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button>Kirim</button>
        <button onClick={onCancel}>Batal</button>
      </p>
    </form>
  );
}

export default NewPost;