// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "./CantToken.sol";

contract CantTokenV2 is CantToken {
    function increment() public {
        store(retrieve() + 1);
    }
    
    function version() public virtual override pure returns (string memory) {
        return "2.0.0";
    }
}