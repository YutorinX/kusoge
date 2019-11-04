import React, { useState } from "react";
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
  const [stage, setStage] = useState({ body: 0, cap: 0 });
  const [bodyStage, setBodyStage] = useState([0, 1, 2, 3, 4]);
  const [capStage, setCapStage] = useState([0]);
  const [flip, setFlip] = useState(false);

  const handleKeyDown = (e: any) => {
    if (e.key === " ") {
      handleLanePush();
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      handleCap();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      handleFlip();
    }
  };

  const handleLanePush = () => {
    setBodyStage(bodyStage.map(i => (i === 4 ? 0 : i + 1)));
    // capStage.findIndex(0)
    setCapStage(capStage.map(i => (i === 0 ? 0 : i === 3 ? 0 : i + 1)));
    console.log(capStage);
    if (capStage.indexOf(0) === -1) {
      setCapStage([...capStage, 0]);
    }
  };

  const handleCap = () => {
    setCapStage(capStage.map(i => (i === 0 ? 1 : i === 1 ? 0 : i)));
  };

  const handleFlip = () => {
    setFlip(!flip);
  };

  return (
    <section>
      <div style={styles()} onKeyDown={handleKeyDown} tabIndex={0}>
        <Status />

        {capStage.map((num, index) => (
          <PenCap key={index} stage={capStage[num]} />
        ))}
        {bodyStage.map((num, index) => (
          <PenBody key={index} stage={bodyStage[num]} isPenFlipped={flip} />
        ))}
        <ControlButtons
          buttons={{
            LanePush: handleLanePush,
            Cap: handleCap,
            Flip: handleFlip
          }}
        />
        <Counter />
      </div>
      <Buttons />
    </section>
  );
};

export default PenFactory;
