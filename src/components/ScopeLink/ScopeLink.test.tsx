import { BrowserRouter } from "react-router-dom";
import setupTests from "../../setupTests";
import { render, screen } from "../../test-utils";

import ScopeLink from "./ScopeLink";

describe("<ScopeLink />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(
      <BrowserRouter>
        <ScopeLink scopeId={0} />
      </BrowserRouter>
    );

    const scopeLink = screen.getByTestId("ScopeLink");

    expect(scopeLink).not.toBeNull();
  });
});
