import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import {
  createTheme,
  localStorageColorSchemeManager,
  MantineProvider,
} from "@mantine/core";
import { App } from "./components/App";

const theme = createTheme({
  /** Your theme override here */
});

const colorSchemeManager = localStorageColorSchemeManager({
  key: "parsym-color-scheme",
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      colorSchemeManager={colorSchemeManager}
      theme={theme}
      defaultColorScheme="dark"
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
