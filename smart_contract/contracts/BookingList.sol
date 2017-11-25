pragma solidity ^0.4.15;

contract BookingList {

  struct Review {
    bytes32 roomId;
    uint rate;
    bytes32 comment;
  }

  bytes32[] public bookingList;
  Review[] public reviews;

  function addNewBooking(bytes32 newBooking) public returns (uint256) {
    bookingList.push(newBooking);
    return bookingList.length;
  }

  function getBookingInfoByKey(uint256 index) public constant returns (bytes32) {
    return bookingList[index];
  }

  function addNewReview(bytes32 roomId, uint rate, bytes32 comment) public returns (uint256) {
    reviews.push(Review(roomId, rate, comment));
    return reviews.length;
  }
}