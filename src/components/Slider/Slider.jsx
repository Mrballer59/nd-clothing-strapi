import React from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcons from "@mui/icons-material/WestOutlined";

const Slider = () => {
  const data = [
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  return (
    <div className="slider">
      <div className="container">
        <img src={data[0]} className=""></img>
        <img src={data[1]} className=""></img>
        <img src={data[2]} className=""></img>
      </div>
      <div className="icons">
        <div className="icon">
          <WestOutlinedIcons />
        </div>
        <div className="icon">
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};
export default Slider;
