import React from "react";
import Button from "@material-ui/core/Button";

const styles = () => ({
  width: "100%",
  margin: "auto",
  position: "absolute" as "absolute",
  display: "flex",
  justifyContent: "space-around",
  bottom: 70,
  "& button": {
    width: "20%"
  }
});

type ControlButtonProps = {
  buttons: {
    LanePush: () => void;
    Cap: () => void;
    Flip: () => void;
  };
};

const ControlButtons: React.FC<ControlButtonProps> = ({ buttons }) => {
  return (
    <section style={styles()}>
      <Button variant="contained" color="primary" onClick={buttons.LanePush}>
        ← <br /> SPACE
      </Button>
      <Button variant="contained" color="primary" onClick={buttons.Flip}>
        ←→ <br /> ←
      </Button>
      <Button variant="contained" color="primary" onClick={buttons.Cap}>
        ↓ <br /> ↓
      </Button>
    </section>
  );
};

export default ControlButtons;
