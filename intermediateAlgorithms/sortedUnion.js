/* 
Intermediate Algorithm Scripting: Sorted Union
Write a
function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests
for examples.

Remember to use Read - Search - Ask
if you get stuck.Try to pair program.Write your own code.

Passed
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should
return [1, 3, 2, 5, 4].
Passed
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should
return [1, 3, 2, [5],
    [4]
].
Passed
uniteUnique([1, 2, 3], [5, 2, 1]) should
return [1, 2, 3, 5].
Passed
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should
return [1, 2, 3, 5, 4, 6, 7, 8].
*/

function uniteUnique(...arr) { // the point is here, they give me just 'arr' as a parameter but the arguments have more than one array, it makes people confused, so you need to use rest parameter with 3 dots ...
    let merged = Array.prototype.concat.apply([], arr); // converts 2D array into one
    console.log(merged) // [1,3,2,5,2,1,4,2,1]
    let temp = new Set(merged); // get the unique values, removes all the duplicated values.
    let rs = [...temp]; // converts Set to array
    return rs; // return rs
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));