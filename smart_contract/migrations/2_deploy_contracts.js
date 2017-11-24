var BookingList = artifacts.require("./BookingList.sol");

module.exports = function(deployer) {
  deployer.deploy(BookingList);
};