// [Ecmascript]

const cars = ["BMW", "Volvo", "Mini"];

// JS
for (let index = 0; index < cars.length; index++) {
    console.log(cars[index]);
}

// ES6
for (let car of cars) {
    console.log(car);
}