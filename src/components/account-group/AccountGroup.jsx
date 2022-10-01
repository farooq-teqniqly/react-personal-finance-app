import React from "react";
import "./styles.scss";
import BalanceAmount from "../balance-amount/BalanceAmount";

function AccountGroup({ group }) {
  return (
    <div className="groupContainer">
      <div className="groupHeader">
        <span className="groupTitle">{group.title}</span>
        <span className="groupTotal">{group.total}</span>
      </div>
      <div>
        <ul>
          {group.accounts.map((a) => (
            <li className="account" key={a.name}>
              <span>{a.name}</span>
              <BalanceAmount amount={a.total}></BalanceAmount>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AccountGroup;
