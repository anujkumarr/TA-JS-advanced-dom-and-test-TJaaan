// var a = 1;
// var b = 2;

const a = 1;
console.log(a);

const b = 2;
console.log(b);

// var count = 1;
// if (true) {
//   count += 1;
// }

let count = 1;
if (true) {
  count += 1;
  console.log(count);
}

// const item = new Object();
const item = {};
console.log(item);

// const atom = {
//   value: 1,

//   addValue: function (value) {
//     return atom.value + value;
//   },
// };

const atom = {
  value: 1,

  addValue(value) {
    return atom.value + value;
  },
};

// const obj = {
//   lukeSkywalker: lukeSkywalker,
// };

const obj = {
  value: 'lukeSkywalker',
};
console.log(obj);

// const bad = {
//   foo: 3,
//   bar: 4,
//   'data-blah': 5,
// };

const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
};
console.log(good);

// const items = new Array();

const items = [];
console.log(items);

// Examples

// 1.

// var num = 10;

// var increaseNumber = () => num++;
// var increasePassedNumber = (number) => number++;

// var num1 = increaseNumber();
// var num2 = increasePassedNumber(num1);

// console.log(num1);
// console.log(num2);
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = (number) => number++;
const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);

// 2.

const animalMethods = {
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation(newLocation) {
    this.location = newLocation;
    return this.location;
  },
  summary() {
    console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`);
  },
};

function createAnimal(location, numberOfLegs) {
  const obj = Object.create(animalMethods);
  obj.location = location;
  obj.numberOfLegs = numberOfLegs;
  return obj;
}

function createDog(location, numberOfLegs, name, color) {
  const obj = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(obj, dogsMethods);
  obj.name = name;
  obj.color = color;
  return obj;
}

const dogsMethods = {
  bark() {
    alert(`I am ${this.name} and I can bark 🐶`);
  },
  changeName(name) {
    this.name = name;
    return this.name;
  },
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  },
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};

Object.setPrototypeOf(dogsMethods, animalMethods);

function createCat(location, numberOfLegs, name, colorOfEyes) {
  const obj = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(obj, catsMethods);
  obj.name = name;
  obj.color = colorOfEyes;
  return obj;
}
const catsMethods = {
  meow() {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  },
  changeName(name) {
    this.name = name;
    return this.name;
  },
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  },
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
};
Object.setPrototypeOf(catsMethods, animalMethods);


3.


const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

const obj2 = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

4.


function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}