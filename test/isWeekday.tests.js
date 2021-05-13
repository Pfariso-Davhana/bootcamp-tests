describe('test if a parameter is a day of the week' , function(){
    it("it should return 'false' if  day startsWith, ('S')" , function(){
        assert.equal(false, isWeekday("S"))
    });
    it("it should return 'true' if  isWeekDay, ('M')" , function(){
        assert.equal(true, isWeekday("M")) 
    })
}); 