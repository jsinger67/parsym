import { BrowserRouter } from "react-router-dom";
import setupTests from "../../setupTests";
import { render } from "../../test-utils";

import TabRoutes from "./TabRoutes";

describe("<TabRoutes />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(
      <BrowserRouter>
        <TabRoutes />
      </BrowserRouter>
    );

    // const tabArea = screen.getByTestId("TabRoutes");
    // expect(tabArea).not.toBeNull();
    // TODO: Add router tests
  });
});
