import React from "react";
import "./Navbar.css";
import { useInfoContext } from "../../context/Context";

const Navbar = () => {
  const { exit } = useInfoContext();
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
                <button
                  className="nav-link btn"
                  onClick={exit}
                  aria-current="page"
                >
                  𝙻𝚘𝚐𝚘𝚞𝚝
                </button>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="𝚂𝚎𝚊𝚛𝚌𝚑"
                aria-label="Search"
              />
              <button className="btn  search" type="submit">
                𝚂𝚎𝚊𝚛𝚌𝚑
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
