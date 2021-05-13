describe('this test should count regNumbers in a string' , function(){
    it("it should return the number of regNumbers in  string, (''CA 182736,CY 523519,CJ 812328'')" , function(){
        assert.equal(3, countRegNumber("'CA 182736,CY 523519,CJ 812328'"))
    });
}); 