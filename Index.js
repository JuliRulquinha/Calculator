const display = document.getElementById("display");
const getById = document.getElementById;
getById.nome = "sei la";

function calculate()
{
   //Get the expression ex: 1+1
    
    let input = document.getElementById("txt-display");    
    let expression = input.value;



    let operator = "";
    let operatorIndex = 0;

    
   //Check if there is an operator
   let plusSignIndex = expression.indexOf('+');
   let minusSignIndex = expression.indexOf('-');
   let divisionSignIndex = expression.indexOf('÷');
   let timesSignIndex = expression.indexOf('*');

   if(plusSignIndex > 0) {
    operator = "+";
    operatorIndex = plusSignIndex;
   }

   else if(minusSignIndex > 0) {
    operator = "-";
    operatorIndex = minusSignIndex;
   }

   else if(divisionSignIndex > 0) {
    operator = "÷";
    operatorIndex = divisionSignIndex;
   }

   else if(timesSignIndex > 0) {
    operator = "*";
    operatorIndex = timesSignIndex;
   }

   //Check if there is a number before and after the operator

   let operatorIsAtAValidPosition = operatorIndex < expression.length-1 || operatorIndex > 0;

   if(operatorIsAtAValidPosition)
   {
       debugger; 
        let firstNumber = expression.substring(0,operatorIndex);
        let secondNumber = expression.substring(operatorIndex+1,expression.length);
        let operation = selectFunctionByOperator(operator);
        input.value = operation(+firstNumber,+secondNumber);

   }
   //Check which expression needs to be applied according to the operator
   //Run the expression and show the results -> Check for possible errors


}

function clearAll()
{
    let value = document.getElementById("btn-clear-all");
    let input = document.getElementById("txt-display");
    input.value = "";
}

function btnOneClick()
{
    let value = document.getElementById("btn-one").innerText;
    let input = document.getElementById("txt-display");
    input.value += value;
}

function btnTwoClick()
{
    let value = document.getElementById("btn-two").innerText;
    let input = document.getElementById("txt-display");
    input.value += value;
}

function btnThreeClick()
{
    let value = document.getElementById("btn-three").innerText;
    let input = document.getElementById("txt-display");
    input.value += value;
}

function btnFourClick()
{
    let value = document.getElementById("btn-four").innerText;
    let input = document.getElementById("txt-display");
    input.value += value;

}

function btnFiveClick()
{
    let value = document.getElementById("btn-five").innerText;
    let input = document.getElementById("txt-display");
    input.value += value;
}

function btnSixClick()
{
    let value = document.getElementById("btn-six").innerText;
    let input = document.getElementById("txt-display");
    input.value += value;
}

function btnSevenClick()
{
    let value = document.getElementById("btn-seven").innerText;
    let input = document.getElementById("txt-display");
    input.value += value;
}

function btnEightClick()
{
    let value = document.getElementById("btn-eight").innerText;
    let input = document.getElementById("txt-display");
    input.value += value;
}

function btnNineClick()
{
    let value = document.getElementById("btn-nine").innerText;
    let input = document.getElementById("txt-display");
    input.value += value;
}

function btnZeroClick()
{
    let value = document.getElementById("btn-zero").innerText;
    let input = document.getElementById("txt-display");
    input.value += value;
}


function btnSumClick()
{
    
    let operator = document.getElementById("plus-sign").innerText;
    let input = document.getElementById("txt-display");
    input.value += operator;

}

function btnSubtractClick()
{
    
    let operator = document.getElementById("btn-minus").innerText;
    let input = document.getElementById("txt-display");
    input.value += operator;

}

function btnDivideClick()
{
    
    let operator = document.getElementById("btn-divide").innerText;
    let input = document.getElementById("txt-display");
    input.value += operator;

}

function btnMultiplyClick()
{
    
    let operator = document.getElementById("btn-multiply").innerText;
    let input = document.getElementById("txt-display");
    input.value += operator;

}


 
function selectFunctionByOperator(operator)
{
    switch(operator)
    {
        case '+': return Sum;
        break;

        case '-': return Subtract;
        break;

        case '÷': return Divide;
        break;

        case '*': return Multiply;
        break;

        default: console.log("Error");
    }
}

function Sum(a, b)
{
    return a+b;
}

function Subtract(a, b)
{
    return a-b;
}

function Multiply(a, b)
{
    return a*b;
}

function Divide(a, b)
{
    return a/b;
}
