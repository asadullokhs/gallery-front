import React, { useEffect, useRef } from "react";
import "./Web.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addPhoto } from "../../api/photoRequests";

const Web = () => {
  const navigate = useNavigate();
  const video_ref = useRef(null);
  const canvas_ref = useRef(null);

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

  const snap = async () => {
    if (canvas_ref.current) {
      var context = canvas_ref.current.getContext("2d");
      context.drawImage(video_ref.current, 0, 0, 580, 350);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      toast.loading("Wait...");
      const image = canvas_ref.current.toDataURL("image/png");

      const blob = await fetch(image).then((res) => res.blob());

      const file = new File([blob], "image.jpg", { type: "image/jpeg" });

      const formDate = new FormData(e.target);
      formDate.append("photo", file);
      const res = await addPhoto(formDate);

      toast.dismiss();
      toast.success(res?.data?.message);
      navigate("/");
    } catch (error) {
      toast.dismiss();
      toast.error(error?.message);
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleCreate}>
        <input
          type="text"
          name="title"
          placeholder="Enter your title..."
          required
          style={{ margin: "0 auto" }}
          className="form-control text-center w-25 my-5"
        />

        <button className="ok">ok</button>
      </form>
      <div className="display">
        <video
          ref={video_ref}
          id="video"
          muted="true"
          autoPlay
          width="580px"
          height="360px"
        ></video>
      </div>

      <button onClick={snap} id="snap"></button>

      <canvas
        ref={canvas_ref}
        id="canvas"
        width="500px"
        height="350px"
      ></canvas>
    </div>
  );
};

export default Web;
