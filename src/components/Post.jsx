const names = ["Andrey", "Andreyzão"];

function Post() {
  const chooseName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div className="post">
      <h2>{chooseName} chegou!</h2>
      <p>E chegou pra arrasar!</p>
    </div>
  );
}

export default Post;