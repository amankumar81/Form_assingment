import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Image from "../../assets/FormTask-img.jpg";
import swal from "sweetalert";
import { validateForm } from "../../formvalidation/Validate.js";
import { motion } from "framer-motion";

// Styles
import "../../styles/signup.css";
import "../../mediaQueryies/media.css";

const SignUp = () => {
  const [errors, setErrors] = useState({});

  const history = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const alreadyExist = () => {
    swal("Oops", "email already exist! or you left some field blank", "error");
  };
  //  Sending request with Fetch

  async function submit(e) {
    e.preventDefault();
    const validationErrors = validateForm({
      firstname,
      lastname,
      email,
      username,
      password,
      confirmPassword,
    });
    setErrors(validationErrors);

    let isValid = validateForm({
      firstname,
      lastname,
      email,
      username,
      password,
      confirmPassword,
    });
    setErrors(isValid);

    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          username,
          email,
          password,
          confirmPassword,
        }),
      });

      const res = await response.json();

      if (res === "exist") {
        alreadyExist();
      } else if (res === "notexist") {
        history("/home", { state: { id: username } });
      }
    } catch (e) {
      swal("Wrong Details", {
        className: "red-bg",
      });
      console.log(e);
    }
  }

  return (
    <section>
      <motion.div
        className="signup"
        initial={{
          y: "-100%",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
      >
        <img src={Image} alt="signUp" />
        <form action="POST">
          <h1>Explore & Experience</h1>
          <p>
            Get into your most comfortable journy yet.
            <br /> All the way up 🚀
          </p>
          <input
            type="text"
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            placeholder="Firstname"
          />
          {errors.firstname && <span>{errors.firstname}</span>}
          <input
            type="text"
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            value={lastname}
            placeholder="Lastname"
          />
          {errors.lastname && <span>{errors.lastname}</span>}
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="Email"
          />
          {errors.email && <span>{errors.email}</span>}
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            placeholder="Username"
          />
          {errors.username && <span>{errors.username}</span>}
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            placeholder="password"
          />
          {errors.password && <span>{errors.password}</span>}
          <input
            type="password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            value={confirmPassword}
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
          <input type="submit" value="Register" onClick={submit} />
        </form>
        <Link id="topBtn" to="/">
          Login
        </Link>{" "}
      </motion.div>
    </section>
  );
};

export default SignUp;
