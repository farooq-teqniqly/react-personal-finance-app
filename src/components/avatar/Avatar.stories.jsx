import React from "react";
import Avatar from "./Avatar";
import "./storybook-styles.scss";

const config = {
  title: "Avatar",
  component: Avatar,
};

export default config;

const Template = (args) => (
  <div className="storybook-container">
    <Avatar {...args}></Avatar>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  config: {
    url: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
    width: 100,
  },
};
