//loop itu perulangan, kaya misal kita menemui suatu kondisi yang memungkinkan kondisi tersebut harus diulang bbrapa kali, maka jangan ngetik syntax nya berkali kali, pake loop aja
//loop yang paling sering digunakan itu ada tiga : for loop, while, dan do while, ada juga for of sama infinite loop

//for loop
for (let b = 0; b < 10; b++) {
  console.log("billy");
} //gini, kan aku bikin variabel b yang nilainya 0 kan, terus b nya itu kurang dari 10, maka b nya akan diulang terus sampai 10kali, knp 10?kann aku mulainya dari 0, jadi 0-9 ttep aja 10, kalo misal menggunakan <= maka akan diulang sebanyak 11kali, gituuuu

//for of loop
let arrayKu = ["Aku", "Masih", "Belajar", "javaScript"];

for (const tampilArray of arrayKu) {
  console.log(tampilArray);
} //nah jadi intinya itu menurutku for of itu digunakan lebih ke array aja si, biar lebih gampang gitu, nnti kondisinya ngikut sama index arraynya

//while
let bb = 1;
while (bb <= 100) {
  console.log(bb);
  bb++;
} // sama kaya for tapi bedanya adalah kondisi yang di while akan dieksekusi ketika bernilai true aja, tapi ketika false maka loop nya bakal infinite loop, coba aja kalo gapercaya, ini lebih cocok ketika kita masih gtau mau diulang berapa kali

//do while
let dw = 1;
do {
  console.log(dw);
  dw++;
} while (dw <= 50);
