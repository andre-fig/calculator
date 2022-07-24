import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Calculator from "./main/Calculator";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <div>
    <h1>Calculator</h1>
    <Calculator />
  </div>
);
