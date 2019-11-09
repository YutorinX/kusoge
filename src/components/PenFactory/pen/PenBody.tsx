import React from "react";
import penimg from "./img/pen.png";

const styles = (
  transform: string,
  right: string | undefined,
  display: string | undefined
) => ({
  position: "absolute" as "absolute",
  width: 40,
  height: 388,

  top: 129,
  right: right ? right : "-40%",
  display: display ? display : "block",
  transition: "0.5s ease-in-out",
  transform: transform ? transform : "rotate(90deg)"
});

const PenBody: React.FC<{ stage: number; isPenFlipped: boolean }> = ({
  stage,
  isPenFlipped
}) => {
  const { transform, right, display } = position(stage, isPenFlipped);
  return (
    <img
      src={penimg}
      style={styles(transform, right, display)}
      alt="penimage"
    ></img>
  );
};

function position(
  stage: number,
  isPenFlipped: boolean
): { transform: string; right?: string; display?: string } {
  let flip = isPenFlipped ? -180 : 0;
  switch (stage) {
    case 0:
      return { transform: `rotate(${90 + flip}deg)` };
    case 1:
      return { transform: `rotate(${20 + flip}deg)`, right: "20%" };
    case 2:
      return {
        transform: `rotate(${flip}deg)`,
        right: "50%"
      };
    case 3:
      return {
        transform: `rotate(${flip}deg)`,
        right: "75%"
      };
    case 4:
      return {
        transform: `rotate(${flip}deg)`,
        right: "110%"
      };
    default:
      return { transform: `rotate(${flip}deg)` };
  }
}

export default PenBody;
