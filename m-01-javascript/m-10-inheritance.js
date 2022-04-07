// [Inheritance]

class Mobil {

    // Yang pertama kali dijalankan waktu memanggil class ini
    constructor(merek, roda) {
        this.merk = merek;
        this.roda = roda;
    }

    // property
    roda = 4;
    merk = '';

    // method
    nama(noTelolet = 'Telolet') {
        return noTelolet;
    }
    static say(test = 'Test') {
        return test;
    }
}

class Truck extends Mobil {
    constructor(roda) {
        super(roda);

    }

}

var truck = new Truck();

// console.log(truck.roda);
// console.log(truck.nama());

var car = new Mobil();
// console.log(Mobil.say());