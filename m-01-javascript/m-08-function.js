// [Function]

// membuat
function tambah(angka1, angka2) {
    return angka1 + angka2;
}

function bunyi() {
    console.log("Hongpong");
    return 'pongpong';
}

function kurang(angka1, angka2) {
    angka1 - angka2;
}

// pakai
// console.log(tambah(12, 43));
// bunyi();

var hasil = tambah(15, 32);
// console.log(hasil);

var thisangka = kurang(30, 2);
// console.log(thisangka);

// var thisbunyi = bunyi();
// console.log(thisbunyi);


///////// default parameter

function kali(angka1 = 2, angka2 = 3) {
    return angka1 * angka2;
}

var hasilPerkalian = kali(7);
console.log(hasilPerkalian); //NaN = Not A Number

function funcName(thisobject = { name: 'Geraldi' }) {
    return `my name is ${thisobject.name}`
}

var getName = funcName({ nama: 'Theo' });
console.log(getName);