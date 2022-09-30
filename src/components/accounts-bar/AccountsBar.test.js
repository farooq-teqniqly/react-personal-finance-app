import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AccountsBar from "./AccountsBar";

describe("AccountsBar", () => {
  describe("When loaded", () => {
    test("Displays the Refresh icon", () => {
      render(<AccountsBar />);
      const icon = screen.getByTestId("RefreshOutlinedIcon");
      expect(icon).toBeInTheDocument();
    });

    test("And displays the Manage Accounts icon", () => {
      render(<AccountsBar />);
      const icon = screen.getByTestId("AccountBalanceOutlinedIcon");
      expect(icon).toBeInTheDocument();
    });
  });

  describe("When user hovers over the Refresh icon", () => {
    test("The tooltip is displayed", async () => {
      render(<AccountsBar />);
      const user = userEvent.setup();
      const icon = screen.getByTestId("RefreshOutlinedIcon");
      await user.hover(icon);
      const tooltip = await screen.findByText("Refresh all accounts");
      expect(tooltip).toBeInTheDocument();
    });
  });

  describe("When user hovers over the Manage Accounts icon", () => {
    test("The tooltip is displayed", async () => {
      render(<AccountsBar />);
      const user = userEvent.setup();
      const icon = screen.getByTestId("AccountBalanceOutlinedIcon");
      await user.hover(icon);
      const tooltip = await screen.findByText("Manage accounts...");
      expect(tooltip).toBeInTheDocument();
    });
  });
});
