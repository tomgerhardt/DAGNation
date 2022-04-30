import React from 'react';

import HorizontalNavsCustom1 from './components/HeaderComponent';
import CallToActionCustom2 from './components/MainComponent';

import { ChainId, DAppProvider, BSC, Config, } from "@usedapp/core";
import { useEthers } from "@usedapp/core";
import { providers } from "ethers"

const bscProvider = new providers.JsonRpcProvider("https://bsc-dataseed.binance.org/")
bscProvider.pollingInterval = 10_000;

const config: Config = {
  readOnlyChainId: BSC.chainId,
  readOnlyUrls: {
    [BSC.chainId]: bscProvider,
  },
  pollingInterval: 10000,
  notifications: {
    expirationPeriod: 1000,
    checkInterval: 1000
  }
}



export default function App() {
  return (
          <DAppProvider config={config}>
            <HorizontalNavsCustom1 />
            <CallToActionCustom2 />
          </DAppProvider>
  );
}
