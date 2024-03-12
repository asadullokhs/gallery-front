import React, { useRef } from "react";
import "./Navbar.css";
import { useInfoContext } from "../../context/Context";
import { toast } from "react-toastify";
import { searchPhotos } from "../../api/photoRequests";
import { Link } from "react-router-dom";

const Navbar = ({ setPhotos }) => {
  const { exit } = useInfoContext();

  const photo_ref = useRef();

  const searchPhoto = async () => {
    try {
      toast.loading("Please wait...");
      const data = photo_ref.current.value;
      const res = await searchPhotos(data);
      toast.dismiss();
      setPhotos(res?.data?.result);

      photo_ref.current.value = "";
      toast.success("Found photos");
    } catch (error) {
      toast.dismiss();
      toast.error(error?.response?.data.message);
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container fon">
          <a className="navbar-brand" href="/">
            𝙶𝚊𝚕𝚕𝚎𝚛𝚢
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">
                  𝙷𝚘𝚖𝚎
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">
                  𝙰𝚋𝚘𝚞𝚝
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/web">
                  Web-Camera
                </Link>
              </li>
              <li className="nav-item">
                <button
                  button
                  className="nav-link btn"
                  onClick={exit}
                  aria-current="page"
                >
                  𝙻𝚘𝚐𝚘𝚞𝚝
                </button>
              </li>
            </ul>
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="𝚂𝚎𝚊𝚛𝚌𝚑"
                aria-label="Search"
                ref={photo_ref}
              />
              <button
                onClick={searchPhoto}
                className="btn  search"
                type="submit"
              >
                𝚂𝚎𝚊𝚛𝚌𝚑
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
