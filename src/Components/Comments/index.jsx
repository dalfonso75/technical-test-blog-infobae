import { useEffect } from "react";

import PropTypes from "prop-types";
import useCommentsPost from "../../hooks/useCommentsPost";

import styles from "./styles.module.css";

export default function Comments({ title, postId }) {
  const { getComments, data, isLoading } = useCommentsPost();

  useEffect(() => {
    getComments(postId);
  }, [getComments, postId]);

  return (
    <div className={styles["c-inner-post"]}>
      <h3>Comentarios</h3>
      {data?.length > 0 ? (
        <ul>
          {data?.map((comment) => (
            <li className={styles["inner-post__comment"]} key={comment.id}>
              <p>
                <span className={styles["author__comment"]}>
                  {`${comment?.owner?.firstName} ${comment?.owner?.lastName}`}:{" "}
                </span>
                {comment.message}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>{isLoading ? "Cargando..." : "No hay comentarios"}</p>
      )}
    </div>
  );
}
Comments.propTypes = {
  title: PropTypes.string,
  postId: PropTypes.string,
};
