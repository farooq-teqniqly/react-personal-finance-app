import React from "react";
import "./styles.scss";

function Avatar({ url }) {
  return (
    <div>
      <img src={url} alt="" className="avatar"></img>
    </div>
  );
}

export default Avatar;
