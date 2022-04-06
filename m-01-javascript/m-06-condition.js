// [Condition]

////// Normal
var buah = 'apel';

if (buah == 'mangga') {
    console.log('INi Mangga');
} else {
    console.log("BUkan mangga");
}

////// Tidak Normal
var anak = false;
var anak = null;
var anak = undefined;
var anak;

// true / false
if (anak) {
    console.log('Ini', anak);
}



var angka = null;
var morethan10 = angka > 10 ? true : false;
console.log(morethan10);

var otherangka = angka ?? 'string';
console.log(otherangka);


