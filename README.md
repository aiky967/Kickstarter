# Kickstarter

## The Problem
To Increase Transparency and Prevent Fraudulent Activities that arise around the world of StartUps and Platforms that have till now been developed around it such as **Kickstarter**. 
Although stringent measures such as symmetric encryption are in place to make e-payment safe and secure, it is still vulnerable to hacking.
Enterprises with in-house e-payment systems must incur additional costs in procuring, installing and maintaining sophisticated payment-security technologies.
There is no guarantee that people who post projects on Kickstarter will deliver on their projects, use the money to implement their projects, or that the completed projects will meet backers' expectations.
A mockup of [KickStarter](https://www.kickstarter.com/) built using smart contracts written in solidity. The app is built using Reactjs with the help of Nextjs.

## What We Propose
Making transaction histories more transparent and secure through the use of blockchain technology. Because Blockchain is a type of distributed ledger, all network participants share the same documentation as opposed to individual copies.
Contributors can decide Where to invest and can Acknowledge the requests for money made by the Project Creators through their votes.The creator can only use the money if a minimum number of contributors approve a certain request. It will make sure the money is used for Necessities rather than Luxuries.

## Demo Screenshots


***Create Campaign***
![demo3](https://github.com/aiky967/Kickstarter/blob/master/Screenshots/createCampaign.png)


***Create Request***
![demo4](https://github.com/aiky967/Kickstarter/blob/master/Screenshots/createRequest.png)


## Installation

### Install Git
* Follow instructions from [Git Website](https://git-scm.com/downloads)

### Install NodeJs and NPM
* Follow instructions from [NodeJs Website](https://nodejs.org/en/download/)

### Cloning Repository and Installation
* Open Command Prompt in the Directory You Want to Install.
* Clone the Repository
```bash
git clone https://github.com/aiky967/Kickstarter.git
```
* Change working Directory to the Repository
```bash
cd Kickstarter
```
* Install Dependencies
```bash
npm install
```
* Change SEED PHRASE in deploy.js with your Metamask seed and INFURA API KEY in web3.js also with your infura key
  
* Change working directory to ethereum
```bash
node compile.js
node deploy.js
```
* Change deployed address at factory.js with address contract deployed to
  
* Return to the Kickstarter working directory

* Initiate the NodeJs server
```bash
npm run dev
```
* Access the [Application](http://localhost:3000)

### Technology Stack
* ReactJs
* Solidity
* Ethereum Smart Contract

## Features
#### Secure Investment
Information is stored across a network of computers instead of on a single server, makes it very difficult for hackers to compromise the transaction data.
#### Voting Power for Investors
The creator can only use the money if a minimum number of contributors approve a certain request. It will make sure the money is used for Necessities rather than Luxuries.
#### Profit Distribution
The owner of the startup is required to periodically enter details about revenue generation. Any profit that is generated is automatically distributed  among the investors providing investors with additional layer of security of interests of investors.
#### Machine Learning
Generating of finance related parameters such as gross profit, liquidity ratio, quick asset ratio etc. to produce a graph of these metrics and using Machine Learning Techniques(XGBoost, Random Forest Classifaction) to model performance of these Startups aiding them to make investment choices.
