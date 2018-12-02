// La fonctin pour ajouter deux nombres
const additioner = function (x, y) {
    return (+x) + (+y);
}

// La fonctin pour soustraire deux nombres
const soustraire = function (x, y) {
    return (+x) - (+y);
}

// fonction qui multiplie deux nombres
const multiplier = function(x,y) {
  return (+x) * (+y);
}

// fonction qui divise deux nombres
const diviser = function(x,y) {
  return (+x) / (+y);
}

// fonction qui vérifie si un des nombres n'est pas un entier
var verifier1 = function(x,y){
  if (isNaN(x) | isNaN(y)) {
      return true;
  }
 return false;
}

var verifier2 = function(x,y){
  if (isNaN(x) & isNaN(y)) {
    return true;
  }
  return false;
}

// Rend les fonctions disponible pour être facilement appelées ailleurs dans le programme
module.exports = {
    additioner,
    soustraire,
    multiplier,
    diviser,
    verifier1,
    verifier2
}
