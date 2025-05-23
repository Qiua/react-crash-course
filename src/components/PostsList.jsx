import { useLoaderData } from "react-router-dom";

import classes from "./PostsList.module.css";
import Post from "./Post";

function PostsList() {
    const posts = useLoaderData();

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
            {posts.length === 0 && (
                <div className={classes.noPosts}>
                    <p>No posts found. Maybe add one?</p>
                </div>
            )}
            {posts.length > 0 && (
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
        </>
    );
}

export default PostsList;
