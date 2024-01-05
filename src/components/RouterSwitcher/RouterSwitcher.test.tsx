import { BrowserRouter } from "react-router-dom";
import setupTests from "../../setupTests";
import { render, screen } from "../../test-utils";

import RouterSwitcher from "./RouterSwitcher";

describe("<RouterSwitcher />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(
      <BrowserRouter>
        <RouterSwitcher />
      </BrowserRouter>
    );

    // const routerSwitcher = screen.getByTestId("RouterSwitcher");
    // expect(routerSwitcher).not.toBeNull();
    // TODO: Add router tests
  });
});
