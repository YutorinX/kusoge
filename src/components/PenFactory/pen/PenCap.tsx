import React from "react";
import capimg from "./img/cap.png";

const styles = (transform: string, right: string | undefined) => ({
  position: "absolute" as "absolute",
  width: 40,
  height: 114,

  zIndex: 10,
  top: 45,
  right: right ? right : "50%",
  transition: "0.5s ease-in-out",
  transform: transform ? transform : ""
});

const PenCap: React.FC<{ stage: number }> = ({ stage }) => {
  const { transform, right } = position(stage);
  return (
    <img src={capimg} style={styles(transform, right)} alt="capimage"></img>
  );
};

function position(
  stage: number,
  right?: string
): { transform: string; right?: string | undefined } {
  switch (stage) {
    case 0:
      return { transform: "" };
    case 1:
      return { transform: "translateY(70px)" };
    case 2:
      return { transform: "translateY(70px)", right: "75%" };
    case 3:
      return { transform: "translateY(70px)", right: "110%" };
    default:
      return { transform: "" };
  }
}

export default PenCap;
