import classes from "./PostsList.module.css";
import Post from "./Post";
import NewPost from './NewPost'
import Modal from './Modal'

function PostsList({isModalVisible, onHideModal}) {
  return (
    <>
    {isModalVisible &&(
        <Modal onClose={onHideModal}>
        <NewPost 
            onCancel={onHideModal}
        />
        </Modal>
    )}
    <h2>All Posts</h2>
    <ul className={classes.posts}>
        <Post title="React Journey Begins" author="Andrey" body="React makes building user interfaces a breeze! I'm learning how components work." />
    </ul>
    </>
  );
}

export default PostsList;