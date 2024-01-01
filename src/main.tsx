import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  LoaderFunction,
  RouterProvider,
} from "react-router-dom";
import { App } from "./components/App";
import "./styles.css";
import {
  createTheme,
  localStorageColorSchemeManager,
  MantineProvider,
} from "@mantine/core";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import SymbolDetails from "./components/SymbolDetails/SymbolDetails";

const theme = createTheme({
  /** Your theme override here */
});

const colorSchemeManager = localStorageColorSchemeManager({
  key: "parsym-color-scheme",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "symbols/:symbolId",
        element: <SymbolDetails />,
        errorElement: <ErrorPage />,
        loader: async function ({ params }) {
          if (!params.symbolId) return { symbolId: 0 };
          return { symbolId: Number.parseInt(params.symbolId) };
        } satisfies LoaderFunction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      colorSchemeManager={colorSchemeManager}
      theme={theme}
      defaultColorScheme="dark"
    >
      <RouterProvider router={router}></RouterProvider>
    </MantineProvider>
  </React.StrictMode>
);
