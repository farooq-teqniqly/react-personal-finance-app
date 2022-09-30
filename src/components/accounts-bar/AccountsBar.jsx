import React from "react";
import "./styles.scss";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import Tooltip from "@mui/material/Tooltip";

function AccountsBar() {
  return (
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
  );
}

export default AccountsBar;
