import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App";
const el = document.getElementById("root")!;
const tree = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
if (el.hasChildNodes()) hydrateRoot(el, tree);
else createRoot(el).render(tree);
