/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */

import { render, screen } from "@testing-library/react";
import setup from "../../utils/test/testUtils";
import Header from "../../components/header/Header";

describe("Header", () => {
  const appName = "Slicken";

  const avatarUrl =
    "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg";

  let testSetup = {};

  beforeEach(() => {
    testSetup = setup(<Header avatarUrl={avatarUrl} />);
  });

  test("Contains app name", () => {
    const header = screen.getByText(appName);
    expect(header).toBeInTheDocument();
  });

  test("Contains avatar", () => {
    const img = testSetup.container.querySelector("img");
    expect(img.src).toContain(avatarUrl);
  });
});
