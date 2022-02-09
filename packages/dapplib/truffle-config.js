require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remain uncover guess nature tail spell'; 
let testAccounts = [
"0xdb0dc85d5526c0442cbb1e9f5750a3ebbd5b70dd25eb099256278b3265bb4bd9",
"0xadd6ea08c2dc433f355a35df9eeeb93d34311cd67525d0a8d7e7c75320295f5f",
"0x190a7a39311b71e7a7ac58f6c281ab3c93176d329a4411304ee83839f30920e8",
"0x1e88e90fe82bba06c7ea03ad88ae2361034a5809de2f3c0005377d7dc4b19fe4",
"0xce3a30ca93fbce2d27a85503e0efa599518ac6d0b7a06acad4693bf163b6a4b7",
"0xa4894eb519d3a146657e064099ae1b907d67bd5b8139d06f2f4ec487466983a4",
"0x423e3444026092e9502160e6aabf377d5c611fe11eb913842e5e705711760b02",
"0x96621dd1469b876eae9937a8e2e83e1e2983ceb126c30343fe4b7dee0efdb2a6",
"0x4b73ba242b582e7d71d1b93679248ecfe10ec37dcb524067c03c799020458bcc",
"0x750ca8f6db30becc17527696abec564b68fc69e81c751b17f4e8fc0c43c78c20"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


