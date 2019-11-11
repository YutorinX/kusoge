import React from "react";
import { Typography } from "@material-ui/core";
import Life from "./Life";

//TODO: SCSSで作り直す
const styles = (needsMargin?: boolean) => ({
  display: "flex",
  justifyContent: "space-between",

  margin: needsMargin ? "1% 0" : "inherit",
  backgroundColor: "rgba(0,0,0, 0.2)"
});

type props = {
  money: number;
  lives: number;
  unitPrice: number;
  chanceRate: number;
};

const Status: React.FC<props> = ({ money, lives, unitPrice, chanceRate }) => {
  return (
    <section style={styles()}>
      <div style={styles(true)}>
        <Typography variant="h4">
          <span role="img" aria-label="money">
            💰
          </span>
          : ￥{money}
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
      <Life lives={lives} />
    </section>
  );
};

export default Status;
