const loadsh = require("lodash");
const moment = require("moment");



let data = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(data);

let day = moment().format('dddd');
console.log(day);

let my = moment().format("MMM Do YY");
console.log(my);


let date = `2020-01-01`;
var aDate   = moment(date.value, 'YYYY-MM-DD', true);
console.log(aDate.isValid());

let bDate = `2020-14-01`;

var isDate   = moment(bDate.value, 'YYYY-MM-DD', true);
console.log(isDate.isValid());


let new_date = moment().add(7, 'days').calendar();   
console.log(new_date);

let new_month = moment().add(7, 'month').calendar();   
console.log(new_month);

let new_year = moment().add(7, 'year').calendar();   
console.log(new_year);


let sub_date = moment().subtract(7, 'days').calendar();   
console.log(sub_date);

let sub_month = moment().subtract(7, 'month').calendar();   
console.log(sub_month);

let sub_year = moment().subtract(7, 'year').calendar();   
console.log(sub_year);

let a = moment(`2015-09-11`);
let b = moment(`2014-11-11`);

let final = a.diff(b, "months");
console.log(final)

let a2 = moment(`2015-09-16`);
let b2 = moment(`2014-11-27`);

let result = a2.diff(b2, "days");
console.log(result);


let date1 = "2020-01-01";
let date2 = "2018-01-01";

function isAfter(date1,date2) {
  return moment(date1).isAfter(date2);
};

console.log(isAfter(date1, date2));

let dateA = "2010-01-01";
let dateB = "2018-01-01";

function isBefore(date1, date2) {
  return moment(date1).isBefore(date2);
}

console.log(isBefore(dateA, dateB));

let lYear = "2019";
let lYear2 = "2020";

function isLeapYear(year) {
  return moment(year).isLeapYear();
}

console.log(isLeapYear(lYear));
console.log(isLeapYear(lYear2));



let arr = ["a", "b", "c", "d"];

let chunked = loadsh.chunk(arr, 2);

console.log(chunked);

let arr2 = ["a", "b", "", 0, false, true, 1, "c"];

let compactedArr = loadsh.compact(arr2);
console.log(compactedArr);

var array = [1];
var other = loadsh.concat(array, 2, [3], [[4]]).flat();
 
console.log(other);

console.log(loadsh.difference([2, 1], [2, 3]));

console.log(loadsh.drop([1, 2, 3], 2));
