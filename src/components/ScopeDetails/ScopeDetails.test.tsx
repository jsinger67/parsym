import setupTests from "../../setupTests";
import { render, screen } from "../../test-utils";

import ScopeDetails from "./ScopeDetails";

describe("<ScopeDetails />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(<ScopeDetails />);

    const scopeDetails = screen.getByTestId("ScopeDetails");

    expect(scopeDetails).not.toBeNull();
  });
});
