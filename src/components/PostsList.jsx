import classes from "./PostsList.module.css";
import Post from "./Post";
import NewPost from './NewPost'
import Modal from './Modal'
import { useState } from "react";

function PostsList({isModalVisible, onHideModal}) {
    const [posts, setPosts] = useState([]);
    
    function addPostHandler(postData) {
        setPosts((existingPosts)=> [postData, ...existingPosts]);
    }
  return (
    <>
    {isModalVisible &&(
        <Modal onClose={onHideModal}>
        <NewPost 
            onCancel={onHideModal}
            onAddPost={addPostHandler}
        />
        </Modal>
    )}
    <h2>All Posts</h2>
    <ul className={classes.posts}>
        <Post title="React Journey Begins" author="Andrey" body="React makes building user interfaces a breeze! I'm learning how components work." />
    </ul>
    </>
  );
}

export default PostsList;