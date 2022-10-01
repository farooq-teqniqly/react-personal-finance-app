import { screen } from "@testing-library/react";
import setup from "../../utils/test/testUtils";
import Header from "../../components/header/Header";

describe("Header", () => {
  const appName = "Slicken";
  let testSetup = {};

  beforeEach(() => {
    testSetup = setup(<Header />);
  });

  test("Contains app name", () => {
    const header = screen.getByText(appName);
    expect(header).toBeInTheDocument();
  });
});
