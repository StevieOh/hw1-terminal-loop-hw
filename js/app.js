console.log("Javascript is running!")

//1.   What is the difference between interpolation and concatenation? Give an example of each.
	//Interpolation -
??
	// concatination - is stringing together various elements of a formula with text for an output
			//("hello" + function)

//2. What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
	//DRY - "Don't Repeat Yourself" repetitive code can get long and messy, it's important to keep it concise to minimize confusion.
	//comments

//Section 2
//Using the provided variable definitions, replace the blanks with mathematical or boolean operators that make the expression evaluate to true.

/*Test your answers by using console.log in front of each expression in your answer file.
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';
  */

/*a < b;
c > d;
'Name' == 'Name';
a < b < c;
a __ a __ d;
e = 'Kevin';
48 = '48';
*/

//Section 3
//is this an infinite loop? Why or why not?
	//yes, because there isn't a value set end the loop.
/*while (true) {
	console.log('Do not run this loop');
}*/

//is this loop an infinite loop? Why or why not?
	//no, because an end value has been established
/*const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}*/

//Read the code line by line-- everything happens in sequence. 
//Write down what you think the code will log in the Terminal. 
//Be patient with your thought! There is no rush.
	//AAAAAAAAAAAAAAAAAAAA
/*let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);
*/

//After coming to a conclusion, run the code and write down whether it gave you the expected result. 
//If not, how did it differ?
	//no. the code, when ran, gave me 21 "A", i thought it would only be 20. Upon refreshed eyes, i see why. 
	// As long as i is < 20, the loop will run, so it stops at 21.


//Section 4
//A for loop performs the same operation as a while loop. 
//But what are the key differences, if any? What are the similarities?

//Write a for loop that will console.log the numbers 0 to 999.


/*
Here is an example for loop that prints a message 100 times:


for (let i=0; i < 100; i++) {
	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
}
*/

//What are the three components of the control statement? Each component is separated by a semicolon ;.

//Write your answers as comments in the file.

//The first part of the control statement is:
//The second part of the control statement is:
//The third part of the control statement is:

//For loop in reverse

//Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse. Console.log a countdown from 999 to 0.

//Write a for loop that uses interpolation to send a message to the console as well as the current value of i.

//The loop should run from 1 to 10.

/*
Expected Result:
The value of i is: 1 of 10
The value of i is: 2 of 10
The value of i is: 3 of 10
The value of i is: 4 of 10
The value of i is: 5 of 10
The value of i is: 6 of 10
The value of i is: 7 of 10
The value of i is: 8 of 10
The value of i is: 9 of 10
The value of i is: 10 of 10
*/






