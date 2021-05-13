var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
assert.equal(regCount, 3)

function countRegNumber(regCount){
    return (regCount.split(',', 3).length)

}