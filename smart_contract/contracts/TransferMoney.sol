pragma solidity ^0.4.4;

contract Owner {
  address public owner;
  mapping (address => uint) balances;

  function Owner() {
    owner = msg.sender;
    balances[owner] = 9999;
  }

  function transfer(address _to, uint _value) returns (bool success) {
    if (balances[msg.sender] < _value) {
      return false;
    }

    balances[msg.sender] -= _value;
    balances[_to] += _value;
    return true;
  }

  function getBalance(address _user) constant returns (uint balance) {
    return balances[_user];
  }
}
