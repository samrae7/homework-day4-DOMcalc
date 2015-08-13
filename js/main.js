console.log('hello, lauren');

//BASIC CALC
var answer;
// 1. write an event listener on the basic-calc button

var basicButton = document.getElementById('basic-calc');

basicButton.addEventListener ('click',function() {
  console.log('click event fired');
  BasicCalc();
  showBasicAnswer();
  }
);

function showBasicAnswer() {
   document.getElementById('basic-answer-alert').innerHTML=answer;
  document.getElementById('basic-answer').className='show';
};

// 2. inside the function on that event listener collect the values from the user and store them in variables DONE

// 3. do the relevant calculations on those variables DONE
// 4. show the answer div DONE
// 5. update the text of the answer div accordingly DONE

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
answer=answer.toFixed(2);
}

//TRIP

var tripButton = document.getElementById('trip-calc');

tripButton.addEventListener ('click',function() {
  console.log('click event fired');
  trip();
  showTripAnswer();
  }
);

function showTripAnswer() {
   document.getElementById('trip-answer-alert').innerHTML=trip();
  document.getElementById('trip-answer').className='show';
};

function trip() {
var dist = document.getElementById('trip-distance').value;
var mpg = document.getElementById('trip-mpg').value;
var cost = document.getElementById('trip-cost').value;
var speed  = document.getElementById('trip-speed').value;

var time = dist / speed;
time = Math.round(time * 100) / 100; // round it to two decimals
var actualMPG = (mpg > 60) ? Math.max(0, mpg - (speed - 60) * 2) : mpg;

var cost = (dist / actualMPG * cost);
cost = Math.round(cost * 100) / 100;

// finally, display the result
return("Your trip will take " + time + " hours and cost $" + cost);
}
