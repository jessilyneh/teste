// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  var i = 1;
  var max = i;
  var data = {};

  for (var i in A) {
    data[A[i]] = A[i];
  }

  console.log(data);

  while (true) {
    if (!data[i]) {
      max = i;
      break;
    }

    i++;
  }

  return max;
}

var d = [];

for (var k = 0; k <= 100000; k++) {
  d.push(k);
}

console.log(solution(d));
