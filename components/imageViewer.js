import React, { useState, useCallback } from "react";
import Image from "next/image";
import { createRoot } from "react-dom/client";
import Slider from "react-slick";
import ImageViewer from "react-simple-image-viewer";
import { Col, Grid } from "@nextui-org/react";

export default function ImageViewerNanu({ images }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // src list for viewer
  const srcList = [];
  for (const item of images) {
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

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    SlidesToScroll: 1,
  };

  return (
    <>
      <Grid xs={12}>
        <Slider {...settings}>
          {images.map((item, index) => (
              <Image key={index}
                src={item.image}
                onClick={() => openImageViewer(index)}
               height="400"
               width={"500"}
               objectFit="cover"
                style={{ margin: "2px" }}
                alt={item.alt_text}
              />
          ))}
        </Slider>
      </Grid>
      {isViewerOpen && (
        <ImageViewer
          style={{ zIndex: "100", border: "2px solid red" }}
          src={srcList}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={true}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
        />
      )}
    </>
  );
}
