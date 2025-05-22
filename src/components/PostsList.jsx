import classes from "./PostsList.module.css";
import Post from "./Post";

function PostsList() {
  return (
    <ul className={classes.posts}>
        <Post title="Learning React" author="John" body="Today I started learning React. It's so exciting!" />
        <Post title="React Journey Begins" author="Andrey" body="React makes building user interfaces a breeze! I'm learning how components work." />
        <Post title="My First Deployment" author="Sarah" body="Just deployed my first React application. Hooks are amazing!" />
        <Post title="Understanding React Core" author="Mike" body="Props and state management are crucial concepts in React." />
        <Post title="Performance Insights" author="Emily" body="Virtual DOM is what makes React so efficient and fast." />
    </ul>
  );
}

export default PostsList;