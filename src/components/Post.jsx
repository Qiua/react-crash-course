function Post(props) {
  return (
    <div className="post">
      <h2>{props.author} chegou!</h2>
      <p>{props.body}</p>
    </div>
  );
}

export default Post;