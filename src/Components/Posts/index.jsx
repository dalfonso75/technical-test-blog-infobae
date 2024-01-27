import PropTypes from "prop-types";

import Post from "../Post";

import styles from "./styles.module.css";

function Posts({ posts }) {
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
          <li key={id} className={styles["loop-posts__post"]}>
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
};

Posts.defaultProps = {
  posts: [],
};

export default Posts;
