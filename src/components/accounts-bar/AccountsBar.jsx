import React from "react";
import "./styles.scss";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import Tooltip from "@mui/material/Tooltip";
import AccountGroup from "../account-group/AccountGroup";

function AccountsBar({ accountGroups }) {
  return (
    <div className="accountsBar">
      <div className="header">
        <div className="icon">
          <Tooltip title="Refresh all accounts">
            <RefreshOutlinedIcon></RefreshOutlinedIcon>
          </Tooltip>
        </div>
        <div className="icon">
          <Tooltip title="Manage accounts...">
            <AccountBalanceOutlinedIcon></AccountBalanceOutlinedIcon>
          </Tooltip>
        </div>
      </div>
      <div className="groups">
        {accountGroups.map((g) => (
          <div key={g.title} className="group">
            <AccountGroup group={g}></AccountGroup>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccountsBar;
