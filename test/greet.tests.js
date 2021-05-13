// console.log (greet("Pfariso"))

describe('Test my greet function' , function(){
    it("it should return 'Hello, Pfariso' when called with 'Pfariso' " , function(){
        assert.equal('Hello, Pfariso', greet("Pfariso"), "this should not be true");
    });

});

describe('Test my greet function' , function(){
    it("it should return 'Hello, Teboho' when called with 'Teboho' " , function(){
        assert.equal('Hello, Teboho', greet("Teboho"), "this should not be true");
    });

});