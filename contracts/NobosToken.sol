pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";


contract NobosToken is MintableToken {

    string public constant name = "Nobos Token";
    string public constant symbol = "NOBOS";
    uint8 public constant decimals = 18;
}