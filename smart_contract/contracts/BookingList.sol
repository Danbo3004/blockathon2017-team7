pragma solidity ^0.4.14;

contract BookingList {

  struct BookingInfo {
    // user info
    bytes32 userId;
    // room properties
    bool isBreakfast;
    bool isWindowsView;
    bool isSmoking;
    bool isFreeCancellation;
    uint numOfSingleBeds;
    uint numOfDoubleBeds;
    uint numOfAdults;
    uint numOfChildren;
    uint area;
    // booking info
    bytes32 fromDate;
    bytes32 toDate;
    // price
    bytes32 finalPrice;
    // wallet address of referee
    address refereeAddr;
  }
    
  mapping (bytes32 => BookingInfo) bookingList;

  function BookingList() {
  }

  function addNewBooking (
                        // user info
                        bytes32 userId,
                        bool isBreakfast, bool isWindowsView, bool isSmoking, bool isFreeCancellation,
                        uint numOfSingleBeds, uint numOfDoubleBeds, uint numOfAdults, uint numOfChildren, uint area,
                        // booking info
                        bytes32 fromDate, bytes32 toDate,
                        // price
                        bytes32 finalPrice,
                        // wallet address of referee
                        address refereeAddr
                        ) payable public returns (bytes32 bookingId) 
  {
    // save new booking
    var bi = BookingInfo(userId, isBreakfast, isWindowsView, isSmoking, isFreeCancellation, numOfSingleBeds, numOfDoubleBeds, numOfAdults, numOfChildren, area, fromDate, toDate, finalPrice, refereeAddr);
    bookingId = keccak256(bi);
    bookingList[bookingId] = bi;
    
    // transfer placeholder money to referee
    refereeAddr.transfer(msg.value);

    return bookingId;
  }

  function getBookingInfoByKey(bytes32 key) public constant returns (
                                                              bytes32, 
                                                              bool, bool, bool, bool, 
                                                              uint, uint, uint, uint, uint,
                                                              bytes32, bytes32, bytes32,
                                                              address) 
  {
    return (
      bookingList[key].userId,
      bookingList[key].isBreakfast,
      bookingList[key].isWindowsView,
      bookingList[key].isSmoking,
      bookingList[key].isFreeCancellation,
      bookingList[key].numOfSingleBeds,
      bookingList[key].numOfDoubleBeds,
      bookingList[key].numOfAdults,
      bookingList[key].numOfChildren,
      bookingList[key].area,
      bookingList[key].fromDate,
      bookingList[key].toDate,
      bookingList[key].finalPrice,
      bookingList[key].refereeAddr
    );
  }
}
