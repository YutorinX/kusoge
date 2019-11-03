import React from "react";
import Status from "./PenFactory/Status";
import PenBody from "./PenFactory/PenBody";
import PenCap from "./PenFactory/PenCap";
import Counter from "./PenFactory/Counter";
import Buttons from "./PenFactory/Buttons";
import ControlButtons from "./PenFactory/ControlButtons";

const styles = () => ({
  position: "relative" as "relative",
  maxWidth: 1152,
  height: 700,
  margin: "auto"
});

const PenFactory: React.FC = () => {
  const handlePush = () => {};

  const handleCap = () => {};

  const handleRotate = () => {};

  return (
    <section>
      <div style={styles()}>
        <Status />
        <PenCap />
        <PenBody stage={2} />
        <ControlButtons />
        <Counter />
      </div>
      <Buttons />
    </section>
  );
};

export default PenFactory;
