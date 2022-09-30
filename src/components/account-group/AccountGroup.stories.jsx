import React from "react";
import AccountGroup from "./AccountGroup";
import accountGroups from "../../data/accountGroups";
import "./styles.scss";

const config = {
  title: "AccountGroup",
  component: AccountGroup,
};

export default config;

const Template = (args) => (
  <>
    <div className="storybook-container">
      <AccountGroup {...args}></AccountGroup>
      <div className="storybook-content"></div>
    </div>
  </>
);

export const Default = Template.bind({});

Default.args = {
  group: accountGroups[0],
};
