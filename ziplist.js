const a1 = ['a', 'b', 'c'];
const a2 = [1, 2, 3];

function zipList(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr2.length; i++) {
    newArr.push(arr1[i]);
    newArr.push(arr2[i]);
  }
  return newArr;
}

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

console.log(zipList(a1, a2));
console.log(zipListTheSimpleWay(a1, a2));
