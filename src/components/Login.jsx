import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styles from "./card.module.css";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/home";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <div className={styles.screen}>
      <form onSubmit={handleSubmit} className={styles.card}>
        <h3>Login</h3>
        <div className={styles.wrapper}>
          <div>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
          <p>
            New user <a href="/register">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
