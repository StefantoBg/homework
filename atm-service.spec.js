const AtmServiceProvider = require("../src/atm-service-provider");
const assert = require('assert');

describe('AtmService', function () {

   

    before(function () {
        atmService = AtmServiceProvider.atmService;
    });

    it('Amount should be greater than zero', function () {
       let money=  atmService.withdraw('1234-5678-9012-3456',-10);
       console.log(money)
        assert(money,'Always fails');
       
    });
    
    it('Amount should be the multiple of the 10 USD', function () {
        let money= atmService.withdraw('1234-5678-9012-3456',123);
        console.log(money)
        assert(money,'Always fails');
       
    });
    
    it('Account Balance', function () {
        let money=atmService.withdraw('1234-5678-9012-3456',100);
        console.log(money)
        assert(money,'Always fails');
    });
    it('Successfull withdraw', function () {
        atmService.updateBalance('1234-5678-9012-3456',300);

        let money=atmService.withdraw('1234-5678-9012-3456',100);
        console.log(money)
        let moneyLeft=atmService.getBalance('1234-5678-9012-3456');
        console.log("Account ballance: "+ moneyLeft+ " USD");
        assert(money,'Success Withdraw');
        assert(moneyLeft == 200,"Less Correct amount")
    });
});
