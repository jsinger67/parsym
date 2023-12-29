import setupTests from "../../setupTests";
import { render, screen } from "../../test-utils";

import App from "./App";

describe("<App />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(<App />);

    const app = screen.getByTestId("App");

    expect(app).not.toBeNull();
  });
});
