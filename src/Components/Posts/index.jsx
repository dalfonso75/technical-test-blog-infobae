import PropTypes from "prop-types";

import Post from "../Post";

import styles from "./styles.module.css";

function Posts({ posts, setShowModal, setPostID }) {
  return (
    <ul className={styles["c-posts"]}>
      {posts.map((post) => {
        const {
          id = "",
          image = "",
          text = "",
          owner = {},
          tags = [],
        } = post || {};
        return (
          <li
            key={id}
            className={styles["loop-posts__post"]}
            onClick={() => {
              setShowModal(true);
              setPostID(id);
            }}
          >
            <Post
              postId={id}
              postImage={image}
              postTitle={text}
              postAuthor={owner}
              postTags={tags}
            />
          </li>
        );
      })}
    </ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      owner: PropTypes.object.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
  setShowModal: PropTypes.func.isRequired,
  setPostID: PropTypes.func.isRequired,
};

Posts.defaultProps = {
  posts: [],
  setShowModal: () => {},
  setPostID: () => {},
};

export default Posts;
