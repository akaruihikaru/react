// [Object]

var typeobject = {
    nama: 'Geraldi Tho',
    buah: ['mangga', 'jeruk'],
    tambah: function tambah(a, b) {
        return a + b;
    },
    iniobjectlagi: {
        surnama: 'Wira Kusuma'
    }
};

// [Output]
console.log(typeobject);
console.log(typeobject.buah[1]);
console.log(typeobject['buah'][0]);
console.log(typeobject['iniobjectlagi']['surnama']);
