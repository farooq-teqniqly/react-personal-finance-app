import React from "react";
import "./styles.scss";
import Avatar from "../../components/avatar/Avatar";

function Header({ avatarUrl }) {
  return (
    <div className="header">
      <div className="appName">Slicken</div>
      <div className="item">
        <Avatar className="avatar" url={avatarUrl}></Avatar>
      </div>
    </div>
  );
}

export default Header;
