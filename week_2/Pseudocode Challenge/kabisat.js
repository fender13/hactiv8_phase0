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
