import { screen } from "@testing-library/react";
import setup from "../../utils/test/testUtils";
import AccountGroup from "./AccountGroup";
import accountGroups from "../../data/accountGroups";

const group = accountGroups[0];

describe("AccountGroup", () => {
  beforeEach(() => {
    setup(<AccountGroup group={group} />);
  });

  describe("When loaded", () => {
    test("Displays the group title and group total", () => {
      const groupName = screen.getByText(group.title);
      expect(groupName).toBeInTheDocument();

      const groupTotal = screen.getByText(group.total);
      expect(groupTotal).toBeInTheDocument();
    });

    test("And Displays the account names and account totals", () => {
      group.accounts.forEach((a) => {
        const accountName = screen.getByText(a.name);
        expect(accountName).toBeInTheDocument();

        const accountTotal = screen.getByText(a.total);
        expect(accountTotal).toBeInTheDocument();
      });
    });
  });
});
