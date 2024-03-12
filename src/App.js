import React from "react";
import { useInfoContext } from "./context/Context";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Modal from "./components/Modal/Modal";
import { Route, Routes } from "react-router-dom";
import Web from "./pages/Web/Web";

const App = () => {
  const { currentUser, modal } = useInfoContext();

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={currentUser ? <Home /> : <Auth />} />
        <Route path="/web" element={<Web />} />
      </Routes>

      {modal && <Modal />}
    </div>
  );
};

export default App;
