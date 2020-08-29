import React from "react";
import { motion } from "framer-motion";
import { projectFirestore } from "./../firebase/config";
import deleteImg from "../img/delete.png";
import downloadImg from "../img/download.png";

const Modal = ({
  selectedImg,
  setSelectedImg,
  selectedImgKey,
  setSelectedImgKey,
}) => {
  // console.log(selectedImgKey);
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
      setSelectedImgKey(null);
    }
  };
  const handleDelete = () => {
    projectFirestore
      .collection("images")
      .doc(selectedImgKey)
      .delete()
      .then(function () {
        setSelectedImg(null);
        setSelectedImgKey(null);
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };
  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="imgOptions">
        <div className="delete" onClick={handleDelete}>
          <img src={deleteImg} alt="delete" />
        </div>
        <div className="download">
          <a href={selectedImg} download>
            <img src={downloadImg} alt="download" />
          </a>
        </div>
      </div>

      <motion.img
        className="selectImg"
        src={selectedImg}
        alt="enlarged image"
        initial={{ y: "-100vh" }}
        animate={{ y: "0" }}
      />
    </motion.div>
  );
};

export default Modal;
