// question 1

var gender = "male";

// question 2

var person = {
    name: "John",
    age: "30"
{;

// question 3

var outOfStock = true;

if(outOfStock === true) {
  console.log("Out of stock")
}
else {
  console.log("In stock")
}

// question 4

var numbers = [10, 20, 30, 40, 50];

for (var i = 0; i < numbers.length; i++){
    console.log(numbers);
}

// question 5

for(var count = 15; i <= 25; i++) {
    console.log(i);
}

// question 6

for (var count = 15; i <= 25; i++) {
	if (i === 20) {
		console.log(i);
	}
}

// question 7

var Arsenal = [
    {
        name: "Aubameyang",
        number: 14,
        striker: true,
    },
    {
        name: "Xhaka",
        number: 34,
        striker: false,
    }
];

for(var i = 0; i < Arsenal.length; i++) {
    console.log(Arsenal[i].number);
    console.log(Arsenal[i].striker);
}

// question 8

function whatIDontLike(theUnlikable) {
    console.log("I don't like" + theUnlikable);
}

logToConsole("Tottenham");

// question 9

function SubtractTwoNumbers(number1, number2) {
    var sum = number1 - number2;
    console.log(sum);
}

SubtractTwoNumbers(18, 6);

// question 10

var footballTeam = [];

function footy(teamName){
    footballTeam.push(teamName);
}

footy("Juventus");
