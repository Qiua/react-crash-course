import classes from "./Post.module.css";

function Post(props) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>@{props.author}</p>
      <h1 className={classes.title}>{props.title}</h1>
      <p className={classes.text}>{props.body}</p>
    </li>
  );
}

export default Post;