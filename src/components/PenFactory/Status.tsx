import React from "react";
import { Typography } from "@material-ui/core";
import Life from "./Life";

const styles = () => ({
  display: "flex",
  justifyContent: "space-between"
});

const Status: React.FC = () => {
  const pay: number = 0.1;
  const unitPrice: number = 0.5;
  const chanceRate: number = 0.1;

  return (
    <section style={styles()}>
      <div>
        <Typography variant="h4" gutterBottom>
          バイト代: {pay}円
        </Typography>
        <Typography variant="h4" gutterBottom>
          単価: {unitPrice}円
        </Typography>
        <Typography variant="h4">ボーナス率: {chanceRate}％</Typography>
      </div>
      <Life lifes={3} />
    </section>
  );
};

export default Status;
