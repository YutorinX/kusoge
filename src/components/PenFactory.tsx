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
  const [flip, setFlip] = useState(false);

  const handleKeyDown = (e: any) => {
    if (e.key === " ") handleLanePush();
    else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      handleCap();
      console.log("test");
    } else if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      handleFlip();
      console.log("testflip");
    }
  };

  const handleLanePush = () => {
    setBodyStage(bodyStage.map(i => (i === 4 ? 0 : i + 1)));
    setStage({
      body: 0,
      cap:
        stage.cap === 3
          ? (stage.cap = 0)
          : stage.cap !== 0
          ? stage.cap + 1
          : stage.cap
    });
  };

  const handleCap = () => {
    setStage({ body: stage.body, cap: stage.cap === 0 ? 1 : 0 });
  };

  const handleFlip = () => {
    setFlip(!flip);
  };

  return (
    <section>
      <div style={styles()} onKeyPress={handleKeyDown} tabIndex={0}>
        <Status />
        <PenCap stage={stage.cap} />
        {bodyStage.map(num => (
          <PenBody key={num} stage={bodyStage[num]} isPenFlipped={flip} />
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
