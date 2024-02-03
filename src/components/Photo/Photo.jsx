import React, { useState } from "react";
import "./Photo.css";
import { useInfoContext } from "../../context/Context";
import { deletePhoto } from "../../api/photoRequests";
import { toast } from "react-toastify";

const Photo = ({ photo }) => {
  const { exit, setModal, setPostId, postId } = useInfoContext();

  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    try {
      toast.loading("Please wait...");
      await deletePhoto(postId);
      toast.dismiss();
      toast.success("Succesfully deleted!");
    } catch (error) {
      toast.dismiss();
      console.log(error);
      toast.error(error?.message);
      if (error?.message === "jwt expired") {
        exit();
      }
    }
  };
  return (
    <div className="photo ">
      <img className="image" src={photo.image.url} alt="" />
      <div className="flex-elements">
        <p className="photo-title">{photo?.title}</p>

        {open && (
          <>
            <span
              onClick={() => {
                setPostId(photo._id);
                handleDelete();
              }}
              className="photo-delete fa-solid fa-trash"
            ></span>
            <span
              onClick={() => {
                setModal(true);
                setPostId(photo._id);
              }}
              className="photo-update fa-solid fa-pen"
            ></span>
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
