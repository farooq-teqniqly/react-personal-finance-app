import React from "react";
import "./storybook-styles.scss";
import Header from "./Header";

const config = {
  title: "Header",
  component: Header,
};

export default config;

const Template = () => (
  <div className="storybook-container">
    <div class="storybook-header">
      <Header></Header>
    </div>
  </div>
);

export const Default = Template.bind({});
