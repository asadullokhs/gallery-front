import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import { useInfoContext } from "../../context/Context";

const Home = () => {
  const { currentUser } = useInfoContext();
  return (
    <div className="Home">
      <Navbar />
      <div className="container">
        <div className="main-title">
          𝙷𝙴𝙻𝙻𝙾 {currentUser?.name}! 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚃𝙾 𝚆𝙰𝚃𝙲𝙷 𝚈𝙾𝚄𝚁 𝙿𝙷𝙾𝚃𝙾𝚂 𝙵𝚁𝙾𝙼 𝚈𝙾𝚄𝚁 𝙾𝚆𝙽
          𝙶𝙰𝙻𝙻𝙴𝚁𝚈!
        </div>
      </div>
    </div>
  );
};

export default Home;
