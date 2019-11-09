import React from "react";
import capimg from "./img/cap.png";
import "./PenCap.scss";

const PenCap: React.FC<{ stage: number }> = ({ stage }) => {
  return (
    <img src={capimg} alt="capimage" className={`penCap cap${stage}`}></img>
  );
};

export default PenCap;
