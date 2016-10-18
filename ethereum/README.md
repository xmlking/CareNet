Ethereum Setup
==============
Ethereum private net setup and testing

### Install

```bash
brew update
brew upgrade

brew tap ethereum/ethereum
brew install ethereum
# need xcode 8
brew install solidity
brew linkapps solidity
# Verify installation
geth version
solc --version
```

Download and install your platform specific **Ethereum Wallet** from:
https://github.com/ethereum/mist/releases

### Initial Setup
```bash
cd ethereum

# create `.password` file with your password in it and a new line.
touch .password

# Create two new accounts. This will create `data/keystore`
geth --datadir data --password .password account new
geth --datadir data --password .password account new

# init genesis block. This will create `data/chaindata`
# update new account IDs in genesis.json before running this command.
geth --datadir data init genesis.json
```

### Run 
Start private network with singe node
```bash
geth    \
        --rpc --ws --rpccorsdomain "*" \
        --mine --minerthreads 1  \
        --ipcpath ~/Library/Ethereum/geth.ipc --datadir data  \
        --networkid 1337 --nodiscover --maxpeers 0  \
        --unlock 0 --password .password
        
# if you want to run in background
nohup geth \
        --rpc --ws --rpccorsdomain "*" \
        --mine --minerthreads 1  \
        --ipcpath ~/Library/Ethereum/geth.ipc --datadir data  \
        --networkid 1337 --nodiscover --maxpeers 0  \
        --unlock 0 --password .password 2>> logs/geth.log &
```

### Deploy
Deploying a contract via the geth CLI 
 
Leave your original terminal window running, and in an another window type:
```bash
cd ethereum
geth attach 
```

Test if compiler is installed 
```bash
eth.getCompilers()
```

#### Compiling contract
```bash
var greeterSource = 'contract mortal { address owner; function mortal() { owner = msg.sender; } function kill() { if (msg.sender == owner) selfdestruct(owner); } } contract greeter is mortal { string greeting; function greeter(string _greeting) public { greeting = _greeting; } function greet() constant returns (string) { return greeting; } }'
var greeterCompiled = web3.eth.compile.solidity(greeterSource)

# deployment
var _greeting = "Hello World!"
var greeterContract = web3.eth.contract(greeterCompiled.greeter.info.abiDefinition);

var greeter = greeterContract.new(_greeting,{from:web3.eth.accounts[0], data: greeterCompiled.greeter.code, gas: 300000}, function(e, contract){
      if(!e) {
  
        if(!contract.address) {
          console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
  
        } else {
          console.log("Contract mined! Address: " + contract.address);
          console.log(contract);
        }
  
      }
  })
``` 

#### Run the contract
wait for `Contract mined! Address: 0x.....`
```bash
greeter.greet();
``` 
 

### Ethereum Wallet
After starting **geth** , you can open *Ethereum Wallet*. This will connect to your local private geth node.
As an alternative to *CLI*, you can also use *Ethereum Wallet* to deploy **smart contracts** and execute them
