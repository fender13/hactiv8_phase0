/**
  Kompetensi: Loopings

  Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
  Disediakan variable height dan akan membuat sebuah pola tangga menampilkan x ke samping di baris ganjil,
  dan o di baris genap.
  Buatlah sebuah tangga string dengan pola berikut:

  Contoh 1 (height = 3)
  ---------------------
  tampilan:
  x
  oo
  xxx

  Contoh 2 (height = 6)
  ----------------------
  tampilan:
  x
  oo
  xxx
  oooo
  xxxxx
  oooooo

  WAJIB MENGGUNAKAN LOOPING
**/

var height; //isi dengan nilai tangga

//your code here

var height = 6

for (i = 1; i <= height; i++) {
  var baris = ''
  // baris = baris + 'x'
  for (j = 1; j <= i; j++) {
    if (i % 2 == 0) {
      baris = baris + 'o'
    } else {
      baris = baris + 'x'
    } 
  } console.log(baris)
} 
