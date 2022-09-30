import { render, screen } from "@testing-library/react";
import BalanceAmount from "./BalanceAmount";

describe("BalanceAmount", () => {
  test("Shows amount", () => {
    const amount = 100.99;
    render(<BalanceAmount amount={amount} />);
    const element = screen.getByText(amount);
    expect(element).toBeInTheDocument();
  });

  test("And negative amounts have a style applied", () => {
    const amount = -100.99;
    const expectedStyle = { color: "rgb(153, 66, 66);" };
    render(<BalanceAmount amount={amount} />);
    const element = screen.getByText(amount);
    expect(element).toHaveStyle(expectedStyle);
  });
});
