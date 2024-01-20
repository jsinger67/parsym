import setupTests from "../../setupTests";
import { render, screen } from "../../test-utils";

import TypeEntrails from "./TypeEntrails";

describe("<TypeEntrails />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(<TypeEntrails entrails={"None"} />);

    const typeEntrails = screen.getByTestId("TypeEntrails");

    expect(typeEntrails).not.toBeNull();
  });
});
