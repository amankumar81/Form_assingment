import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import swal from "sweetalert";

import "../../styles/login.css";

const Login = () => {
  const notSignedUp = () => {
    swal("Oops", "User has not signed up or wrong username/password", "error");
  };
  const wrongDetails = () => {
    swal("Wrong username or password", "error");
  };

  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const res = await response.json();

      if (res === "exist") {
        history("/home", { state: { id: username } });
      } else if (res === "notexist") {
        notSignedUp();
      }
    } catch (e) {
      wrongDetails();
      console.log(e);
    }
  }

  return (
    <section>
      <motion.div
        className="login"
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
      >
        <form action="POST">
          <h1>Login</h1>
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Username"
          />{" "}
          <br />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />{" "}
          <br />
          <input type="submit" onClick={submit} />
          <br />
          <p>या/or</p>
          <br />
          <Link to="/signup">Signup </Link>
        </form>
      </motion.div>
    </section>
  );
};

export default Login;
