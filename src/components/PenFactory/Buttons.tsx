import React from "react";
import Button from "@material-ui/core/Button";

const styles = () => ({
  width: "100%",
  margin: "auto",
  display: "flex",
  justifyContent: "space-around",
  "& button": {
    width: "20%"
  }
});

const Buttons: React.FC = () => {
  const isEnoughMoney = {
    unitPrice: true,
    bonus: false,
    life: true
  };

  return (
    <section style={styles()}>
      <Button
        variant="contained"
        color={isEnoughMoney.unitPrice ? "primary" : "default"}
      >
        単価上げ
        <br />
        100円
      </Button>
      <Button
        variant="contained"
        color={isEnoughMoney.bonus ? "primary" : "default"}
      >
        ボーナス率上昇
        <br />
        100円
      </Button>
      <Button
        variant="contained"
        color={isEnoughMoney.life ? "primary" : "default"}
      >
        ライフ追加
        <br />
        100円
      </Button>
    </section>
  );
};

export default Buttons;
