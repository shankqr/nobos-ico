pragma solidity ^0.4.21;

import "./NobosToken.sol";
import "zeppelin-solidity/contracts/crowdsale/validation/TimedCrowdsale.sol";
import "zeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol";


contract NobosCrowdsale is TimedCrowdsale, MintedCrowdsale {

  function NobosCrowdsale(uint256 _openingTime, uint256 _closingTime, uint256 _rate, address _wallet) public
    Crowdsale(_rate, _wallet, createTokenContract())
    TimedCrowdsale(_openingTime, _closingTime)
  {

  }

  function createTokenContract() internal returns (MintableToken) {
    return new NobosToken();
  }

}