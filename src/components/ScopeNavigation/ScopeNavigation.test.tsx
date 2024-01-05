import { BrowserRouter } from "react-router-dom";
import setupTests from "../../setupTests";
import { render, screen } from "../../test-utils";

import ScopeNavigation from "./ScopeNavigation";

describe("<ScopeNavigation />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(
      <BrowserRouter>
        <ScopeNavigation />
      </BrowserRouter>
    );

    const scopeNavigation = screen.getByTestId("ScopeNavigation");

    expect(scopeNavigation).not.toBeNull();
  });
});
