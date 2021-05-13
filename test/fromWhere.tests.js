describe('Test fromWhere function' , function(){
    it("it should return 'true' if  fromWhere startsWith, ('CY')" , function(){
        assert.equal(true, isFromBellville("CY"))
    });
    it("it should return 'Paarl' if  fromWhere startsWith, ('CJ')" , function(){
        assert.equal("Paarl", fromWhere("CJ")) 
    })
    it("it should return 'Cape Town' if  fromWhere startsWith, ('CA')" , function(){
        assert.equal("Cape Town", fromWhere("CA")) 
})
it("it should return 'Some other place' if  fromWhere startsWith, ('Ci')" , function(){
    assert.equal("Some other place!", fromWhere("Ci")) 
})
}); 