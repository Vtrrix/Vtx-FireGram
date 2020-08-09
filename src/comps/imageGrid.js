import React from "react";
import useFirestore from "./../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg, setSelectedImgKey }) => {
  const { docs } = useFirestore("images");
  // console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className="img-wrap"
            key={doc.id}
            onClick={() => {
              setSelectedImg(doc.url);
              setSelectedImgKey(doc.id);
            }}
          >
            <motion.img
              src={doc.url}
              alt="image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};
export default ImageGrid;
