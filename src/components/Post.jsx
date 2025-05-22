import classes from "./Post.module.css";

function Post(props) {
  return (
    <li className={classes.post}>
      <h1 className={classes.title}>{props.title}</h1>
      <h2 className={classes.author}>{props.author} disse:</h2>
      <p className={classes.text}>{props.body}</p>
    </li>
  );
}

export default Post;