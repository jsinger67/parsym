import { BrowserRouter } from "react-router-dom";
import setupTests from "../../setupTests";
import { render } from "../../test-utils";

import TabArea from "./TabArea";

describe("<TabArea />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(
      <BrowserRouter>
        <TabArea />
      </BrowserRouter>
    );

    // const tabArea = screen.getByTestId("TabArea");
    // expect(tabArea).not.toBeNull();
    // TODO: Add router tests
  });
});
