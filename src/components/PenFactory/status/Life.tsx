import React from "react";

const Life: React.FC<{ lives: number }> = ({ lives }) => {
  return <div style={styles()}>{"❤".repeat(lives)}</div>;
};

const styles = () => ({
  color: "hotpink"
});

export default Life;
