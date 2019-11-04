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

const PenBody: React.FC<{ stage: number; isPenFlipped: boolean }> = ({
  stage,
  isPenFlipped
}) => {
  const { transform } = position(stage, isPenFlipped);
  return <img src={penimg} style={styles(transform)} alt="penimage"></img>;
};

function position(stage: number, isPenFlipped: boolean): { transform: string } {
  let flip = isPenFlipped ? -180 : 0;
  switch (stage) {
    case 0:
      return { transform: `rotate(${90 + flip}deg)` };
    case 1:
      return { transform: `rotate(${20 + flip}deg) translate(-400px, 150px)` };
    case 2:
      return { transform: `translateX(-805px) rotate(${flip}deg)` };
    case 3:
      return { transform: `translate(-1185px) rotate(${flip}deg)` };
    case 4:
      return { transform: `translate(-1500px) rotate(${flip}deg)` };
    default:
      return { transform: `translateX(-805px) rotate(${flip}deg)` };
  }
}

export default PenBody;
