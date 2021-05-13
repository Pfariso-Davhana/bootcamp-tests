describe('Test my isFromBellville function' , function(){
    it("it should return 'true' if  isFromBellville, ('CY')" , function(){
        assert.equal(true, isFromBellville("CY"))
    });
    it("it should return 'false' if  isFromBellville, ('Ci')" , function(){
        assert.equal(false, isFromBellville("Ci")) 
    })
}); 