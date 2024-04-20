// printing Result from Q.5
function printStatement() {
    let quote = "There is no exercise better for the heart than reaching down and lifting people up. by John Holmes teaches us to help one another."
    console.log(quote);
}

  //Q.6 Make it exactly equal 
  function handleEvent() {
    let a = '10'
    let b = 10
    console.log(typeof a);
    console.log(typeof b);
    // Type of a != b
    console.log(parseInt(a) === b);
  }

  //Q.7 Calculate Area of a Triangle   
  function calculateArea() {
    const base = prompt('Enter the Base of a Triangle: ');
    const height = prompt('Enter the Height of a Triangle: ');
    
    const areaValue = (base * height) / 2;

    alert(`The Area of the Triangle is ${areaValue}`)
  }

  // Q.8 Days left until next Christmas
  // function getDays() {
  //   // today's date
  //   let today = new Date();
  //  // year of current date
  //   let ChristmasYear = today.getFullYear();
  //   console.log(today);
  //   console.log(ChristmasYear);
  // }

  // Q.10 Find Circumference
  function findCicumference() {
    const side = prompt('Enter the Side of a Square: ')

    const C = 4 * side;
    alert(C);
  }
   
  // Q.11 Convert to Days & Years
  function convertToDays() {
    let year = prompt('No. of years here: ');
    let Days = year*365
    document.getElementById('spnid1').innerHTML = Days;
    // alert("No. of Days : " + Days)
  }
  function convertToYears() {
    let days = prompt('No. of days here: ');
    let Year = days/365;
    document.getElementById('spnid2').innerHTML = Year;
    // alert("No. of years : " + Year)
  }

  // Q.12 Convert Farenhite to Celcius
  function convertFtoC() {
    let farenhite = prompt('Change Farenhite to Celcius: ')
    let cel = `${farenhite}`-32;
    let Celcius = `${cel}`*5/9;
    // console.log(Celcius);
    document.getElementById('spnid3').innerHTML = `${Celcius}deg C`
  }

  // Q.14 Check Expression
  function checkExpression1() {
    let check = 5 > 3 && 2 < 4;
    console.log(5 > 3 && 2 < 4);
    // document.getElementById('answer1').innerHTML = check;
    alert(check);
  }

  // Q.15 Check Expression
  function checkExpression2() {
    let check = true && 1 && "hello"
    console.log(true && 1 && "hello");
    document.getElementById('answer2').innerHTML = check;
  }

  // Q.16 Check Expression
  function checkExpression3() {
    let check = true && false || false && true
    console.log(true && false || false && true);
    // document.getElementById('answer3').innerHTML = check;
    alert(check);
  }

  //Q.20 function without void 0
  function handleAlert1() {
    alert('Namaste Bharat!')
  }
  // function with void 0
  function handleAlert2() {
    alert('This page says Hello!')
  }

  // Q.21 check Positive or Negetive
  function checkPositive() {
    let num = prompt('Check If Number is Positive or Negetive: ')
    if (num < 0) {
      alert(`${num} is a Negetive number.`)
    } else {
      alert(`${num} is a Positive number.`)
    }
  }

  // Q.22 Find Vowel or not
  function findVowel() {
    let letter = prompt('Write a Character here: ');
    let vowel = `${letter}`;
    if (vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u') {
      alert('This is a Vowel.');
    }else {
      alert('This is not a Vowel.');
    }
  }

  // Q.23 check Positive or Negetive
  function checkPositiveOrNegetive() {
    let num = prompt('Check If Number is Positive or Negetive: ')
    if (num < 0) {
      alert(`${num} is a Negetive number.`)
    }else if (num == 0) {
        alert(`${num} is a Zero.`)
    } else {
      alert(`${num} is a Positive number.`)
    }
  }

  // Q.24 find number is Even or Odd
  function findEvenOdd(n) {
    // n % 2 is used to get remainder of a division  
    return (n % 2 == 0);
  }
  let n = 10;
  // here we find no. is Even or Odd using ternary Operator
  findEvenOdd(n) ? console.log("Even") : console.log("Odd");
          // or 
  // function findEvenOdd() {
  //   let n = prompt('write a no.: ')
  //   if (n % 2 == 0) {
  //     alert('Even')
  //   } else {
  //     alert('Odd')
  //   }
  // }

  // Q.25 Maximum number
  function isMax(num1,num2,num3) {
    return num1 >= num2 && num1 >= num3 ? num1
          : num2 >= num1 && num2 >= num3 ? num2
          : num3
          // console.log(Math.max(20,30,10));
  }
  const maxValue = isMax(10,20,30);
  console.log("Maximum no. is: " , maxValue);
    
  // Q.26 Minimum  Number 
  function isMin(no1,no2,no3) {
    return no1 <= no2 && no1 <= no3 ? no1
        :no2 <= no1 && no2 <= no3 ? no2
        : no3
    // console.log(Math.min(20,10,30));
  }
  const Minimum = isMin(10,20,30)
  console.log("Minimum No. is: " , Minimum);

  // Q.27 find Largest no.
  function isLargest() {
    console.log('Largest no. is:' , Math.max(20,30,10));
  }

  // Q.28(i) Week Days
  function weekDay() {
    let Day = Number(document.getElementById('week').value);

    switch (Day) {
      case 1:
        alert("It's Monday!")
        break;
      case 2:
        alert("It's Tuesday!")
        break;
      case 3:
        alert("It's Wednesday!")
        break;  
      case 4:
        alert("It's Thursday!")
        break;  
      case 5:
        alert("It's Friday!")
        break;
      case 6:
        alert("It's Saturday!")
        break;  
      case 7:
        alert("It's Sunday!")
        break;  
      default:
        break;
    }
  }

