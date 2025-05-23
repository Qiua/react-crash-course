import classes from "./PostsList.module.css";
import Post from "./Post";

import { useState, useEffect } from "react";

function PostsList() {
    const [isLoading, setIsLoading] = useState(false);

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchPosts() {
            setIsLoading(true);
            const response = await fetch("http://localhost:8080/posts");
            const data = await response.json();
            setPosts(data.posts);
            setIsLoading(false);
        }
        fetchPosts();
    }, []);

    // function addPostHandler(postData) {
    //     fetch("http://localhost:8080/posts", {
    //         method: "POST",
    //         body: JSON.stringify(postData),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     });
    //     setPosts((existingPosts) => [postData, ...existingPosts]);
    // }
    return (
        <>
            <h2>All Posts</h2>
            {!isLoading && posts.length === 0 && (
                <div className={classes.noPosts}>
                    <p>No posts found. Maybe add one?</p>
                </div>
            )}
            {!isLoading && posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post
                            key={Math.random() * 1000}
                            title={post.title}
                            body={post.body}
                            author={post.author}
                        />
                    ))}
                </ul>
            )}
            {isLoading && (
                <div className={classes.loading}>
                    <p>Loading...</p>
                </div>
            )}
        </>
    );
}

export default PostsList;
