/*
The look-and-say sequence is defined as follows:

Its first term is equal to 1.
The nth term (for n > 1) is generated by reading the (n-1)th term.
Thus,

the second term is 11, generated by reading the first term as "One 1" (There is one 1 in previous term);
the third term is 21, generated by reading the second term as "Two 1";
the fourth term is 1211, generated by reading the third term as "One 2 One 1";
and so on.

Given some element of the look-and-say sequence, generate the next one.

Example

For element = "1", the output should be
lookAndSaySequenceNextElement(element) = "11";
For element = "1211", the output should be
lookAndSaySequenceNextElement(element) = "111221".
Input/Output

[execution time limit] 4 seconds (js)

[input] string element

A string of digits representing some element of the look-and-say sequence.

Guaranteed constraints:
1 ≤ element.length ≤ 65.
*/
function lookAndSaySequenceNextElement(element) {
  var result = '',
        chars = (element + ' ').split(''),
        lastChar = chars[0],
        times = 0;
 
    chars.forEach(function(nextChar) {
        if (nextChar === lastChar) {
            times++;
        }
        else {
            result += (times + '') + lastChar;
            lastChar = nextChar;
            times = 1;
        }
    });
 
    return result;
}
