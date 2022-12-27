import React, { useState } from "react";
import { motion } from "framer-motion";
import LikeIcon from "../../../../assets/React/likeicon.png";
import Angry from "../../../../assets/React/angry.svg";
import Laughing from "../../../../assets/React/laughing.svg";

import Like from "../../../../assets//React/like.svg";
import Sad from "../../../../assets/React/sad.svg";
import Soaked from "../../../../assets/React/soaked.svg";
import Love from "../../../../assets/React/love.svg";
import "./Reaction.css";
const Reaction = () => {
  const [btnClicked, setBtnClicked] = useState(false);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "beforeChildren",
      },
      scale: 0.6,
    },
  };
  return (
    <motion.div
      className="parentDiv "
      onClick={() => btnClicked === true && setBtnClicked(false)}
    >
      <motion.div
        className="reactionsHolder bg-white shadow-lg rounded-lg"
        variants={list}
        animate={btnClicked ? "visible" : "hidden"}
      >
        <motion.img
          whileHover={{ scale: 1.5 }}
          src={Like}
          alt="Like"
          width="40"
          onClick={() => setBtnClicked(false)}
        />
        <motion.img
          whileHover={{ scale: 1.5 }}
          src={Love}
          alt="Love"
          width="40"
          onClick={() => setBtnClicked(false)}
        />
        <motion.img
          whileHover={{ scale: 1.5 }}
          src={Angry}
          alt="Angry"
          width="40"
          onClick={() => setBtnClicked(false)}
        />
        <motion.img
          whileHover={{ scale: 1.5 }}
          src={Sad}
          alt="Sad"
          width="40"
          onClick={() => setBtnClicked(false)}
        />
        <motion.img
          whileHover={{ scale: 1.5 }}
          src={Soaked}
          alt="Soaked"
          width="40"
          onClick={() => setBtnClicked(false)}
        />
        <motion.img
          whileHover={{ scale: 1.5 }}
          src={Laughing}
          alt="Laughing"
          width="40"
          onClick={() => setBtnClicked(false)}
        />
      </motion.div>
      <div className="flex absolute">
        <div>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="flex px-3"
            onClick={() => setBtnClicked(true)}
          >
            <motion.img src={LikeIcon} width="20" />
            &nbsp;
          </motion.button>
        </div>
        <div>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="flex"
            onClick={() => setBtnClicked(true)}
          >
            <motion.img src={LikeIcon} width="20" /> &nbsp; Like
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Reaction;
