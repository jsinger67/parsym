import setupTests from "../../setupTests";
import { render, screen } from "../../test-utils";

import RouterSwitcher from "./RouterSwitcher";

describe("<RouterSwitcher />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(<RouterSwitcher />);

    const routerSwitcher = screen.getByTestId("RouterSwitcher");

    expect(routerSwitcher).not.toBeNull();
  });
});
