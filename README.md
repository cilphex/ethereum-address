# ethereum-address

Ethereum address validation

This is a clone of the [web3.js](https://github.com/ethereum/web3.js)
[`isAddress`](https://github.com/ethereum/web3.js/blob/master/lib/utils/utils.js)
utility method, but without the rest of web3.js.

## Install

```
npm install ethereum-address
```

## Usage

```javascript
var ethereum_address = require('ethereum-address');

if (ethereum_address.isAddress(value)) {
  console.log('Valid ethereum address.');
}
else {
  console.log('Invalid Ethereum address.');
}
```

## API

### isAddress (address)

Returns true if the address (string) is an Ethereum address

### isChecksumAddress (address)

Returns true if the address (string) is an Ethereum checksum address
