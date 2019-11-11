import React from "react";
import Button from "@material-ui/core/Button";

const styles = () => ({
  width: "100%",
  margin: "auto",
  display: "flex",
  justifyContent: "space-around",
  paddingBottom: 20
});

type isEnoughMoney = {
  unitPrice: boolean;
  bonus: boolean;
  life: boolean;
};

type buttonMethods = {
  unitPrice: () => void;
  bonusRate: () => void;
  life: () => void;
};

type props = {
  isEnoughMoney: isEnoughMoney;
  buttonMethods: buttonMethods;
  costs: {
    unit: number;
    bonusRate: number;
    life: number;
  };
};
//TODO: SCSSでリファクタ
const Buttons: React.FC<props> = ({ isEnoughMoney, buttonMethods, costs }) => {
  return (
    <section style={styles()}>
      <Button
        variant="contained"
        color={isEnoughMoney.unitPrice ? "primary" : "default"}
        onClick={buttonMethods.unitPrice}
      >
        単価上げ
        <br />
        {costs.unit}円
      </Button>

      <Button
        variant="contained"
        color={isEnoughMoney.bonus ? "primary" : "default"}
        onClick={buttonMethods.bonusRate}
      >
        ボーナス率上昇
        <br />
        {costs.bonusRate}円
      </Button>

      <Button
        variant="contained"
        color={isEnoughMoney.life ? "primary" : "default"}
        onClick={buttonMethods.life}
      >
        ライフ追加
        <br />
        {costs.life}円
      </Button>
    </section>
  );
};

export default Buttons;
