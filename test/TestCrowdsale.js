var NobosToken = artifacts.require("NobosToken");
var NobosCrowdsale = artifacts.require("NobosCrowdsale");

contract('NobosCrowdsale', function(accounts) {
    it('should deploy the token and store the address', function(done){
        NobosCrowdsale.deployed().then(async function(instance) {
            const token = await instance.token.call();
            assert(token, 'Token address couldn\'t be stored');
            done();
       });
    });
});