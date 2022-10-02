import React from "react";
import "./storybook-styles.scss";
import Header from "./Header";

const config = {
  title: "Header",
  component: Header,
};

export default config;

const Template = (args) => (
  <div className="storybook-container">
    <div class="storybook-header">
      <Header {...args}></Header>
    </div>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  avatarUrl:
    "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
};
