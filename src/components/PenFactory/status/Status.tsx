import React from "react";
import { Typography } from "@material-ui/core";
import Life from "./Life";
import "./Status.scss";

type props = {
  money: number;
  lives: number;
  unitPrice: number;
  chanceRate: number;
};

//TODO: 更新されたら色が一瞬変わるようにする

const Status: React.FC<props> = ({ money, lives, unitPrice, chanceRate }) => {
  return (
    <section className="status">
      <div className="statuses">
        <Typography variant="h4">
          <span role="img" aria-label="money">
            💰
          </span>
          :￥{money}
        </Typography>
        <Typography variant="h4">
          <span role="img" aria-label="unit price">
            🖊
          </span>
          :￥{unitPrice}
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
