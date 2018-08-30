// Newton

// newtons = mass * scalar
// store 'mass' with 600
// store 'scalar with 2
// store 'newtons' with value
// calculate newtons
// set 'newtons' with calculation result

var mass = 600;
var scalar = 2;
var newtons = 0;
newtons = mass * scalar
console.log(newtons);

// Kabisat

// var merupakan year (number)
// var merupakan kabisat
// if kabisat = year % 4 == 0 && year % 100 != 0
// if kabisat = year % 4 == 0 && year % 100 = 0 && year % 400 = 0
// else ("Bukan Kabisat")

var year = 2000;
var kabisat;
if ((year % 4 == 0) && (year % 100 != 0)) {
  year = ("Kabisat");
} else if ((year % 4 == 0) && (year % 100 == 0)  && (year % 400 == 0)) {
  year = ("Kabisat");
} else {
  year = ("Bukan Kabisat");
}

// Laundry

// laundry start if 20 cloths in the laundry machine
// store cloth with 0
// if cloth <= 20
// display laundy not start
// add cloth with 1
// end 
// display laundry start

var cloths = 0
while (cloths < 20) {
  console.log ("Laundry Not Start");
  cloths++
} 
console.log ("LaundryStart");

// Kuku

// var siswa = 40
// while
// if kuku panjang = hukuman
// if kuku pendek = pujian
// end while
// display


var text = "";
var i = 0;
var kuku_murid = ['panjang','pendek','pendek','panjang','panjang','pendek','pendek','panjang','panjang','pendek','pendek','panjang','panjang','pendek','pendek','panjang','panjang','pendek','pendek','panjang','panjang','pendek','pendek','panjang','panjang','pendek','pendek','panjang','panjang','pendek','pendek','panjang','panjang','pendek','pendek','panjang','panjang','pendek','pendek','panjang'];
while (i <= 40) {
    text += "<br>Siswa/siswi ke " + i +" kukunya = "+ kuku_murid[i];
    if (kuku_murid [i] == 'panjang'){
      text += " => Hukum";
    } else{
      text += " => Puji";
  }
  i++;
}
