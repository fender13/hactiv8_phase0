// While Loop

var looping1 = 2
var looping2 = 20

console.log("LOOPING PERTAMA")
while (looping1 <= 20) {
  console.log(looping1 + " - I love coding")
  looping1 = looping1 + 2
} console.log("LOOPING KEDUA")
  while(looping2 > 0) {
  console.log(looping2 + " - I will become fullstack developer")
  looping2 = looping2 - 2
}

// For Loop

console.log("LOOPING PERTAMA")
for (var looping1 = 0; looping1 <= 20; looping1++) {
  console.log(looping1 + " - I love coding")
} console.log("LOOPING KEDUA")
  for (var looping2 = 20; looping2 > 0; looping2--) {
  console.log(looping2 + " - I will become fullstack developer")
}

// Ganjil - Genap

var counter = 1
while (counter <= 100) {
  if (counter % 2 == 0) {
    console.log(counter + " genap")
    } else {
    console.log(counter + " ganjil")  
  }
  counter = counter + 1
}
console.log(counter + " lebih dari 100")

// Pertambahan 2 dengan kelipanan 3

var counter = 1
while (counter <= 100) {
  if (counter % 3 == 0) {
    console.log(counter + " Kelipatan 3")
    } else {
    console.log(counter + "")  
  }
  counter = counter + 2
}
console.log(counter + " lebih dari 100")

// Pertambahan 5 dengan kelipatn 6

var counter = 1
while (counter <= 100) {
  if (counter % 6 == 0) {
    console.log(counter + " Kelipatan 6")
    } else {
    console.log(counter + "")  
  }
  counter = counter + 5
}
console.log(counter + " lebih dari 100")

// Pertambahan 9 dengan kelipatan 10

var counter = 1
while (counter <= 100) {
  if (counter % 10 == 0) {
    console.log(counter + " Kelipatan 10")
    } else {
    console.log(counter + "")  
  }
  counter = counter + 9
}
console.log(counter + " lebih dari 100")