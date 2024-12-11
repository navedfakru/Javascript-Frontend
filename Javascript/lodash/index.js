const _ = require('lodash')
// var array = [1];
// var other = _.concat(array, 2, [3], [[4]]);
// console.log(other)

// const diff = _.difference([1, 'a'], [1, 'c'])
// console.log(diff)

// const diffby = _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)
// console.log(diffby)

let objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 
let object =_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
console.log(object)