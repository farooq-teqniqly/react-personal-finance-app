/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */

import { render } from "@testing-library/react";
import Avatar from "./Avatar";

describe("Avatar", () => {
  test("Loads expected image", () => {
    const url =
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg";
    const { container } = render(<Avatar url={url}></Avatar>);
    const img = container.querySelector("img");
    expect(img.src).toContain(url);
  });
});
