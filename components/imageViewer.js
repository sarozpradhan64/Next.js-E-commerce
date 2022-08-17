import React, { useState, useCallback } from "react";
import Image from "next/image";
import { createRoot } from "react-dom/client";
import ImageViewer from "react-simple-image-viewer";

export default function ImageViewerNanu({images}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // src list for viewer
  const srcList = [];
 for(const item of images){
  srcList.push(item.image);
 }

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
      <div style={{ display:'flex'}}>
        {images.map((item, index) => (
          <Image
            src={item.image}
            onClick={() => openImageViewer(index)}
            width="300"
            height="400"
            key={index}
            style={{ margin: "2px" }}
            alt={item.alt_text}
          />
        ))}
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={srcList}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  );
}
