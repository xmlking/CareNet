CareNet
=======
Patients, Providers, Pharmacies and Payer's private blockchain network for payments.
> Proof of concept using Smart Contracts on Ethereum for education / investigation purposes only.


### Prerequisite
1. Install Gradle 3.0 via [SDKMAN](http://sdkman.io/)
2. Install Grails 3.2.0 via [SDKMAN](http://sdkman.io/)
3. Install node 6.6.0 via [NVM](https://github.com/creationix/nvm)

### Setup 
> First time setup instructions

1. Install and setup [MongoDB](./mongodb/).
2. Install and setup [Ethereum](./ethereum/) private network.
3. Install and setup [Trust Broker](./trust-broker/) Grails App.
4. Install and setup [Angular](./angular/) App.

### Start Order
1. Start [MongoDB](./mongodb/) (cd mongodb; mongod -f ./mongod.yml)
2. Start [ethereum](./ethereum/)
3. Start [Trust Broker](./trust-broker/) (gradle trust-broker:bootRun)
4. Start [Angular](./angular/) (cd angular; ng serve)



### TODO
- [ ] Deploy [payments.sol](./ethereum/contracts/payments.sol)




