import classes from "./Post.module.css";

function Post(props) {
  return (
    <li className={classes.post}>
      <h1 className={classes.title}>{props.title}</h1>
      <p className={classes.text}>{props.body}</p>
      <p className={classes.author}>By @{props.author}.</p>
    </li>
  );
}

export default Post;