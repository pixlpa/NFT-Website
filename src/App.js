import './styles/App.css';
import React from "react";
import WalletUi from './components/WalletUi';

const OPENSEA_LINK = 'https://opensea.io/collection/????';
const CONTRACT_ADDRESS = "";

const App = () => {
  
  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <div className="header gradient-text">NFT PROJECT</div>
          <div className="sub-text">
            A series of 100 NFT
            <br />by Me.
            <br /><a href={OPENSEA_LINK}>View on OpenSea</a>
            <br /><a href={"https://zora.co/collections/"+CONTRACT_ADDRESS }>View on Zora</a>
            <br /><a href={"https://etherscan.io/address/"+CONTRACT_ADDRESS }>View Contract on Etherscan</a>
          </div>
        </div>
        <WalletUi contract={CONTRACT_ADDRESS} price={'0.1'} />
        </div>
        <div className="footer-container">
        </div>
    </div>
  );
};

export default App;