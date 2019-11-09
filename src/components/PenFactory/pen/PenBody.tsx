import React from "react";
import penimg from "./img/pen.png";
import "./PenBody.scss";

const styles = (transform: string) => ({
  transform: transform ? transform : "rotate(90deg)"
});

const PenBody: React.FC<{ stage: number; isPenFlipped: boolean }> = ({
  stage,
  isPenFlipped
}) => {
  const { transform } = position(stage, isPenFlipped);
  return (
    <img
      src={penimg}
      style={styles(transform)}
      alt="penimage"
      className={`penBody pBody${stage}`}
    ></img>
  );
};

function position(stage: number, isPenFlipped: boolean): { transform: string } {
  const flip = isPenFlipped ? -180 : 0;
  switch (stage) {
    case 0:
      return { transform: `rotate(${90 + flip}deg)` };
    case 1:
      return { transform: `rotate(${20 + flip}deg)` };
    case 2:
      return { transform: `rotate(${flip}deg)` };
    case 3:
      return { transform: `rotate(${flip}deg)` };
    case 4:
      return { transform: `rotate(${flip}deg)` };
    default:
      return { transform: `rotate(${flip}deg)` };
  }
}

export default PenBody;
