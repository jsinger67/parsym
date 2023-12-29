import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
// import App from "./components/App/App";
import "./styles.css";
import {
  createTheme,
  localStorageColorSchemeManager,
  MantineProvider,
} from "@mantine/core";

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
      <App />
    </MantineProvider>
  </React.StrictMode>
);
