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
  increaseLife: () => void;
};

type props = {
  isEnoughMoney: isEnoughMoney;
  buttonMethods: buttonMethods;
  costs: {
    life: number;
  };
};

const Buttons: React.FC<props> = ({ isEnoughMoney, buttonMethods, costs }) => {
  return (
    <section style={styles()}>
      <Button
        variant="contained"
        color={isEnoughMoney.unitPrice ? "primary" : "default"}
      >
        単価上げ
        <br />
        未実装
      </Button>

      <Button
        variant="contained"
        color={isEnoughMoney.bonus ? "primary" : "default"}
      >
        ボーナス率上昇
        <br />
        未実装
      </Button>

      <Button
        variant="contained"
        color={isEnoughMoney.life ? "primary" : "default"}
        onClick={buttonMethods.increaseLife}
      >
        ライフ追加
        <br />
        {costs.life}円
      </Button>
    </section>
  );
};

export default Buttons;
