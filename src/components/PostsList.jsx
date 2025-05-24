import { useLoaderData } from "react-router-dom";

import classes from "./PostsList.module.css";
import Post from "./Post";

function PostsList() {
  const posts = useLoaderData();

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
              key={post.id}
              id={post.id}
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
