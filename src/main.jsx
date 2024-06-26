import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <NextUIProvider>   
      <App />
    </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
