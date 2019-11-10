import React from "react";

const Life: React.FC<{ lives: number }> = ({ lives }) => {
  return <div>{"❤".repeat(lives)}</div>;
};

export default Life;
