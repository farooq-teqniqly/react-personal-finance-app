import React from "react";
import "./styles.scss";

function Avatar({ config }) {
  return (
    <div>
      <img
        src={config.url}
        width={config.width}
        height={config.width}
        alt=""
        className="avatar"
      ></img>
    </div>
  );
}

export default Avatar;
