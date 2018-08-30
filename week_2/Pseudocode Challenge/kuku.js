// var siswa = 40
// while
// if kuku panjang = hukuman
// if kuku pendek = pujian
// end while
// display


var text = "";
var i = 0;
var kuku_murid = ['panjang','pendek','pendek','panjang','panjang','pendek','pendek','panjang','panjang','pendek','pendek','panjang','panjang','pendek','pendek','panjang','panjang','pendek','pendek','panjang','panjang','pendek','pendek','panjang','panjang','pendek','pendek','panjang','panjang','pendek','pendek','panjang','panjang','pendek','pendek','panjang','panjang','pendek','pendek','panjang'];
while (i <= 40) {
    text += "<br>Siswa/siswi ke " + i +" kukunya = "+ kuku_murid[i];
    if(kuku_murid[i] == 'panjang'){
    	text += " => Hukum";
    }else{
    	text += " => Puji";
    }
    i++;
}