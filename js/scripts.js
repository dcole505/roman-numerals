//UI logic
$(document).ready(function() {

})

//Business Logic
function checkInput(number){
  if(isNaN(number) || !validNumber(number)) {
    alert("Please enter an integer between 1 - 3999");  }
}

function validNumber(number) {
  if (number < 1 || number > 3999) {
    return false;
  }
  return true;
}

function toRoman(number){
  const key = [M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1];
  
  
}