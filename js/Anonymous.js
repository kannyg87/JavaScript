// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

// var array = [1,-2,3];
// var newArray = array.filter(function(index){
//     return index>0;
// })
// console.log(newArray);

// 2-Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.

// var array =[1,2,3];
// var newArray =array.filter(function(val){
//     return val/2%1;
//return num%===0
//     })
//     console.log(newArray);


// 3-Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

// var array = [1,2,3]
// array.forEach(function(element){
// console.log(element*element);
// })

// 4-Write a function which takes an array of city objects like such:
// as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.

// var cities = [
//     { name: 'Los Angeles', temperature: 60},
//     { name: 'Atlanta', temperature: 52 },
//     { name: 'Detroit', temperature: 48 },
//     { name: 'New York', temperature: 80} ];

//     var temp = cities.filter(function(obj){
//         return obj.temperature>70;
//     })
//     console.log(temp);

// 5-Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names.
// var temp = cities.map(function(obj){
//             return obj.name;
//         })
//         console.log(temp);




// 6- var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
// Print out 'Good Job, !' for each person's name, one on a line.
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
// people.forEach(function(val){
//     console.log("Good Job "+ val);
// })


// 7-Sort an array
// Given an array of strings such the array of names given in the previous problem, sort them by alphabetically order.

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// var newArray = people.map(function(val){
//     return val.sort();
// })
// console.log(newArray);


// console.log(people.sort());  


// 8-Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.

// sortStudents = students.sort(function(a, b) {
//     return a.length - b.length
// })
// console.log(sortStudents); 


// 9- Given an array of array of numbers like:

// var arr = [
// [1, 3, 4],
// [2, 4, 6, 8],
// [3, 6] ];
// Sort the array by the sum of each inner array. For the above example, the respective sums for each inner array is 8, 20, and 9. Therefore, the solution should be:

// [ [1, 3, 4],
// [3, 6],
// [2, 4, 6, 8] ]
//sort by the sum of the inner array
// var arr = [
//     [1, 3, 4],
//     [2, 4, 6, 8],
//     [3, 6],
//   ];
//   //arr = [4, 20, 9]
//   function sum(arr) {
//     let sumResult = arr.reduce(function (acc, currentValue) {
//       return acc + currentValue; // acc = acc + currentValue
//     }, 0);
//     return sumResult;
//   }
//   function sortArr(arr){
//       arr.sort(function(a, b){
//           return sum(a) - sum(b)  //a= 8,  b= 20
//       })
//   }
//   sortArr(arr)


// 10 - Given this function:

// function call3Times(fun) { fun(); fun(); fun(); }
// Use the call3Times function to print "Hello, world!" 3 times.
// function fun(){
//     console.log("Hello World");
// }
// function callthreetimes(newfun){
//     newfun();
//     newfun();
//     newfun();
// }
// callthreetimes(fun);


// 12-Sum an array
// Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. Use the reduce method to do this.

// > sum([1, 2, 3])
// 6

// Acronym
// Write a function acronym that takes an array of words as argument and returns the acronym of the words. Use the reduce method to do this.

// > acronym(['very', 'important', 'person'])
// 'VIP' > acronym(['national', 'aeronautics', 'space', 'administration']) 'NASA'
 

