import React from "react";
import AccountsBar from "./AccountsBar";
import accountGroups from "../../data/accountGroups";
import "./storybook-styles.scss";

const config = {
  title: "AccountsBar",
  component: AccountsBar,
};

export default config;

const Template = (args) => <AccountsBar {...args}></AccountsBar>;

export const Default = Template.bind({});

Default.args = {
  accountGroups: accountGroups,
};
