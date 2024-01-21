import React, { useEffect } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import { useInfoContext } from "../../context/Context";
import { getPhotos } from "../../api/photoRequests";
import { toast } from "react-toastify";
import Photo from "../../components/Photo/Photo";

const Home = () => {
  const { currentUser, photos, setPhotos } = useInfoContext();

  useEffect(() => {
    const getImages = async () => {
      try {
        toast.loading("Please wait...");
        const res = await getPhotos();
        toast.dismiss();
        toast.success("All photos");
        setPhotos(res.data.photos);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    };

    getImages();
  }, [currentUser._id]);
  return (
    <div className="Home">
      <Navbar />
      <div className="container">
        <div className="main-title">
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
        {photos.length > 0 ? (
          photos.map((photo) => {
            return (
              <div key={photo._id} className="photo-item">
                <Photo photo={photo} />
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
