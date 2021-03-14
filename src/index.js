
module.exports = function towelSort(matrix){
  var arr2 = [];
  if(matrix === undefined){
    return [];
  } else {
    for (i = 1; i < matrix.length; i+=2) {
  matrix[i].reverse();
  
}
for (i = 0; i < matrix.length; i++){
  for (j = 0; j < matrix[i].length; j++) {
    arr2.push(matrix[i][j]);
  
  }
}
return arr2
  }

}
