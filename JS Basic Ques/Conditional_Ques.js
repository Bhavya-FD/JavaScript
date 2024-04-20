window.alert("Hello welcome to the page !"); 

// Question31
function printLoop() {
    for (let i = 972; i >= 897; i--) {
        console.log(i);
    }
}

// Question32
// function factorial(num) {
//     if (num == 0 || num == 1) {
//         return 1;
//     }
//     for (let i = 1; i <= 10; i++) {
//         console.log(i*=i);
//     }
// }


// Question 32
function Factorial() {
    
    const number = parseInt(prompt('Enter the number : '));
    let n1 = 1;
    let n2 = 2;
    let nextTerm;
    
    console.log('Factorial number :');
    
    for (let i = 1; i <= number; i++) {
        nextTerm = n1 * n2;
        n1 = n2;
        n2 = nextTerm;
        console.log(n1);
    }
}
Factorial();

// Question 33
function Fibonacci() {
    
    const number = parseInt(prompt('Enter the number of terms: '));
    let n1 = 0;
    let n2 = 1;
    let nextTerm;    
    console.log('Fibonacci Series:');
    
    for (let i = 1; i <= number; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        console.log(n1);
    }
}
Fibonacci();

// Question 34
function reverseNumber() {
    let result = 0;
    let number = prompt("Enter a number : ");

    result = Number(String(number).split('').reverse().join(''));

    console.log("Reversed number is : "+result);
}
reverseNumber();

// Question 40
function dayAndTime() {
    let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let now = new Date();
    let day = now.getDay();
    console.log("Today is "+daylist[day]);

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    console.log("Current time is "+hour +":"+minute+":"+second);
}
dayAndTime();

// Question 41
let date = new Date().toDateString();

console.log(date);

// Question 42
const Student1 = {
    Name: "Bhavya",
    Course: "ReactJs",
    Age: 27
    };
const Student2 = {
    Name: "Bhavya",
    Course: "ReactJs",
    Age: 27
    };
 console.log(JSON.stringify(Student1) === JSON.stringify(Student2));   //it will return True


//  Question 44
function capitalise(str1) {
    let char = str1.charAt(0);
    let letter = str1.slice(1);
    console.log(char.toUpperCase()+letter); 
}
capitalise("welcome to javascript");

// Question 45
function checkArray() {
    let str = 'This is a string';
    let arr = [10, 20, 30, 40];

    let ans = Array.isArray(str);
    console.log("Output for String: " + ans);

    ans = Array.isArray(arr);
    console.log("Output for Array: " + ans);
}
checkArray();

// Question 48
let string = "Hello ! Good Morning";
console.log("The lenght of string is "+string.length);

// Question 49
let capital = "welcome to javascript";
console.log(capital.toUpperCase());

// Question 50
let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth()+1; 
let year = currentDate.getFullYear();
console.log(`${day}/${month}/${year}`);
console.log(`${day}-${month}-${year}`);

// // Question 51
// let month2 = "january"
// // let monthList = ["january","february","march","april","may","june","july","august","september","october","november","december"];
// console.log(month2);
// console.log(month2.indexOf("r"));


// Question 38 :-(4
function pyramidPattern() {
    let output = ""
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            output += "*" + " ";
        }       
        console.log(output); 
        output = "";
    }
}
pyramidPattern();

