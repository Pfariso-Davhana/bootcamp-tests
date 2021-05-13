var isGP = regCheck('DV 23 NB GP', 'GP');
var isMP = regCheck('DV 23 LP GP', 'MP');
var isBellville = isFrom('CY 189-012', 'CY');
var isDurban = isFrom('CY 189-012', 'ND');

function regCheck(regNo, regLoc){
    return(regNo.endsWith(regLoc))
   }