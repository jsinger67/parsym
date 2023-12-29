import setupTests from "../../setupTests";
import { render, screen } from "../../test-utils";

import ColorSchemeToggle from "./ColorSchemeToggle";

describe("<ColorSchemeToggle />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(<ColorSchemeToggle />);

    const colorSchemeToggle = screen.getByTestId("ColorSchemeToggle");
    expect(colorSchemeToggle).not.toBeNull();
  });
});
