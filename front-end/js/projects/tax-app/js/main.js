function Calculate(valueOne, valueTwo = 0) {
  const inputOne = document.querySelector(".input-one");
  const valueOne = Number(inputOne.value);
  const inputTwo = document.querySelector(".input-two");
  let valueTwo = Number(inputTwo.value);
  //Tip intro
  valueTwo = (valueTwo / 100) * valueOne;

  //Total Amount

  const TotalAmt = document.querySelectorAll("h2")[1];
  const TotalAmount = TotalAmt.innerText;
  const TotalAmtOne = document.querySelectorAll("h2")[0];
  const TotalAmountOne = TotalAmtOne.innerText;
  const totalBill = valueOne + valueTwo;

  if (inputTwo.innerText == " ") {
    alert("A value is missing! Make sure to fill all blanks");
    return;
  } else if (inputOne == null) {
    alert("A value is missing! Make sure to fill all blanks");
    return;
  } else {
    TotalAmtOne.innerHTML = "Total tip paid is: " + "$" + valueTwo.toFixed(2);
    TotalAmt.innerText = "Total Bill is: " + "$" + totalBill.toFixed(2);
  }
}
