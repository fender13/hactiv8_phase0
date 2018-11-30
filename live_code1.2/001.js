/**
  Kompetensi: Berpikir secara terstruktur dalam menyelesaikan masalah (algoritma)

  Buatlah pseudocode untuk kasus berikut:

  Sebuah taman bermain akan memberikan tarif sesuai dengan tinggi dan umur anak
  dengan ketentuan sebagai berikut:
  - Umur 2-3 tahun: Rp 20.000. Jika tinggi anak umur 2-3 tahun melebih 70cm maka tarif akan bertambah 10.000
  - Umur 4-7 tahun: Rp 35.000. Jika tinggi anak umur 4-7 tahun melebih 120cm maka tarif akan bertambah 15.000
  - Umur 8-10 tahun: Rp 50.000. Jika tinggi anak umur 8-10 tahun melebih 150cm maka tarif akan bertambah 20.000

  Tampilkan tarif harga sesuai umur dan tinggi seorang anak

**/


//WRITE YOUR PSEUDOCODE HERE

store umur with any number between 2 - 10
store tinggi with any number

jika umur lebih tinggi dari 1 dan umur lebih kecil dari 4 dan juga tinggi lebih kecil dari pada 70 
  tampilkan 'biaya adalah 20000'

dan jika umur lebih tinggi dari 1 dan umur lebih kecil dari 4 dan juga tinggi lebih besar dari pada 70 dan lebih kecil dari pada 120
  tampilkan 'biaya adalah 20000 + 10000'

dan jika umur lebih tinggi dari 3 dan umur lebih kecil dari 8 dan juga tinggi lebih kecil dari pada 120 
  tampilkan 'biaya adalah 35000'

dan jika umur lebih tinggi dari 3 dan umur lebih kecil dari 8 dan juga tinggi lebih besar dari pada 120 dan lebih kecil dari pada 150
  tampilkan 'biaya adalah 35000 + 15000'

dan jika umur lebih tinggi dari 7 dan umur lebih kecil dari 11 dan juga tinggi lebih kecil dari pada 150 
  tampilkan 'biaya adalah 50000'

dan jika umur lebih tinggi dari 7 dan umur lebih kecil dari 11 dan juga tinggi lebih besar dari pada 150
  tampilkan 'biaya adalah 50000 + 20000'