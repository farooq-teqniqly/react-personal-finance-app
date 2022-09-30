import { render, screen } from "@testing-library/react";
import AccountGroup from "./AccountGroup";
import accountGroups from "../../data/accountGroups";

const group = accountGroups[0];

describe("AccountGroup", () => {
  describe("When loaded", () => {
    test("Displays the group title and group total", () => {
      render(<AccountGroup group={group} />);
      const groupName = screen.getByText(group.title);
      expect(groupName).toBeInTheDocument();

      const groupTotal = screen.getByText(group.total);
      expect(groupTotal).toBeInTheDocument();
    });

    test("And Displays the account names and account totals", () => {
      render(<AccountGroup group={group} />);

      group.accounts.forEach((a) => {
        const accountName = screen.getByText(a.name);
        expect(accountName).toBeInTheDocument();

        const accountTotal = screen.getByText(a.total);
        expect(accountTotal).toBeInTheDocument();
      });
    });
  });
});
