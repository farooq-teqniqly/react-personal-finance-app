import React from "react";
import "./styles.scss";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import Tooltip from "@mui/material/Tooltip";
import AccountGroup from "../account-group/AccountGroup";

function AccountsBar({ accountGroups }) {
  return (
    <div className="storybook-container">
      <div className="storybook-sidebar">
        <div className="accountsBar">
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
        <div className="storybook-accountGroups">
          {accountGroups.map((g) => (
            <AccountGroup key={g.title} group={g}></AccountGroup>
          ))}
        </div>
      </div>
      <div className="storybook-content"></div>
    </div>
  );
}

export default AccountsBar;
