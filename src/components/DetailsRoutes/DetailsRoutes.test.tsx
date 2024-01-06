import { BrowserRouter } from "react-router-dom";
import setupTests from "../../setupTests";
import { render } from "../../test-utils";

import DetailsRoutes from "./DetailsRoutes";

describe("<DetailsRoutes />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(
      <BrowserRouter>
        <DetailsRoutes />
      </BrowserRouter>
    );

    // const routerSwitcher = screen.getByTestId("DetailsRoutes");
    // expect(routerSwitcher).not.toBeNull();
    // TODO: Add router tests
  });
});
