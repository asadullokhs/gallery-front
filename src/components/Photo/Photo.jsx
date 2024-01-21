import React, { useState } from "react";
import "./Photo.css";

const Photo = ({ photo }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="photo ">
      <img className="image" src={photo.image.url} alt="" />
      <div className="flex-elements">
        <p className="photo-title">{photo?.title}</p>

        {open && (
          <>
            <span className="photo-delete fa-solid fa-trash"></span>
            <span className="photo-update fa-solid fa-pen"></span>
            <a
              download={photo?.image.url}
              href=""
              className="photo-download fa-solid fa-download"
            ></a>
          </>
        )}

        <span
          onClick={() => setOpen(!open)}
          className={
            open
              ? "photo-close fa-solid fa-xmark"
              : "photo-open fa-solid fa-gear"
          }
        ></span>
      </div>
    </div>
  );
};

export default Photo;
