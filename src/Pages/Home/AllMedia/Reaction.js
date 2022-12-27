import React from "react";

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
      className="parentDiv"
      onClick={() => btnClicked === true && setBtnClicked(false)}
    >
      <motion.div
        className="reactionsHolder"
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
      <motion.button
        whileHover={{ scale: 1.2 }}
        className="likeBtn"
        onClick={() => setBtnClicked(true)}
      >
        <motion.img src={LikeIcon} width="15" /> &nbsp; Like
      </motion.button>
    </motion.div>
  );
};

export default Reaction;
