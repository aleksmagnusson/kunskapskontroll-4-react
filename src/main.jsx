import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
