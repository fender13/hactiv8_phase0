// Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

// Barang-barang SALE yang akan dihitung penjualannya:

//     Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
//     Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
//     Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1

// Function akan menerima array yang berisikan object pembeli (nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya). 
// Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

// Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek barang dari toko X tersebut 
// yang berisikan info nama barang, siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut

function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    
    // you can only write your code here!
  
    var stok = []
    for (i = 0; i < listBarang.length; i++) {
      // console.log(listBarang[i])
      var objectGudang = {}
      objectGudang.product = listBarang[i][0]
      objectGudang.shoppers = []
      objectGudang.leftOver = listBarang[i][2]
      objectGudang.totalProfit = 0
      stok.push(objectGudang)
    } 
    // console.log(stok)
  
    for (j = 0; j < shoppers.length; j++) {
      // console.log(shoppers[j])
      var namaProduct = shoppers[j].product
      var namaPembeli = shoppers[j].name
      var unitBeli = shoppers[j].amount
  
      var sepatu = stok[0]
      var baju = stok[1]
      var sweater = stok[2]
  
      if (namaProduct === sepatu.product && unitBeli <= sepatu.leftOver) {
        sepatu.shoppers.push(namaPembeli)
        sepatu.leftOver = sepatu.leftOver - unitBeli
        sepatu.totalProfit = sepatu.totalProfit + (unitBeli * listBarang[0][1])
      }
  
      if (namaProduct === baju.product && unitBeli <= baju.leftOver) {
        baju.shoppers.push(namaPembeli)
        baju.leftOver = baju.leftOver - unitBeli
        baju.totalProfit = baju.totalProfit + (unitBeli * listBarang[1][1])
      }
  
      if (namaProduct === sweater.product && unitBeli <= sweater.leftOver) {
        sweater.shoppers.push(namaPembeli)
        sweater.leftOver = sweater.leftOver - unitBeli
        sweater.totalProfit = sweater.totalProfit + (unitBeli * listBarang[2][1])
      }
  
  
  
    }
  
     
    return stok
  
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]