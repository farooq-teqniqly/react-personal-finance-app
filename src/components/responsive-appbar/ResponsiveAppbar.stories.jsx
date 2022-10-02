import React from "react";
import "./storybook-styles.scss";
import ResponsiveAppBar from "./ResponsiveAppbar";

const config = {
  title: "ResponsiveAppBar",
  component: ResponsiveAppBar,
};

export default config;

const Template = (args) => <ResponsiveAppBar className="appBar" {...args}></ResponsiveAppBar>;

export const Default = Template.bind({});
