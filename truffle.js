var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "-";

module.exports = {
  networks: {
    live: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/N6txUeAGTqAd4UBfw9Aw");
      },
      network_id: "*"
    },
    dev: {
      host: "127.0.0.1",
      port: 7545,
      gas: 6500000,
      network_id: "5777"
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/N6txUeAGTqAd4UBfw9Aw");
      },
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/N6txUeAGTqAd4UBfw9Aw");
      },
      network_id: "*"
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://kovan.infura.io/N6txUeAGTqAd4UBfw9Aw");
      },
      network_id: "*"
    }
  }
};
