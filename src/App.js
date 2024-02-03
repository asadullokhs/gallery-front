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

const App = () => {
  const { currentUser, modal } = useInfoContext();

  return (
    <div className="App">
      {currentUser ? <Home /> : <Auth />}
      <ToastContainer />

      {modal && <Modal />}
    </div>
  );
};

export default App;
