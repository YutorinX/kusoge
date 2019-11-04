import React from "react";

const Life: React.FC<{ lifes: number }> = ({ lifes }) => {
  return <div>{"❤".repeat(lifes)}</div>;
};

export default Life;
