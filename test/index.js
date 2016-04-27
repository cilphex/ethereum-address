'use strict';

let assert = require('assert');
let ethereum_address = require('..');

describe('isAddress', () => {
  let bad_examples = [
    function () {},
    new Function(),
    'function',
    {},
  ];

  let good_examples = [
    '0xc6d9d2cd449a754c494264e1809c50e34d64562b',
    'c6d9d2cd449a754c494264e1809c50e34d64562b'
  ];

  it('should return false for invalid addresses', (done) => {
    bad_examples.forEach((example) => {
      assert.equal(ethereum_address.isAddress(example), false);
    });
    done();
  });

  it('should return true for valid addresses', (done) => {
    good_examples.forEach((example) => {
      assert.equal(ethereum_address.isAddress(example), true);
    });
    done();
  });
});

describe('isChecksumAddress', () => {
  let bad_examples = [
    '0XD1220A0CF47C7B9BE7A2E6BA89F429762E7B9ADB',
    '0xd1220a0cf47c7b9be7a2e6ba89f429762e7b9adb'
  ];

  let good_examples = [
    '0x52908400098527886E0F7030069857D2E4169EE7',
    '0x8617E340B3D01FA5F11F306F4090FD50E238070D',
    '0xde709f2102306220921060314715629080e2fb77',
    '0x27b1fdb04752bbc536007a920d24acb045561c26',
    '0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed',
    '0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359',
    '0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB',
    '0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb'
  ];

  it('should return false for invalid checksum addresses', (done) => {
    bad_examples.forEach((example) => {
      assert.equal(ethereum_address.isChecksumAddress(example), false);
    });
    done();
  });

  it('should return true for valid checksum addresses', (done) => {
    good_examples.forEach((example) => {
      assert.equal(ethereum_address.isChecksumAddress(example), true);
    });
    done();
  });
});
