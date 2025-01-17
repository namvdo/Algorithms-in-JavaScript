/* 
Define a multiplication table of size n by m as follows: such table consists of n rows and m columns. Cell on the intersection of the ith row and the jth column (i, j > 0) contains the value of i * j.

Given integers n and m, find the number of different values that are found in the table.

Example

For n = 3 and m = 2, the output should be
differentValuesInMultiplicationTable(n, m) = 5.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive integer.

Guaranteed constraints:
1 ≤ n ≤ 20.

[input] integer m

A positive integer.

Guaranteed constraints:
1 ≤ m ≤ 20.

*/

function differentValuesInMultiplicationTable(n, m) { 
    var result = 0; 
    for (var value = 1; value <= n * m; value++) { 
        for (var i = 1; i <= Math.min(n, m); i++) {
             if (Math.max(n, m) >= value / i && 0 === value % i) {
                  result++; break; 
                } 
            } 
        } 
        return result; 
}