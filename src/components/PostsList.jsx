import classes from "./PostsList.module.css";
import Post from "./Post";
import NewPost from './NewPost'
import Modal from './Modal'
import { useState, useEffect } from "react";

function PostsList({isModalVisible, onHideModal}) {
    // fetch('http://localhost:8080/posts')
    // .then((response) => response.json())
    // .then((data) => {
    //     setPosts(data.posts);
    // })

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('http://localhost:8080/posts');
            const data = await response.json();
            setPosts(data.posts);
        }
        fetchPosts();
    },[]);
    
    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
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