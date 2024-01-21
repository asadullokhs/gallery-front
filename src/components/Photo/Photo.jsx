import React from "react";

const Photo = ({ photo }) => {
  console.log(photo);
  return (
    <div className="photo">
      <img className="image" src={photo.image.url} alt="" />
      <p className="photo-title">{photo?.title}</p>
    </div>
  );
};

export default Photo;
