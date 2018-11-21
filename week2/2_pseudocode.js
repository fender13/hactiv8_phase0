// Newton

  // natural lang

// Jika diketahui :
//   F = m * A 
//   dengan  F = 600
//           A = 2
//     Hitung gaya yang dihasilkan?

  // Algoritma

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

  // Natural Lang

// diketahui bahwa tanggal 29 februari merupakan tahun kabisat:
// kriteria tahun kabisat:
//   tahun habis di bagi 4 dan tidak habis di bagi 100
//   tahun habis di bagi 4, habis di bagi 100 dan habis di bagi 400

  // Algoritma

// store year (number)
// store kabisat
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

  // Natural Lang

// Diketahui akan cuci 20 baju
//   cuci tidak akan mulai jika baju belum masuk semua ke mesin

  // Algortima

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

  // Natural Lang

// Diketahui total siswa 40
// Guru keliling cek kuku kuku_murid
//   Jika ketemu kuku panjang = dihukum
//   Jika tidak panjang = dipuji

  // Algoritma

// store siswa = 40
// while
  // if kuku panjang = hukuman
  // if kuku pendek = pujian
// end while
// display siswa


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
