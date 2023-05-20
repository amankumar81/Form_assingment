import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "../../styles/home.css";

const Home = () => {
  const location = useLocation();

  return (
    <>
      <div className="homepage">
        <div className="hero">
          <motion.h1
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
          >
            Hello {location.state.id}
          </motion.h1>
          <motion.p
            initial={{
              y: -100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
          >
            Welcome to this Website
          </motion.p>
          <div className="buttonContainer">
            <button>View Docs</button>
            <button id="readmore">Read More</button>
          </div>
        </div>
      </div>
      <Link id="logoutBtn" to="/signup">
        Log out
      </Link>
    </>
  );
};

export default Home;
