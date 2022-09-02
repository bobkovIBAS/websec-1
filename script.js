var typeOfOperation;
function Calculate()
{
    var result;
    var TheFirstNumber = Number(document.getElementById("TheFirstElement").value);
    var TheSecondNumber = Number(document.getElementById("TheSecondElement").value);

    switch (typeOfOperation) {
        case '+':
            result = TheFirstNumber + TheSecondNumber;
            break;
        case '-': 
            result = TheFirstNumber - TheSecondNumber;
            break;
        case '*':
            result = TheFirstNumber * TheSecondNumber;
            break;
        case '/':   
            result = TheFirstNumber / TheSecondNumber;
            break;
    }
    document.getElementById("result").value = result;
    
}
