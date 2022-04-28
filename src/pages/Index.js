import React from 'react';

import HorizontalNavsCustom1 from '../components-custom/HorizontalNavsCustom1';
import CallToActionCustom2 from '../components-custom/CallToActionCustom2';
import StructuresCustom3 from '../components-custom/StructuresCustom3';
import StructuresCustom4 from '../components-custom/StructuresCustom4';

import { ChainId, DAppProvider, BSCTestnet, Config, } from "@usedapp/core";
import { useEthers } from "@usedapp/core";
import { providers } from "ethers"

const bscProvider = new providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org")
bscProvider.pollingInterval = 10_000;

const config: Config = {
  readOnlyChainId: BSCTestnet.chainId,
  readOnlyUrls: {
    [BSCTestnet.chainId]: bscProvider,
  },
  pollingInterval: 10000,
  notifications: {
    expirationPeriod: 1000,
    checkInterval: 1000
  }
}

export default function Index() {
  return (
    <DAppProvider config={config}>
        <React.Fragment>
          <HorizontalNavsCustom1 />
          <CallToActionCustom2 />
        </React.Fragment>
    </DAppProvider>
  );
}

