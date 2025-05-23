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
    {posts.length === 0 && (
        <div className={classes.noPosts}>
            <p>No posts found. Maybe add one?</p>
        </div>
    )}
    {posts.length > 0 && (
        <ul className={classes.posts}>
        {posts.map( (post) => (
            <Post key={Math.random()*1000}
                title={post.title}
                body={post.body}
                author={post.author}
            />
        ))}
    </ul>
    )}
    
    </>
  );
}

export default PostsList;