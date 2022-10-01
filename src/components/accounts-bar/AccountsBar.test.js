import { screen } from "@testing-library/react";
import setup from "../../utils/test/testUtils";
import AccountsBar from "./AccountsBar";
import accountGroups from "../../data/accountGroups";

describe("AccountsBar", () => {
  let testSetup = {};

  beforeEach(() => {
    testSetup = setup(<AccountsBar accountGroups={accountGroups} />);
  });

  describe("When loaded", () => {
    test("Displays the Refresh icon", () => {
      const icon = screen.getByTestId("RefreshOutlinedIcon");
      expect(icon).toBeInTheDocument();
    });

    test("And displays the Manage Accounts icon", () => {
      const icon = screen.getByTestId("AccountBalanceOutlinedIcon");
      expect(icon).toBeInTheDocument();
    });
  });

  describe("When user hovers over the Refresh icon", () => {
    test("The tooltip is displayed", async () => {
      const icon = screen.getByTestId("RefreshOutlinedIcon");
      await testSetup.user.hover(icon);
      const tooltip = await screen.findByText("Refresh all accounts");
      expect(tooltip).toBeInTheDocument();
    });
  });

  describe("When user hovers over the Manage Accounts icon", () => {
    test("The tooltip is displayed", async () => {
      const icon = screen.getByTestId("AccountBalanceOutlinedIcon");
      await testSetup.user.hover(icon);
      const tooltip = await screen.findByText("Manage accounts...");
      expect(tooltip).toBeInTheDocument();
    });
  });
});
