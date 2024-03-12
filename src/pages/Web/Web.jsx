import React, { useEffect, useRef } from "react";
import "./Web.css";
import { useNavigate } from "react-router-dom";

const Web = () => {
  const navigate = useNavigate();
  const video_ref = useRef(null);
  const canvas_ref = useRef(null);
  const image_ref = useRef(null);

  useEffect(() => {
    if (video_ref.current) {
      const constraints = {
        audio: true,
        video: {
          width: { min: 1024, ideal: 1280, max: 1920 },
          height: { min: 576, ideal: 720, max: 1080 },
        },
      };

      async function startCamera() {
        try {
          const stream = await window.navigator.mediaDevices.getUserMedia(
            constraints
          );

          video_ref.current.srcObject = stream;

          window.stream = stream;
        } catch (error) {
          console.log(error);
        }
      }

      startCamera();
    }
  }, []);

  const snap = () => {
    if (canvas_ref.current) {
      var context = canvas_ref.current.getContext("2d");
      context.drawImage(video_ref.current, 0, 0, 500, 350);

      const image = canvas_ref.current
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      image_ref.current.src = image;

      console.log(image);

      window.location.href = image;

      navigate("/");
    }
  };

  return (
    <div>
      <div className="display">
        <video
          ref={video_ref}
          id="video"
          autoPlay
          width="480px"
          height="380px"
        ></video>
      </div>

      <button onClick={snap} id="snap"></button>

      <canvas ref={canvas_ref} id="canvas" width="500px" height="350px">
        <img ref={image_ref} id="img" src="" alt="" />
      </canvas>
    </div>
  );
};

export default Web;
