import React from "react";
import AccountsBar from "./AccountsBar";
import accountGroups from "../../data/accountGroups";
import "./storybook-styles.scss";

const config = {
  title: "AccountsBar",
  component: AccountsBar,
};

export default config;

const Template = (args) => (
  <div className="storybook-container">
    <div className="storybook-accountsBar">
      <AccountsBar {...args}></AccountsBar>
    </div>
    <div className="storybook-content"></div>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  accountGroups: accountGroups,
};
