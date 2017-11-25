pragma solidity ^0.4.15;

contract BookingList {

  struct Review {
    uint rate;
    bytes32 comment;
  }

  function BookingList() {
  }

  mapping (bytes32 => string) bookingList;

  mapping (bytes32 => Review[]) reviews;

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

  function addNewReview(bytes32 roomId, uint rate, bytes32 comment) public {
    var roomComments = reviews[roomId];
    roomComments.push(Review(rate, comment));
    reviews[roomId] = roomComments;
  }

  function getCommentsByRoomId(bytes32 roomId) public constant returns (uint[] rateArray, bytes32[] commentArray) {
    var roomComments = reviews[roomId];
    for(uint i = 0; i < roomComments.length; i++) {
      rateArray[i] = roomComments[i].rate;
      commentArray[i] = roomComments[i].comment;
    }
    return (rateArray, commentArray);
  }
}
