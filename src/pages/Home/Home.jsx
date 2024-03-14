import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import { useInfoContext } from "../../context/Context";
import { addPhoto, getPhotos } from "../../api/photoRequests";
import { toast } from "react-toastify";
import Photo from "../../components/Photo/Photo";

const Home = () => {
  const [photos, setPhotos] = useState([]);

  const { currentUser } = useInfoContext();

  useEffect(() => {
    const getImages = async () => {
      try {
        toast.loading("Please wait...");
        const res = await getPhotos();
        toast.dismiss();
        toast.success("All photos");
        setPhotos(
          res?.data?.photos.filter((photo) => photo.author === currentUser._id)
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    };

    getImages();
  }, [currentUser._id]);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      toast.loading("Wait...");
      const formDate = new FormData(e.target);
      const res = await addPhoto(formDate);
      toast.dismiss();
      toast.success(res?.data?.message);
      setPhotos([...photos, res?.data?.newPhoto]);
    } catch (error) {
      toast.dismiss();
      toast.error(error?.message);
      console.log(error.message);
    }
  };
  return (
    <div className="Home">
      <Navbar setPhotos={setPhotos} />
      <div className="container">
        <div className="add-form">
          <form
            className="p-3 d-flex align-items-center justify-content-evenly flex-wrap"
            onSubmit={handleCreate}
          >
            <input
              type="text"
              name="title"
              className="form-control w-25"
              placeholder="Title..."
              required
            />
            <input
              type="file"
              name="photo"
              className="form-control w-25"
              placeholder="New photo..."
              required
            />
            <button className="btn btn-outline-primary w-25">Save</button>
          </form>
        </div>
        <div className="main-title ">
          𝙷𝙴𝙻𝙻𝙾 {currentUser?.name}! 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚃𝙾 𝚆𝙰𝚃𝙲𝙷 𝚈𝙾𝚄𝚁 𝙿𝙷𝙾𝚃𝙾𝚂 𝙵𝚁𝙾𝙼 𝚈𝙾𝚄𝚁 𝙾𝚆𝙽
          𝙶𝙰𝙻𝙻𝙴𝚁𝚈!
        </div>
        <div className="second-title">
          <p>𝙰𝚕𝚕</p>
          <span className="dote"></span>
          <p>𝙿𝚑𝚘𝚝𝚘𝚐𝚛𝚊𝚙𝚑𝚢</p>
          <span className="dote"></span>
          <p>𝚃𝚛𝚊𝚟𝚎𝚕</p>
          <span className="dote"></span>
          <p>𝙵𝚊𝚜𝚒𝚘𝚗</p>
          <span className="dote"></span>
          <p>𝙻𝚒𝚏𝚎 𝚜𝚝𝚢𝚕𝚎</p>
        </div>
      </div>
      <div className="images">
        {photos?.length > 0 ? (
          photos.map((photo) => {
            return (
              <div key={photo._id} className="photo-item">
                <Photo photo={photo} photos={photos} setPhotos={setPhotos} />
              </div>
            );
          })
        ) : (
          <h3>Images not found!</h3>
        )}
      </div>
    </div>
  );
};

export default Home;
