import { BrowserRouter } from "react-router-dom";
import setupTests from "../../setupTests";
import { render, screen } from "../../test-utils";

import SymbolLink from "./SymbolLink";

describe("<SymbolLink />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(
      <BrowserRouter>
        <SymbolLink symbolId={0} />
      </BrowserRouter>
    );

    const symbolLink = screen.getByTestId("SymbolLink");

    expect(symbolLink).not.toBeNull();
  });
});
