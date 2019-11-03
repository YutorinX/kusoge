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

const ControlButtons: React.FC = () => {
  return (
    <section style={styles()}>
      <Button variant="contained" color="primary">
        ← <br /> SPACE
      </Button>
      <Button variant="contained" color="primary">
        ←→ <br /> ←→
      </Button>
      <Button variant="contained" color="primary">
        ↓ <br /> ↓
      </Button>
    </section>
  );
};

export default ControlButtons;
