import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import trendycartStore from "./store/index.js";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={trendycartStore}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </Provider>
  </StrictMode>
);
