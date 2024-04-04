import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
const cache = createCache({
  key: "my-cache-key",
  nonce: "THE_NONCE", // <----
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CacheProvider value={cache}>
      <App />
    </CacheProvider>
  </React.StrictMode>
);
