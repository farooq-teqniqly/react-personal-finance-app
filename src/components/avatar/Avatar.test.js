/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */

import { render } from "@testing-library/react";
import Avatar from "./Avatar";

describe("Avatar", () => {
  test("Loads expected image", () => {
    const config = {
      url: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
      width: 50,
    };

    const { container } = render(<Avatar config={config}></Avatar>);
    const img = container.querySelector("img");
    expect(img.src).toContain(config.url);
    expect(img.height).toBe(config.width);
    expect(img.width).toBe(config.width);
  });
});
