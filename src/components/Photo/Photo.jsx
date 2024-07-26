import React, { useState } from "react";
import "./Photo.css";
import { useInfoContext } from "../../context/Context";
import { deletePhoto } from "../../api/photoRequests";
import { toast } from "react-toastify";

const Photo = ({ photo, photos, setPhotos }) => {
  const { exit, setModal, setPostId } = useInfoContext();
  const [open, setOpen] = useState(false);

  const handleDelete = async (id) => {
    try {
      const confirm = window.confirm(`Are you sure to delete '${photo?.title}'!`);
      if (confirm) {
        toast.loading("Please wait...");
        await deletePhoto(id);
        toast.dismiss();
        toast.success("Successfully deleted!");
        const updatedPhotos = photos.filter((item) => item._id !== id);
        setPhotos(updatedPhotos);
      }
    } catch (error) {
      toast.dismiss();
      toast.error(error?.message);
      if (error?.message === "jwt expired") {
        exit();
      }
    }
  };

  const handleDownload = async (url, title) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${title}.${blob.type.split('/')[1]}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      toast.error("Failed to download image");
    }
  };

  return (
    <div className="photo">
      <img className="image" src={photo?.image.url} alt="image" />
      <div className="flex-elements">
        <p className="photo-title">{photo?.title}</p>

        {open && (
          <>
            <span
              onClick={() => handleDelete(photo?._id)}
              className="photo-delete fa-solid fa-trash"
            ></span>
            <span
              onClick={() => {
                setModal(true);
                setPostId(photo?._id);
              }}
              className="photo-update fa-solid fa-pen"
            ></span>
            <span
              onClick={() => handleDownload(photo?.image.url, photo?.title)}
              className="photo-download fa-solid fa-download"
            ></span>
          </>
        )}

        <span
          onClick={() => setOpen(!open)}
          className={open ? "photo-close fa-solid fa-xmark" : "photo-open fa-solid fa-gear"}
        ></span>
      </div>
    </div>
  );
};

export default Photo;
