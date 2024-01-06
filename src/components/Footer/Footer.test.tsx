import setupTests from "../../setupTests";
import { render, screen } from "../../test-utils";

import Footer from "./Footer";

describe("<Footer />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(<Footer />);

    const footer = screen.getByTestId("Footer");

    expect(footer).not.toBeNull();
  });
});
