import { BrowserRouter } from "react-router-dom";
import setupTests from "../../setupTests";
import { render, screen } from "../../test-utils";

import SymbolDetails from "./SymbolDetails";

describe("<SymbolDetails />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(
      <BrowserRouter>
        <SymbolDetails />
      </BrowserRouter>
    );

    const symbolDetails = screen.getByTestId("SymbolDetails");

    expect(symbolDetails).not.toBeNull();
  });
});
