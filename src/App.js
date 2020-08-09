import React, { useState } from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/imageGrid";
import Modal from "./comps/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedImgKey, setSelectedImgKey] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid
        setSelectedImg={setSelectedImg}
        setSelectedImgKey={setSelectedImgKey}
      />
      {selectedImg && (
        <Modal
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
          selectedImgKey={selectedImgKey}
          setSelectedImgKey={setSelectedImgKey}
        />
      )}
    </div>
  );
}

export default App;
