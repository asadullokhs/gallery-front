import React from "react";
import "./Photo.css";

const Photo = ({ photo }) => {
  console.log(photo);
  return (
    <div className="photo ">
      <img className="image" src={photo.image.url} alt="" />
      <div className="flex-elements">
        <p className="photo-title">{photo?.title}</p>

        <span className="photo-delete fa-solid fa-trash"></span>
      </div>
    </div>
  );
};

export default Photo;
