function Calculate() {
  let result;
  let TheFirstNumber = document.getElementById("TheFirstElement").value;
  let TheSecondNumber = document.getElementById("TheSecondElement").value;
  let typeOfOperation = document.getElementById("typeOfOperation").value;

  if (TheFirstNumber === "" || TheSecondNumber === "") {
    alert("Имеются незаполненные поля");
  } else {
    TheFirstNumber = Number(TheFirstNumber);
    TheSecondNumber = Number(TheSecondNumber);
    switch (typeOfOperation) {
      case "+":
        result = TheFirstNumber + TheSecondNumber;
        break;
      case "-":
        result = TheFirstNumber - TheSecondNumber;
        break;
      case "*":
        result = TheFirstNumber * TheSecondNumber;
        break;
      case "/":
        if (Math.abs(TheSecondNumber) < Number.EPSILON) {
          alert("На ноль не делим");
          break;
        } else {
          result = TheFirstNumber / TheSecondNumber;
          break;
        }
    }
    document.getElementById("result").innerHTML = result;
  }
}
