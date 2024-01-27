import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut, // Importa la función de cierre de sesión
} from "firebase/auth";
import { auth } from "../../firebase/firebase";

import styles from "./styles.module.css";
import iconGooogle from "../../assets/google-icon.png";

function Login() {
  const [currentUser, setCurrentUser] = useState(null);

  // Función para cerrar sesión
  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  // Login con Google
  const signInWithGoogle = async (googleProvider) => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnClick = async () => {
    if (currentUser) {
      // Si el usuario está autenticado, cerrar sesión
      await signOutUser();
    } else {
      // Si el usuario no está autenticado, iniciar sesión con Google
      const googleProvider = new GoogleAuthProvider();
      await signInWithGoogle(googleProvider);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  return (
    <div className={styles["wrapper__login"]}>
      {currentUser && <span>Hola {currentUser?.displayName}</span>}
      <button onClick={handleOnClick} className={styles["button__login"]}>
        <img
          height="20"
          width="20"
          className={styles["button__login-icon"]}
          src={iconGooogle}
          alt=""
        />{" "}
        {currentUser ? "Cerrar sesión" : "Iniciar sesión"}
      </button>
    </div>
  );
}

export default Login;
