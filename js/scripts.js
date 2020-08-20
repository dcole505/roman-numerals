//UI logic
$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();
    let number = $("input#input1").val();
    
    if (checkInput(number)){
      $("#result1").text(toRoman(number));
    }else{
      alert("Please enter an integer between 1 - 3999");
    }
    
  });
});

//Business Logic
function checkInput(number){
  if(isNaN(number) || !validNumber(number)) {
    return false;  
  }
  return true;
}

function validNumber(number) {
  if (number < 1 || number > 3999) {
    return false;
  }
  return true;
}

function toRoman(number){
  const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ["M","CM","D","CD","C","XC","L", "XL", "X", "IX", "V", "IV", "I"];
  
  for (let i = 0; i < decimals.length; i++) {
    if(number < 1)
        return "";       

    if(number >= decimals[i]) {
        return roman[i] + toRoman(number - decimals[i]);        
    }
}
}

function toRoman2(number){
  let outputString = "";
  const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ["M","CM","D","CD","C","XC","L", "XL", "X", "IX", "V", "IV", "I"];

  for (let i = 0; i < decimals.length; i++) {
    if(number >= decimals[i]){
      if (number > 0){
        number = number - decimals[i]; //ex 55-50 = 5
        //const numeral1 = decimals[i];
        alert(roman[i]);
      }else{
        outputString += roman[i];
        //alert(outputString);
      }
    }
  //return outputString;
  }
}
  
  //const firstElement = roman.shift(number);
  //number = toString(number.split(''));
  //alert(number);