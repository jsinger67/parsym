import { BrowserRouter } from "react-router-dom";
import setupTests from "../../setupTests";
import { render, screen } from "../../test-utils";

import App from "./App";

describe("<App />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const app = screen.getByTestId("App");

    expect(app).not.toBeNull();
  });
});
