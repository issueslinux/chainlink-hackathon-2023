# chainlink-hackathon-2023

## Short description of the project

The goal of the project is to create a Multi-Chain store **"Eventshop"** serving IT events such as conferences, hackathons, meetups. Proof of purchase will be stored on the blockchain network additionally the user will receive a dynamic NFT token on which his achievements will be recorded. This token will be able to be part of his CV.

## What problem does the project solve?

1. Using the benefits of blockchain technology for users without cryptocurrency wallets, tokens, etc. Or not wanting to link their wallets.
2. The main parameter for selection of the network for recording the proof of purchase will be the approximate fee price of the last 10 minutes. The network with the lowest price will be selected for the transaction. This solution is to help avoid temporary high fees because the probability that there will be a high load on several/some networks at the same time is very low. Examples of fee price peaks on the polygon network:

![Polgon fees](https://github.com/issueslinux/chainlink-hackathon-2023/blob/main/polygon_fee.png)
https://polygonscan.com/chart/gasprice

3. An open architecture to enable the addition of new networks in the future and to operate on different networks in the process of selling a single product. E.g. selling 100 hackathon tickets: 90% will be saved on the **Harmony** network, 5% on the **Celo** network and 1% on the **Polygon** network depending on the amount of instant fees. 

## Chainlink solutions used in the project

- [x] Chainlink Node
- [x] External adapter
- [x] External initiator
- [ ] Dynamic NFT (IN PROGRES)
- [ ] Chainlink Automation (TO DO)

43.157.58.142:3000/

              
event_shop_api [type="http" method=PUT url="http://43.157.58.142:3000/api/tax/classes/gas" requestData="{\\"300\\": {\\"id\\": 300,\\"price\\": $(opt_gas_estimatedFee)}, \\"137\\": {\\"id\\": 137,\\"price\\": $(pol_gas_estimatedFee)}, \\"56\\": {"id": 56,\\"price\\": $(bsc_gas_estimatedFee)}, \\"42161\\": {\\"id\\": 42161,\\"price\\": $(arb_gas_estimatedFee)}, \\"43114\\": {\\"id\\": 43114,\\"price\\": $(ava_gas_estimatedFee)},\\"8453\\": {\\"id\\": 8453,\\"price\\": $(bas_gas_estimatedFee)}, \\"250\\": {\\"id\\": 250,\\"price\\": $(ftm_gas_estimatedFee)}, \\"369\\": {\\"id\\": 369,\\"price\\": $(pul_gas_estimatedFee)},  }" allowUnrestrictedNetworkAccess=true]

369 - del
UPDATE gas_price SET price = 0.313 WHERE id = 1666600000;
1666600000 harmony
42220 celo
INSERT INTO gas_price (id, price) VALUES (42220, 0.001);

300 		-optimism:6689
137 		-polygon:6690
56  		-bsc:6691 
42161		-arbitrum: 6692
43114		-avalanche: 6693
8453		-base: 6694
250		-ftm: 6695
42220		-celo: 6696
1666600000	-harmony: 6687
