import classes from "./PostsList.module.css";
import Post from "./Post";
import NewPost from './NewPost'

import { useState } from 'react';


function PostsList() {
  const [enteredBody, setEnteredBody] = useState('body');
  const [enteredAuthor, setEnteredAuthor] = useState('author');

    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }
    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
    }
  return (
    <>
    <h2>New Post</h2>
    <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler} />
    <h2>All Posts</h2>
    <ul className={classes.posts}>
        <Post title="Learning React" author={enteredAuthor} body={enteredBody} />
        <Post title="React Journey Begins" author="Andrey" body="React makes building user interfaces a breeze! I'm learning how components work." />
        <Post title="My First Deployment" author="Sarah" body="Just deployed my first React application. Hooks are amazing!" />
        <Post title="Understanding React Core" author="Mike" body="Props and state management are crucial concepts in React." />
        <Post title="Performance Insights" author="Emily" body="Virtual DOM is what makes React so efficient and fast." />
    </ul>
    </>
  );
}

export default PostsList;