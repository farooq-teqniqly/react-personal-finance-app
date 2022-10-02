import React from "react";
import "./styles.scss";
import Avatar from "../../components/avatar/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

function Header({ avatarUrl }) {
  return (
    <div className="header">
      <div className="appName">Slicken</div>
      <div className="item">
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Avatar className="avatar" url={avatarUrl} {...bindTrigger(popupState)}></Avatar>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>Profile</MenuItem>
                <MenuItem onClick={popupState.close}>My account</MenuItem>
                <MenuItem onClick={popupState.close}>Logout</MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </div>
    </div>
  );
}

export default Header;
