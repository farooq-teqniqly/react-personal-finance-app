import React from "react";
import Avatar from "./Avatar";
import "./storybook-styles.scss";

const config = {
  title: "Avatar",
  component: Avatar,
};

export default config;

const Template = (args) => <Avatar {...args}></Avatar>;

export const Default = Template.bind({});

Default.args = {
  url: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
};
