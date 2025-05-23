import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost({ onCancel, onAddPost }) {
    const [enteredTitle, setEnteredTitle] = useState('title');
    const [enteredBody, setEnteredBody] = useState('body');
    const [enteredAuthor, setEnteredAuthor] = useState('author');

    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
    }
    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            title: enteredTitle,
            body: enteredBody,
            author: enteredAuthor,
        };
        onAddPost(postData);
        onCancel();
    }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" required onChange={titleChangeHandler}/>
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" className={classes.cancel} onClick={onCancel}>
            Cancel
        </button>
        <button type="submit" className={classes.submit}>
            Add Post
        </button>
      </p>
    </form>
  );
}

export default NewPost;