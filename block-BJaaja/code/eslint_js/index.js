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

// 2

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
  // eslint-disable-next-line no-shadow
  const obj = Object.create(animalMethods);
  obj.location = location;
  obj.numberOfLegs = numberOfLegs;
  return obj;
}
const dogsMethods = {
  bark() {
    // eslint-disable-next-line no-alert
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

// eslint-disable-next-line no-unused-vars
function createDog(location, numberOfLegs, name, color) {
  // eslint-disable-next-line no-shadow
  const obj = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(obj, dogsMethods);
  obj.name = name;
  obj.color = color;
  return obj;
}

const catsMethods = {
  meow() {
    // eslint-disable-next-line no-alert
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

Object.setPrototypeOf(dogsMethods, animalMethods);

function createCat(location, numberOfLegs, name, colorOfEyes) {
  // eslint-disable-next-line no-shadow
  const obj = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(obj, catsMethods);
  obj.name = name;
  obj.color = colorOfEyes;
  return obj;
}

Object.setPrototypeOf(catsMethods, animalMethods);

createCat('Mumbai', 4, 'jimmy', 'red');

// 3

const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalkerAgain = 'Luke Skywalker';

// eslint-disable-next-line no-unused-vars
const obj1 = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalkerAgain,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// 4

// eslint-disable-next-line no-shadow
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

getFullName('John');
