import styles from "./styles.module.css";
import iconGooogle from "../../assets/google-icon.png";

function Login() {
  return (
    <div>
      <button className={styles["button__login"]}>
        <img
          height="20"
          width="20"
          className={styles["button__login-icon"]}
          src={iconGooogle}
          alt=""
        />{" "}
        Cerrar sesión
      </button>
    </div>
  );
}

export default Login;
