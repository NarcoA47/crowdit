import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Sepolia } from "@thirdweb-dev/chains";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { StateContextProvider } from "./context";
import './index.css'


const activeChain = "ethereum";

const container = document.getElementById("root");
const root = createRoot(container);


root.render(
    <ThirdwebProvider activeChain={Sepolia}
      clientId="742fe040f6e2ecc27ef228f4935c3683"
    >
     <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
      </Router>
    </ThirdwebProvider>
);
