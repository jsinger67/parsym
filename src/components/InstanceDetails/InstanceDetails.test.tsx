import setupTests from "../../setupTests";
import { render, screen } from "../../test-utils";

import InstanceDetails from "./InstanceDetails";

describe("<InstanceDetails />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(<InstanceDetails />);

    const instanceDetails = screen.getByTestId("InstanceDetails");

    expect(instanceDetails).not.toBeNull();
  });
});
