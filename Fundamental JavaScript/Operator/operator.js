//Operator itu intinya membandingkan / menginisialisasikan
let b = 219;
let d = 231;
b += d; //artinya gini b = b + d;
d *= b; //sama bedanya cuma di kali
console.log(b);
console.log(d);

//comparison operator
/*
    ==	    : membandingkan kedua nilai apakah sama tapi tidak identik
    !=      : Membandingkan kedua nilai apakah tidak sama tapi tidak identik
    ===	    : Membandingkan kedua nilai apakah identik
    !==	    : Membandingkan kedua nilai apakah tidak identik
    identik : maksudnya itu sama sampe ke tipe datanya
    >	    : Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua
    >=	    : Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua
    <	    : Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua
    <=	    : Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua
    */

let angkaString = "30"; //ini kan dibacanya string
let angkaNumber = 30; //terus ini dibacanya number kan

console.log(angkaString == angkaNumber); //maka ini true, karna kan nilainya sama sama 30
console.log(angkaString === angkaNumber); //terus ini false, kan nilai doang sama, tipe datanya ngga

//operator logika
/*
    &&  : semuanya harus terpenuhi
    ||  : salah satu terpenuhi gapapa
    !   : tidak, untuk membalikkan kondisi aja keknya
    */
let bb = 100;
let dd = 50;

//contoh operator &&
console.log(bb > 80 && dd < 60); //true, karna terpenuhi semua
console.log(bb < 150 && dd > 51); //false, karna salah satu tidak terpenuhi

//contoh operator ||
console.log(bb < 150 || dd > 51); //true, karna salah satu terpenuhi

//contoh operator !
console.log(!(bb > dd)); //kan aslinya ini true tapi dibalik pake !, jadinya false
