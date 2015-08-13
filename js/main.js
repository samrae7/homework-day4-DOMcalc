console.log('hello, lauren');

// 1. write an event listener on the basic-calc button

var basicButton = document.getElementById('basic-calc');

basicButton.addEventListener ('click',function() {
  console.log('click event fired');
  alert(BasicCalc());
  }
);

// 2. inside the function on that event listener collect the values from the user and store them in variables

// 3. do the relevant calculations on those variables
// 4. show the answer div
// 5. update the text of the answer div accordingly

function BasicCalc() {

var first = parseFloat(document.getElementById("basic-num-1").value);
var second  = parseFloat(document.getElementById("basic-num-2").value);
var operator = document.getElementById("basic-operation").value; 

    switch(operator){
      case "+":
        answer = first + second;
        break;
      case "-":
        answer = first - second;
        break;
      case "/":
        answer = first / second;
        break;
      case "*":
        answer = first * second;
    };
    // display the result
return (answer);
}