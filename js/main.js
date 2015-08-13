console.log('hello, lauren');

// 1. write an event listener on the basic-calc button

var first;

var basicButton = document.getElementById('basic-calc');

basicButton.addEventListener ('click',function() {
  first  =  document.getElementById("basic-num-1").value;
  console.log(first);
  }
);

// 2. inside the function on that event listener collect the values from the user and store them in variables

// 3. do the relevant calculations on those variables
// 4. show the answer div
// 5. update the text of the answer div accordingly

  // Ask the user to enter the first number
  

    // var operator = prompt("What do you want to do? (p)lus / (s)ubtract / (d)ivide / (m)ultiply");

 

    // Ask the user to enter the second number
    // var second =  parseInt(prompt("What is your second number?"));

    // Calculate the answer based on the chosen basic operator
    // switch(operator){
    //   case "p":
    //     answer = first + second;
    //     break;
    //   case "s":
    //     answer = first - second;
    //     break;
    //   case "d":
    //     answer = first / second;
    //     break;
    //   case "m":
    //     answer = first * second;
    // //     break;
    // // };
    // // finally, display the result
    // alert('the answer is ' + answer);
