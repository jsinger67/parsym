import setupTests from "../../setupTests";
import { render as testingLibraryRender } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { screen } from "../../test-utils";

import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
]);

function render(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      //   <MantineProvider theme={theme}>{children}</MantineProvider>
      <MantineProvider>{children}</MantineProvider>
    ),
  });
}

describe("<ErrorPage />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(<RouterProvider router={router}></RouterProvider>);

    const errorPage = screen.getByTestId("ErrorPage");

    expect(errorPage).not.toBeNull();
  });
});
