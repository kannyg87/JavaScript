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