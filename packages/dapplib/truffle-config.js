require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remind concert grace nasty flower security'; 
let testAccounts = [
"0x170455c7efd5ae48af70267978f024d33ea76bc3f76894a30f1913708edb6141",
"0xd2b63f35a2636ee5e68a5679ad15d559dd07ac157cd52f930f052abca8a4844f",
"0xfa71d65ac9e1a9eba101cda2ecbfb9762bf092d52a016640b37b6ce16409d390",
"0x2289fd401cd049b0dc64e2f669bcd8c97bb2d71170bf62b918c474aa990227bf",
"0xe924cbbef56c9c07830f164b61106c3f25d431e2ea0516a69a3cb9e45b765f8d",
"0xc338c07eef3bb3815e51805fa18d301390d7cd3693a80d652f2e3ea67979e36a",
"0xdcdb9a31f815a3b3f5aeae753044e7fe381dc729f94c172c3cb46bfd5ada420d",
"0x47ed3362fbab1ff02b5e8530d21fbddd6034086f2ddb27c82d6869c5b23271a6",
"0x526bb3db0cc4c5061f0bcb16b04f7454cb3e1263609670e41c45090b6abcf95b",
"0x3c094a3fc2da2ad92dba862ae4ddfbff9431b364c37a0940a309c6462396897d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

