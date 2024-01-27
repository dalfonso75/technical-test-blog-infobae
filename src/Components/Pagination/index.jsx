import PropTypes from "prop-types";

import styles from "./styles.module.css";

export default function Pagination({
  total,
  limit,
  numberCurrentPage,
  setNumberCurrentPage,
}) {
  // Total Pages
  const numberTotalPages = Math.floor(total / limit);
  const loadMore = () => {
    if (numberCurrentPage < numberTotalPages)
      setNumberCurrentPage((prev) => prev + 1);
  };
  return (
    <div className={styles["c-pagination"]}>
      {numberCurrentPage < numberTotalPages ? (
        <button className={styles["button__see-more"]} onClick={loadMore}>
          Ver más
        </button>
      ) : (
        <span className={styles["pagination__loading"]}>Cargando...</span>
      )}
    </div>
  );
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  numberCurrentPage: PropTypes.number.isRequired,
  setNumberCurrentPage: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  total: 1,
  limit: 1,
  numberCurrentPage: 0,
  setNumberCurrentPage: () => {},
};
