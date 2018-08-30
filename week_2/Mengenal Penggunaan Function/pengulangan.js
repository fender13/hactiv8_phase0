// Opsi 1 - Shoutout

function shoutOut(){
    console.log('Halo Function!');
}

shoutOut();
  
// Opsi 2 - Shoutout
  
function shoutOut(){
    return "Halo Function!"
}

console.log(shoutOut())

// Opsi 1 - Calculate Multiply

var num1 = 5
var num2 = 6

function calculateMultiply(num1,num2) {
    var multiply
    multiply = num1 * num2
    return multiply
}

var hasilPerkalian = calculateMultiply(num1,num2)
console.log(hasilPerkalian)

// Opsi 2 - Calculate Multiply

function calculateMultiply() {
    var num1 = 5
    var num2 = 6
    hasilPerkalian = num1 * num2
    console.log(hasilPerkalian)
}

var hasilperkalian = calculateMultiply()
console.log(hasilperkalian)

// Proses Sentences

function processSentence() {
    var name = "Agus";
    var age = 30;
    var address = "Jln. Malioboro, Yogjakarta";
    var hobby = "gaming";
    fullSentence = "Nama saya " + name + ", " + "umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!"
    console.log(fullSentence)
}
  
var fullSentence = processSentence()
console.log(fullSentence)