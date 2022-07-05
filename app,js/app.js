// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს
// და დააბრუნებს true - ს თუ რიცხვი არის ლუწი ან false - ს თუ რიცხვი არის კენტი.
function oddEven(x) {
    if (x % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }
  // let smth = oddEven(4);
  // console.log(smth);
  
  // 2. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს - მართკუთხედის
  // გვერდების ზომებს და დააბრუნებს მართკუთხედის ფართობს.
  function rectangleAr(x, y) {
    return x * y;
  }
  // let getRectArea = rectangleAr(4, 5);
  // console.log(getRectArea);
  
  // 3. დაწერეთ ფუქცია, რომელიც პარამეტრად მიიღებს ერთ რიცხვს - კვადრატის
  // გვერდის სიგრძეს და დააბრუნებს კვადრატის ფართობს.ფართობის გამოსათვლელად
  // გამოიყენეთ #2 პუნქტში აღწერილი ფუნქცია.
  function squareAr(x) {
    return x * 4;
    // return x ** 2;
  }
  // let getSquareAr = squareAr(10);
  // console.log(getSquareAr);
  
  // 4. Math.random() - არის ფუნქცია, რომელიც აბრუნებს შემთხვევით რიცხვს 0-დან 1-მდე.
  // Math.floor() - ამრგვალებს რიცხვს ქვემოთ, მაგალითად Math.floor(4.9) აბრუნებს 4-ს.
  // Math.round() - ამრგვალებს რიცხვს უახლოეს მთელამდე.
  // დაწერეთ ფუნქცია, რომელიც Math.random() ფუნქციის გამოყენებით
  // დააგენერირებს და დააბრუნებს 0 - დან 100 - მდე შემთხვევით რიცხვს.
  
  function genRandNum(limit = 100) {
    let random = Math.random() * limit;
    random = Math.round();
    return random;
  }
  // let generate = genRandNum();
  // console.log(generate);
  
 
  let currencies = [
    {
      code: "USD",
    },
    {
      code: "EUR",
    },
    {
      code: "GEL",
    },
  ];
  function getCurrencySymbolFromCode() {
    let filterCurrencies = currencies.filter((currency) => {
      if (currency.code === "USD") {
        return "$";
      } else if (currency.code === "EUR") {
        return "€";
      } else if (currency.code === "GEL") {
        return "₾";
      } else {
        return "Can't find that type of currency";
      }
    });
    // ესეც მგონია რომ სწორად დავწერე მაგრამ კონსოლში ვერ გამოვატანინე :დ
  }
  
  
  const persons = [
    {
      name: "Saba",
      age: 20,
    },
    {
      name: "Natia",
      age: 21,
    },
    {
      name: "Lasha",
      age: 41,
    },
    {
      name: "Giorgi",
      age: 16,
    },
    {
      name: "Mariami",
      age: 27,
    },
  ];
  
  
  
  let sort = persons.age.sort(function (a, b) {
    return a - b;
  });
  console.log(persons[0]);