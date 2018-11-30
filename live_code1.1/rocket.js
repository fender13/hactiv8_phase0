/*
Instruksi
=========
Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row.
Function tidak perlu mengembalikan nilai (tidak perlu ada return).

Contoh 1
--------
input: 3
x
xo
x

Contoh 2
--------
input: 6
tampilan:
x
xo
xox
xox
xo
x

*/

var input = 6

for (i = 1; i <= input; i++) {
    var baris = ''
    for (j = 1; j <= i && j <= (input - i) + 1; j++) {
        if (j % 2 != 0) {
            baris = baris + 'o'
        } else {
            baris = baris + 'x'
        }
    } console.log(i + ' ' + j + ' ' +baris)
}