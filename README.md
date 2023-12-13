Run first  
```shell
npm install 
```
then open hardhat.config.ts and change key to your private key and 
then open scripts folder and then open deploy.ts and edit youraddressforfee to your own address
and then open your cmd and run
```shell
npx hardhat compile 
```
and then run
```shell
npx hardhat run scripts/deploy.ts  --network base-mainnet 
```
and then run 
```shell
npx hardhat verify 0x000000000 --network base-mainnet youraddressforfee
```
and if you want it for testnet

then after compile 
```shell
npx hardhat run scripts/deploy.ts  --network base-goerli youraddressforfee
```
and then run 
```shell
npx hardhat verify 0x000000000 --network base-goerli youraddressforfee
```
