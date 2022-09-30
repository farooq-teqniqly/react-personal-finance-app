import React from "react";
import "./styles.scss";

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
            <li key={a.name}>
              <span className="accountName">{a.name}</span>
              <span className="accountTotal">{a.total}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AccountGroup;
