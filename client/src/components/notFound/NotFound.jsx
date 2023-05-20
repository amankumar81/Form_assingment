import React from "react";
import { motion } from "framer-motion";
import "../../styles/home.css";

const Home = () => {
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
            404
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
            Sorry! page not found
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Home;
