import React from "react";
import BalanceAmount from "./BalanceAmount";
import "./storybook-styles.scss";

const config = {
  title: "BalanceAmount",
  component: BalanceAmount,
};

export default config;

const Template = (args) => (
  <div className="storybook-container">
    <BalanceAmount {...args}></BalanceAmount>
  </div>
);

export const PositiveAmount = Template.bind({});

PositiveAmount.args = {
  amount: 1234.56,
};

export const NegativeAmount = Template.bind({});

NegativeAmount.args = {
  amount: -1234.56,
};
