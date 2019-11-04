import React from "react";

const styles = () => ({
  position: "absolute" as "absolute",
  bottom: 30,
  left: 0,
  right: 0,
  margin: "-1% auto",
  textAlign: "center" as "center"
});

const Counter: React.FC = () => {
  return (
    <div style={styles()}>
      {"000,000,000,000,000,000,00" +
        String(1000000000000001).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
    </div>
  );
};

export default Counter;
