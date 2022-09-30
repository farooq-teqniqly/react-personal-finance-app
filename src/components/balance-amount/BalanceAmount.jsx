import React from "react";
import "./styles.scss";

function BalanceAmount({ amount }) {
  const style = amount < 0 ? "negative" : "";

  return <div className={style}>{amount}</div>;
}

export default BalanceAmount;
