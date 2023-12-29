import setupTests from "../../setupTests";
import { render, screen } from "../../test-utils";

import Header from "./Header";

describe("<Header />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(<Header />);

    const header = screen.getByTestId("Header");
    expect(header).not.toBeNull();
  });
});
