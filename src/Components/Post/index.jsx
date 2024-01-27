import PropTypes from "prop-types";

import Author from "../Author";

import styles from "./styles.module.css";

export default function Post({ postImage, postTitle, postAuthor, postTags }) {
  return (
    <article className={styles["c-post"]}>
      <header>
        <img
          className={styles["post__image"]}
          src={postImage}
          alt={postTitle}
        />
        <h3 className={styles["post__title"]}>{postTitle}</h3>
      </header>
      <footer className={styles["post__content"]}>
        <Author
          authorIMage={postAuthor.picture}
          authorName={postAuthor.firstName + " " + postAuthor.lastName}
        />
        <ul className={styles["post__tags"]}>
          <span className={styles["post__tag-title"]}>Etiquetas:</span>
          {postTags.map((tag, index) => (
            <li key={"tag-" + tag} className={styles["post__tag"]}>
              {tag}
              {index < postTags.length - 1 && ","}
            </li>
          ))}
        </ul>
        <button className={styles["post__read-more"]}>Ver comentarios</button>
      </footer>
    </article>
  );
}
Post.propTypes = {
  postImage: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  postAuthor: PropTypes.string.isRequired,
  postTags: PropTypes.array.isRequired,
};

Post.defaultProps = {
  postImage: "",
  postTitle: "",
  postAuthor: "",
  postTags: [],
};
