import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./components/App";
import "./styles.css";
import {
  createTheme,
  localStorageColorSchemeManager,
  MantineProvider,
} from "@mantine/core";
import ErrorPage from "./components/ErrorPage/ErrorPage";

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
