import React from "react";
import { Typography } from "@material-ui/core";
import Life from "./Life";

//SCSSで作り直す
const styles = (needsMargin?: boolean) => ({
  display: "flex",
  justifyContent: "space-between",

  margin: needsMargin ? "1% 0" : "inherit",
  backgroundColor: "rgba(0,0,0, 0.2)"
});

const Status: React.FC = () => {
  const pay: number = 0.1;
  const unitPrice: number = 0.5;
  const chanceRate: number = 0.1;

  return (
    <section style={styles()}>
      <div style={styles(true)}>
        <Typography variant="h4">
          <span role="img" aria-label="money">
            💰
          </span>
          : ￥{pay}
        </Typography>
        <Typography variant="h4">
          <span role="img" aria-label="unit price">
            🖊
          </span>
          : ￥{unitPrice}
        </Typography>
        <Typography variant="h4">
          <span role="img" aria-label="bonus parcentage">
            🍆
          </span>
          : {chanceRate}％
        </Typography>
      </div>
      <Life lifes={3} />
    </section>
  );
};

export default Status;
