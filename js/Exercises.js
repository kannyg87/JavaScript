// Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).
// Example:
// > madlib('Anushka', 'art');
// 'Anushka's favorite subject in school is art.'

// function madlib(name, subject){
// console.log(name + "'s favorite subject in school is " + subject);
// }
// madlib( "Anushka","art")
// **************************************************************************************

// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:
// good -> 20% fair -> 15% bad -> 10%
// > tipAmount(100, 'good')
// 20
// > tipAmount(40, 'fair')
// 6

// function tipAmount(billAmount, levelOfService){  

// if (levelOfService == "good")
// {
//     amountOfTip = amount * 0.2;
//     console.log( "your service was Good! and need to pay 20% tip and it is going to be: ", amountOfTip);
// }

// else if( levelOfService == "fair"){
//     amountOfTip = amount * 0.15;
//     console.log( "your service was fair! and need to pay 15% tip and it is going to be: ", amountOfTip);
// }

// else if(levelOfService == "bad"){
//     amountOfTip = amount * 0.1;
//     console.log( "your service was bad! and need to pay 10% tip and it is going to be: ", amountOfTip);
// }

// }
// var amount =100;
// tipAmount(100,"good");
// ***********************************************************************************
// reverse a number 7345

// var num = 7345;
// console.log(num);

// var reverse = num.toString().split('').reverse.join('');

// var rnum = parseInt(reverse)

// console.log(rnum);

// **********************************************************

// gready algorithm
// var totalCoins = 0;
// var coins = [25, 10, 5]
// var a = array.sort((a,b)=>b-a);
// console.log(a);

// coins=[25,10,5];
// numOfCoins = 0;
// amount = 40;
// index=0;
// while(amount>0){
//     if (coins[index]<amount){
//     amount= amount- coins[index];
//     console.log(amount);
//     totalCoins++;
//     console.log(totalCoins);}
// else{
//     index++;
// }
// }

// ******************************************************************
// Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:

// > printNumbers(1, 10)
// for(var a=1;a<=10;a++){
// console.log(a);
// }

// Print a Square
// Write a function printSquare which is given a size and prints a square of that size using asterisks.

// > printSquare(5)
// *****
// *****
// *****
// *****
// *****
// function printSquare(n){
//     var i=n;
//     while(i>0){
//         console.log('*'.repeat(n));
//         i--;}
//     }
// printSquare(10);
// }
//********************************************************* */
// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

// > printBox(6, 4)
// ******
// *    *
// *    *
// ******
//************************************************ */
// function printSquare(x,y){
//     console.log(`${'*'.repeat(x)}`);
//     var i = 1;
//     while(i<=(y-2)){
//         console.log(`*${' '.repeat(x)}*`);
//         i++;
//     }
//     console.log(`${'*'.repeat(x)}`);
// }
    
// printSquare(10,20);


// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

// > printBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************
// var textInput= "welcome to digitalcraft";
// var textLength= textInput.length;
// function printBannar(){
//     console.log(`*${'*'.repeat(textLength)}*`);
//     console.log(`*`+(textInput)+`*`);
//     console.log(`*${'*'.repeat(textLength)}*`);
// }
// printBannar();
// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:

// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
// > leetspeak('Leet')
// l337
// var str = "LEET";
// function leet(text){
// let dictionary = {
// A: 4,
// E: 3,
// G: 6,
// I: 1,
// O: 0,
// S: 5,
// T: 7};
// let newText ="";
// for ( var char of text){
// if (Object.keys(dictionary).includes(char.toLowerCase())){
//     char=dictionary[char].toString();
// }
// newText = newText.concat(char);
// }
// return newText;
// }
// console.log(leet(str));

// Write a function, which is given a string, return the result of extending any long vowels to the length of 5.

// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'

