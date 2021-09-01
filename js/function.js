var sub = function(num1, num2){
    return num1-num2;
}
var add = function(num1, num2){
    return num1+num2;
}
var calc = function(num1, num2, opration){
    return opration(num1,num2);

}
console.log(calc(8,5,sub));  

// var outside = 4
// function testfunction(num){
//     num+= 22;
// }
// var result = testfunction(outside)
// console.log(outside)

// var object={
//     num:5
// };
// var testfunc = function(obj){
//     obj.num += 6;
// }
// result = testfunc(object)
// console.log(object.num)

// function varTest() {
//     var x = 1;
//     if (x===1) {
//       var x = 2;  // same variable!
//       console.log("inside func var",x);  // 2
//     }
//     console.log("outside func var",x);  // 2
//   }
//   varTest()
//   function letTest() {
//     let x = 1;
//     if (x === 1) {
//       let x = 2;  // different variable
//       console.log("inside test let",x);  // 2
//     }
//     console.log("inside test let",x);  // 1
//   }
//   letTest()
