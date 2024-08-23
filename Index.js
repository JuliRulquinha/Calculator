const display = document.getElementById("display");

function typeToDisplay()
{
    display.value += input;
}

function Calculate()
{

}

function clearAll()
{
    let value = document.getElementById("btn-clear-all");
    let input = document.getElementById("txt-display")
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
    let value = document.getElementById()
}