/**
Kompetensi: Conditional

Implementasikan pseudocode yang kamu telah buat di nomor 1 menjadi sintaks javascript.

**/

// SKELETON CODE (Code Sample)

var umur; // silakan berikan nilai bebas
var tinggi; // silakan berikan nilai bebas
//tambahkan variable lain jika diperlukan

//your code here

var umur = 8; 
var tinggi = 155;

var biaya1 = 20000
var biaya2 = 35000
var biaya3 = 50000

if (umur > 1 && umur < 4 && tinggi < 70) {
  console.log("biaya adalah " + biaya1)
} else if (umur > 1 && umur < 4 && tinggi > 70 && tinggi < 120) {
  console.log("biaya adalah " + (biaya1 + 10000))
} else if (umur > 3 && umur < 8 && tinggi < 120) {
  console.log("biaya adalah " + biaya2)
} else if (umur > 3 && umur < 8 && tinggi > 120 && tinggi < 150) {
  console.log("biaya adalah " + (biaya2 + 15000))
} else if (umur > 7 && umur < 11 && tinggi < 150) {
  console.log("biaya adalah " + biaya3)
} else {
  console.log("biaya adalah " + (biaya3 + 20000))
}
