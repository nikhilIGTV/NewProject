var inputBox = document.querySelector(".inputBox");
var inputEq = document.querySelector(".inputEq");
var historyDiv = document.querySelector(".history-div");
var answers = [];
var equations = [];
function setVal(num)//8,7
{
    if(inputBox.value == 0)
        inputBox.value = num;
    else
        inputBox.value += num;
}

function clearInput()
{
    inputEq.value = '';
    inputBox.value = 0;
}

function getAns()
{
    equation = inputBox.value + " = ";
    equations.push(equation)
    answers.push(eval(inputBox.value));
    inputEq.value = equation;
    inputBox.value=eval(inputBox.value);
}


function showHistory()
{
    historyDiv.innerHTML = "";

    for(let i=0; i<answers.length;i++)//(0<3)(1<3)(2<3)(3<3)
    {
        historyDiv.innerHTML += '<div class="section"><h6>'+ equations[i]+ ' </h6><h6>'+answers[i]+'</h6></div>';
    }
}

function removeHistory()
{
    var status= confirm("Are You sure want to delete history ? ");
    if(status)
    {
        historyDiv.innerHTML = "";
        answers = [];
        equations = [];
    }

}