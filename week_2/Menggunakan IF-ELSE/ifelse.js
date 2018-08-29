var nama = "danu"
var peran = "penyihir"
if (nama == "mikael" && peran == "" || nama == "nina" && peran == "" || nama == "danu" && peran == "" || nama == "zero" && peran == "") {
  console.log("halo " + nama + " Pilih peranmu untuk memulai game!");
} else if (nama == "mikael" && peran == "ksatria" || nama == "nina" && peran == "ksatria" || nama == "danu" && peran == "ksatria" || nama == "zero" && peran == "ksatria") {
  console.log("Selamat datang di Dunia Proxytia, " + nama + ".\n" + "Halo " + peran +" "+ nama + ", kamu dapat menyerang dengan senjatamu!");
} else if (nama == "mikael" && peran == "tabib" || nama == "nina" && peran == "tabib" || nama == "danu" && peran == "tabib" || nama == "zero" && peran == "tabib") {
  console.log("Selamat datang di Dunia Proxytia, " + nama + ".\n" + "Halo " + peran +" "+ nama + ", kamu akan membantu temanmu yang terluka.");
} else if (nama == "mikael" && peran == "penyihir" || nama == "nina" && peran == "penyihir" || nama == "danu" && peran == "penyihir" || nama == "zero" && peran == "penyihir") {
  console.log("Selamat datang di Dunia Proxytia, " + nama + ".\n" + "Halo " + peran +" "+ nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
} else if (nama == "" && peran == "ksatria" || nama == "" && peran == "tabib" || nama == "" && peran == "penyihir") {
  console.log("halo " + peran + " Pilih namamu untuk memulai game!");
} else {
  console.log("Pilih nama dan peran yang paling sesuai dengan karaktermu.")
}