import { useRef } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

export default function Tags({ tags = [], handleStatesByTag, hasResults }) {
  const selectTag = useRef();

  const onChangeTag = (evt) => {
    evt.preventDefault();
    const tagFilter = selectTag.current.value;
    console.log(tagFilter.trim());
    handleStatesByTag(tagFilter.trim());
  };

  const tagsFiltrados =
    tags && tags.length > 0
      ? tags.filter(
          (tag) =>
            tag && tag.trim() !== "" && !/[^\w\s]/.test(tag) && tag.length <= 16
        )
      : [];

  return (
    <div className={styles["c-tags"]}>
      <label className={styles["tags__label"]}>Filtrar por etiquetas:</label>
      <select
        className={styles["tags__select"]}
        ref={selectTag}
        name="selectTag"
        onChange={onChangeTag}
      >
        <option value="" disabled selected>
          Seleccion una etiqueta
        </option>
        {tagsFiltrados.map((tag) => (
          <option
            className={styles["tags__select-option"]}
            key={"key-tag-" + tag}
            value={tag}
          >
            {tag}
          </option>
        ))}
      </select>
      {hasResults && (
        <span className={styles["tags__without-results"]}>Sin resultados</span>
      )}
    </div>
  );
}

Tags.propTypes = {
  tags: PropTypes.array,
  handleStatesByTag: PropTypes.func,
  hasResults: PropTypes.bool,
};

Tags.defaultProps = {
  tags: [],
  handleStatesByTag: () => {},
  hasResults: false,
};
