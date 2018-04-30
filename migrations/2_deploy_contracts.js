var NobosCrowdsale = artifacts.require("NobosCrowdsale");

const startTime = Math.round((new Date().getTime() + (60000 * 3))/1000); // Today + 5 minute
const endTime = Math.round((new Date().getTime() + (86400000 * 20))/1000); // Today + 20 days

module.exports = function(deployer) {
  deployer.deploy(NobosCrowdsale, startTime, endTime, 10, 
    0x162678C85aaDc397cd8d33f68e9dbba611e8C1C2);
}