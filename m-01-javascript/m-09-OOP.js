// [OOP Object Oriented Programming]


class Mobil {

    // Yang pertama kali dijalankan waktu memanggil class ini
    constructor(namaMerek) {
        this.merk = namaMerek;
    }

    // property
    roda = 4;
    merk = '';

    // method
    nama(noTelolet = 'Telolet') {
        return noTelolet;
    }
}

var mobil = new Mobil("Mercedes");
console.log(mobil.merk);
console.log(mobil.nama('Jampi Jampu'));



