console.log(' Week 3 assignment');
//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages=[3, 9, 23, 64, 2, 8, 28, 93]
//a.	Programmatically subtract the value of the first element in the array from the value in the last element of 
//the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
let firstEl = [3] //shift method allows me to remove the first element of an array
console.log(firstEl);
let lastEl = [93] //pop method allows me to remove the last element of an array
console.log(lastEl)
console.log(lastEl - firstEl)
//b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(50); //push adds an array to the end, where unshift adds to the front of an array
console.log(ages)
//c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
let sum = 0;
ages.forEach(function(num) {sum += num});
average = sum/ages.length;
console.log(average);

//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names= [ 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck']
console.log(names)
//a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
//Print the result to the console.
let averageLetters = 0
for ( let i = 0; i < names.length; i++){
    averageLetters += names[i].length;
}
let averageNames = averageLetters/names.length;
console.log(averageNames);


//b.	Use a loop to iterate through the array again and concatenate all the names together, separated by 
//spaces, and print the result to the console.
let result = '';
for(var i = 0; i < names.length; i++){
    result = result.concat(names[i] + ' ');
}
console.log(result);

//3.	How do you access the last element of any array?
let lastElement = names[names.length - 1]; //this shows the last element in the names array
console.log(lastElement)
console.log(names.length -1)// shows number of letters in the last element
//4.	How do you access the first element of any array?
let firstElement = [0];
//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array 
//and add the length of each name to the nameLengths array.
//For example:
let nameLengths = [];
for ( let i = 0; i < names.lengths; i++){
    nameLengths[i] = names[i].length;
}


//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array


//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the 
//array. Print the result to the console.
total = 0;
for ( let i = 0; i < nameLengths.length; i++){
    total = total + nameLengths[i];
}
console.log(total);

//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated 
//to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function showWordN ( word,n){
    let con = word;
    for (let i = 1; i <= n; i++){
        con = con.concat(word);
    }return con;
}
console.log(showWordN('Hello', 3));
   
//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name 
//(the full name should be the first and the last name separated by a space).
let createFullName = (firstName, lastName) => {
    return firstName.concat(' ', lastName);
}
console.log('Rashida' + ' ' + 'Blair');
 
//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the 
//array is greater than 100.
function myNumbers (arr){
    sum = 60+40;
    for ( let i = 0; i < arr.length; i++){
        sum = sum += arr[i];
    } if (sum === 100){
        console.log('It is true');
        return true;
    } else {
        console.log('It is false');
        return false;
    }
}
console.log(myNumbers(60+40));

//10.	Write a function that takes an array of numbers and returns the average of all the elements in the 
//array.
let arrayOfNumbers = [ 4, 8, 9, 10]; //avg. 7.75
let averageElement = arrayOfNumbers.reduce((a, b) => a + b, 0) / arrayOfNumbers.length;
console.log(averageElement);


//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in 
//the first array is greater than the average of the elements in the second array.

//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
//and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let willBuyDrink = (isHoutOutside = true, moneyInPocket = 0) => {
    return console.log(isHoutOutside === true && moneyInPocket > 10.50 ? true : false);
}
willBuyDrink(false, 12);




//13.	Create a function of your own that solves a problem. In comments, write what the function does and 
//why you created it.
function houseOfDragonIsAmazing(x) {
    if ( x === true){
        return "Will be renewed for season 2."
    } else {
        return "Will be canceled."
    }
}
console.log(houseOfDragonIsAmazing(true));
//I created this function because House of Dragon on HBO is an amazing prequel of Game of Thrones and
//one of my favortie tv shows. 