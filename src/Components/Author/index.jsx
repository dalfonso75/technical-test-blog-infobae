import PropTypes from "prop-types";

import styles from "./styles.module.css";

export default function Author({ authorIMage, authorName }) {
  return (
    <section className={styles["c-author"]}>
      <img
        height="29px"
        width="29px"
        className={styles["author__image"]}
        src={authorIMage}
        alt={authorName}
        loading="lazy"
        decoding="async"
        fetchpriority="low"
      />
      <p className={styles["author__name"]}>{authorName}</p>
    </section>
  );
}
Author.propTypes = {
  authorIMage: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
};

Author.defaultProps = {
  authorIMage: "",
  authorName: "",
};
