function uniteUnique(arr) {
  var newArr = [];
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
      let value = arguments[i][j];
      if (!newArr.includes(value)) {
        newArr.push(value);
      }
    }
  }
  return newArr;
}