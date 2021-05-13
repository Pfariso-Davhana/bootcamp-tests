describe("test transportFee amount required ", function(){
    it ("should return tansportfee amount", function() {
        
        assert.equal('R20', transportFee("morning"));
        assert.equal('R10', transportFee("afternoon"));
        assert.equal('free', transportFee("anytime"));
    }); 
});
