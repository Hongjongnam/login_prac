// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

// import "./node_modules/openzeppelin-solidity/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
// import "./node_modules/openzeppelin-solidity/contracts/access/Ownable.sol";
// import "./node_modules/openzeppelin-solidity/contracts/utils/Strings.sol";

// contract ChanToken is ERC721Enumerable, Ownable {
//     uint public mint_price = 1 ether;
//     string public metadataURI;

//     constructor(string memory _name, string memory _symbol, string memory _metadataURI) ERC721(_name, _symbol){
//         metadataURI = _metadataURI;
//     }

//     function mintToken() public payable {
        
//         // require(msg.value >= mint_price);

//         // uint tokenId = totalSupply() + 1;
//         // payable(Ownable.owner()).transfer(msg.value);
//         // _mint(msg.sender, tokenId);
//     }
// }

contract ChanToken{
  uint256 private _count;
    event Count(uint256 count); // event를 등록하겠다는 뜻

    function current() public view returns(uint256){
        return _count;
    }

    function increment() public {
        _count += 1;
        emit Count(_count); // increment 함수가 실행되면 Count 이벤트를 실행시킬거야
    }

    function decrement() public {
        _count -= 1;
         emit Count(_count);
    }
    }