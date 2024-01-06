import { BrowserRouter } from "react-router-dom";
import setupTests from "../../setupTests";
import { render, screen } from "../../test-utils";

import TabSwitcher from "./TabSwitcher";

describe("<TabSwitcher />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(
      <BrowserRouter>
        <TabSwitcher />
      </BrowserRouter>
    );

    const tabSwitcher = screen.getByTestId("TabSwitcher");

    expect(tabSwitcher).not.toBeNull();
  });
});
