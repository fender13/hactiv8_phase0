/**
Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter
berupa angka yang merupakan ukuran waktu dalam menit.

Function akan me-return string waktu dalam format x jam x menit berdasarkan menit tersebut.

Contoh, jika menit adalah 63, maka function akan me-return "1 jam 3 menit".

**/

function konversiMenit(menit) {
  //your code here
  var jamMenit = 60
  var konversi = Math.floor(menit/jamMenit)
    // return konversi
  var sisaMenit = menit - (konversi * jamMenit)
  
  var full = ''


  if (sisaMenit <1) {
    full = (konversi + ' jam')
  } else if (sisaMenit < 10) {
    sisaMenit = sisaMenit.toString()
    full =  (konversi + ' jam ' + sisaMenit + ' menit')
  } else if (konversi < 1) {
    full = (sisaMenit + ' menit')
  } else {
    full =  (konversi + ' jam ' + sisaMenit + ' menit')
  }
  return full
}

// TEST CASES / DRIVER CODE
console.log(konversiMenit(63)); // 1 jam 3 menit
console.log(konversiMenit(124)); // 2 jam 4 menit
console.log(konversiMenit(53)); // 53 menit
console.log(konversiMenit(88)); // 1 jam 28 menit
console.log(konversiMenit(120)); // 2 jam
