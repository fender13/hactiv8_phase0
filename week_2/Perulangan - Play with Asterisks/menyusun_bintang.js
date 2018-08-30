// Jika row = 5

var row = 0
while (row < 5) {
  console.log ("*");
  star++
} 
console.log("row");

// Jika row = 5 dengan NESTED LOOP

var row = 5;
var i = 0;

while (i < row) {
  var asteriks = '*';
  var j = 1;
  while (j < row) {
    asteriks = asteriks + '*';
    j++;
  }
  console.log(asteriks);
  i++;
}

// Membuat piramig dengan NESTED LOOP

var row = 5;
var i = 0;

while (i < row) {
  var pyramid = '*';
  var j = 0;
  while (j < i) {
    pyramid = pyramid + '*';
    j++;
  }
  console.log(pyramid);
  i++;
}
