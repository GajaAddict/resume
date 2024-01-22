import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import MotionHoc from "./MotionHoc";
import tcs from "./../assets/Awards/tcs.jpg";
// import verizon from "./../assets/Awards/verizon.jpg";

const DocumentsComponent = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    tcs,
    // verizon
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      {images.map((src, index) => (
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          width="300"
          key={index}
          style={{ margin: "2px" }}
          alt=""
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)"
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  );
}

const Documents = MotionHoc(DocumentsComponent);

export default Documents;
