import React from "react";
import capimg from "./img/cap.png";

const styles = (transform: string) => ({
  position: "absolute" as "absolute",
  width: 40,
  height: 114,

  zIndex: 10,
  top: 45,
  left: 555,
  transition: "0.5s ease-in-out",
  transform: transform ? transform : ""
});

const PenCap: React.FC<{ stage: number }> = ({ stage }) => {
  const trans = position(stage);
  return (
    <img src={capimg} style={styles(trans!.transform)} alt="capimage"></img>
  );
};

function position(stage: number) {
  switch (stage) {
    case 0:
      return { transform: "" };
    case 1:
      return { transform: "translateY(70px)" };
    case 2:
      return { transform: "translate(-375px, 70px)" };
    case 3:
      return { transform: "translate(-670px, 70px)" };
  }
}

export default PenCap;
