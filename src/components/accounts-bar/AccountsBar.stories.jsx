import React from "react";
import AccountsBar from "./AccountsBar";
import "./storybook-styles.scss";

const config = {
  title: "AccountsBar",
  component: AccountsBar,
};

export default config;

const Template = () => <AccountsBar></AccountsBar>;

export const Default = Template.bind({});
