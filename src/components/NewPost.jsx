/* eslint-disable react/prop-types */
import classes from './NewPost.module.css';

function NewPost({onAuthorChange,onBodyChange, onCancel}) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Saran</label>
        <textarea id="body" required rows={3} onChange={onBodyChange}/>
      </p>
      <p>
        <label htmlFor="name">Nama Kamu</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
      </p>
      <p className={classes.actions}>
        <button>Kirim</button>
        <button onClick={onCancel}>Batal</button>
      </p>
    </form>
  );
}

export default NewPost;