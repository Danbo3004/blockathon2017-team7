pragma solidity ^0.4.15;

contract BookingList {

  function BookingList() {
  }

  mapping (bytes32 => string) bookingList;

  function addNewBooking(string newBooking, uint256 finalPrice, address refereeAddr) payable public returns (bytes32 bookingId) {
    if (msg.value < finalPrice) {
      return "";
    }
    // save new booking
    bookingId = keccak256(newBooking);
    bookingList[bookingId] = newBooking;
    
    // transfer placeholder money to referee
    refereeAddr.transfer(msg.value);
    
    return bookingId;
  }

  function getBookingInfoByKey(bytes32 key) public constant returns (string) {
    return bookingList[key];
  }
}
