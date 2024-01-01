import setupTests from "../../setupTests";
import { render, screen } from "../../test-utils";

import SymbolNavigation from "./SymbolNavigation";

describe("<SymbolNavigation />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(<SymbolNavigation />);

    const symbolNavigation = screen.getByTestId("SymbolNavigation");

    expect(symbolNavigation).not.toBeNull();
  });
});
