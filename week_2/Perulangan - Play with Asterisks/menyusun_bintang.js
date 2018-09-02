// Jika row = 5

var row = 0;

while (row < 5) {
  console.log("*")
  row++
}

console.log(row)

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


// Segitiga siku-suku kanan

function baris(height) {

  for (var i = 1; i <= height; i++) {
    var bintang = "*"
      for (var j = 1; j <= (i - 1); j++) {
        bintang = bintang + "*" 
    } 
    console.log(bintang)
  }
}
baris(5)

// Segitiga siku-siku kiri

function segitigaSikuKiri(height) {

  for (var i = 1; i <= height; i++) {
    var bintang = " "
      for (var j = 1; j <= height - i; j++) {
        bintang = bintang + " " 
    } for (var k = 1; k <= i; k++) {
      bintang = bintang + "*"
    }
    console.log(bintang)
  }
}
segitigaSikuKiri(5)

