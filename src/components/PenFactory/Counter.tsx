import React from "react";

const styles = () => ({
  position: "absolute" as "absolute",
  bottom: 30,
  left: 0,
  right: 0,
  margin: "-1% auto",
  textAlign: "center" as "center"
});

const Counter: React.FC<{ count: number }> = props => {
  return (
    <div style={styles()}>
      {"000,000,000,000,000,000,000,000,000,000,000,000,000,000," +
        String(props.count)
          .padStart(3, "0")
          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
    </div>
  );
};

export default Counter;
