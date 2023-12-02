# chainlink-hackathon-2023

## Short description of the project

The goal of the project is to create a Multi-Chain store serving IT events such as conferences, hackathons, meetups. Proof of purchase will be stored on the blockchain network additionally the user will receive a dynamic NFT token on which his achievements will be recorded. This token will be able to be part of his CV.

## What problem does the project solve?

1. Using the benefits of blockchain technology for users without cryptocurrency wallets, tokens, etc. Or not wanting to link their wallets.
2. The main parameter for selection of the network for recording the proof of purchase will be the approximate fee price of the last 10 minutes. The network with the lowest price will be selected for the transaction. This solution is to help avoid temporary high fees because the probability that there will be a high load on several/some networks at the same time is very low. Examples of fee price peaks on the polygon network:

![Polgon fees](https://github.com/issueslinux/chainlink-hackathon-2023/blob/main/polygon_fee.png)
https://polygonscan.com/chart/gasprice
