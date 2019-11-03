import React from "react";
import capimg from "./img/cap.png";

const styles = () => ({
  position: "absolute" as "absolute",
  width: 40,
  height: 114,
  top: 45,
  left: 555
});

const PenCap: React.FC = () => {
  return <img src={capimg} style={styles()} alt="capimage"></img>;
};

export default PenCap;
