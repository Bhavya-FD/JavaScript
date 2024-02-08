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
    console.log(typeof parseInt(a));
    console.log(a === b);
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
  //   // year of current date
  //   let ChristmasYear = today.getFullYear();
  //   console.log(today);
  //   console.log(ChristmasYear);
  // }

  // Q.10 Find Circumference
  function findCicumference() {
    const side = prompt('Enter the Side of a Square: ')

    const C = 4 * side;
    console.log(C);
  }
   
  // Q.11 Convert to Days & Years
  function convertToDays() {
    let days = prompt('No. of days here: ')
    
    let year = prompt('No. of years here: ')

  }
  