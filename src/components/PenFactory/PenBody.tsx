import React from "react";
import penimg from "./img/pen.png";

const styles = (transform: string) => ({
  position: "absolute" as "absolute",
  width: 40,
  height: 388,

  top: 129,
  right: -250,
  transition: "0.5s ease-in-out",
  transform: transform ? transform : "rotate(90deg)"
});

const PenBody: React.FC<{ stage: number }> = ({ stage }) => {
  const trans = position(stage);
  return (
    <img src={penimg} style={styles(trans!.transform)} alt="penimage"></img>
  );
};

function position(stage: number) {
  switch (stage) {
    case 0:
      return { transform: "rotate(90deg)" };
    case 1:
      return { transform: "rotate(20deg) translate(-400px, 150px)" };
    case 2:
      return { transform: "translateX(-805px)" };
    case 3:
      return { transform: "translate(-1185px)" };
    case 4:
      return { transform: "translate(-1500px)" };
  }
}

export default PenBody;
