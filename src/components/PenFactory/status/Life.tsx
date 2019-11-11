import React from "react";

const Life: React.FC<{ lives: number }> = ({ lives }) => {
  if (lives < 5) {
    return <div style={styles()}>{"❤".repeat(lives)}</div>;
  } else {
    return <div style={styles()}>❤ ✖ {lives}</div>;
  }
};

const styles = () => ({
  color: "hotpink"
});

export default Life;
