import firebaseInIt from "../firebase/firebase.init.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
firebaseInIt();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  //register
  function UserRegister({ name, email, password }) {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Registered",
          text: "Have a fun!",
          showConfirmButton: false,
          timer: 2000,
        });
        setUser(result.user);
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Oops..",
          text: `${err.message}`,
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .finally(() => setLoading(false));
  }
  // Get the currently signed-in user

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, []);

  // login
  function userLogin({ email, password }) {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logged in!!",
          text: "Have a fun!",
          showConfirmButton: false,
          timer: 2000,
        });
        setUser(result.user);
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Oops..",
          text: `${err.message}`,
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .finally(() => setLoading(false));
  }

  // logout
  function logout() {
    setLoading(true);
    signOut(auth)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logged out!",
          text: "Have a fun!",
          showConfirmButton: false,
          timer: 2000,
        });
        setUser({});
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Oops..",
          text: `${err.message}`,
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .finally(() => setLoading(false));
  }

  return { UserRegister, ...user, loading, userLogin, logout };
};

export default useFirebase;
