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

type props = {
  isEnoughMoney: isEnoughMoney;
};

const Buttons: React.FC<props> = props => {
  const isEnoughMoney = props.isEnoughMoney;

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
      >
        ライフ追加
        <br />
        未実装
      </Button>
    </section>
  );
};

export default Buttons;
