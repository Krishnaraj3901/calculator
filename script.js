//disply number in text box

function displayNumber(num){
  console.log(num);
  result.value+=num
}

//clear text box
function clearBox(){
  result.value=""
}

//evaluate expression
function evaluateExp(){
  //method1
  // exp=result.value;
  // output=eval(exp)
  // result.value=output

  //method 2

  result.value=eval(result.value)
}