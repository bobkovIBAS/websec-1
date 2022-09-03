function Calculate() {
  let result;
  let TheFirstNumber = Number(document.getElementById("TheFirstElement").value);
  let TheSecondNumber = Number(document.getElementById("TheSecondElement").value);
  let typeOfOperation = document.getElementById("typeOfOperation").value;

  if (TheFirstNumber === "" || TheSecondNumber === "") {
    alert("Имеются незаполненные поля");
    breal
  } else {
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
        if (TheSecondNumber === 0) {
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
