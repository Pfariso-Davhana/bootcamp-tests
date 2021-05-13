describe('this test should check any regNumber' , function(){
    it("it should return true if regLoc(''DV 23 NB GP', 'GP')" , function(){
        assert.equal(false, regCheck("'DV 23 NB GP', 'GP'"))
    })
    it("it should return 'false' if  regLoc, ('MP')" , function(){
        assert.equal(false, regCheck("MP"))
    })
    it("it should return 'false' if  isFrom, ('CY')" , function(){
        assert.equal(false, regCheck("CY"))
    })
    it("it should return 'false' if  isFrom, ('ND')" , function(){
        assert.equal(false, regCheck("ND"))

    })
}); 
