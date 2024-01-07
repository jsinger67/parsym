import setupTests from "../../setupTests";
import { render, screen } from "../../test-utils";

import TypeDetails from "./TypeDetails";

describe("<TypeDetails />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(<TypeDetails />);

    const typeDetails = screen.getByTestId("TypeDetails");

    expect(typeDetails).not.toBeNull();
  });
});
