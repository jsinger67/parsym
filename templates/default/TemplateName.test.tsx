import setupTests from "../../setupTests";
import { render, screen } from "../../test-utils";

import TemplateName from "./TemplateName";

describe("<TemplateName />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(<TemplateName />);

    const templateName = screen.getByTestId("TemplateName");

    expect(templateName).not.toBeNull();
  });
});
