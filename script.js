const billAmount = document.querySelector("#bill-amount");
const cashReceived = document.querySelector("#cash-received");
const checkBtn = document.querySelector("#check-btn");
const cashInputDiv = document.querySelector(".cash-input");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const msgDiv = document.querySelector(".messages");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

// disabling check button until inputs are taken
checkBtn.disabled = true;
const stateHandle = () =>{
  if (billAmount.value === "" || cashReceived.value === "") {
    checkBtn.disabled = true;
    msgDiv.classList.add("hidden");
  } else {
    checkBtn.disabled = false;
    msgDiv.classList.add("hidden");
  }
}
// event listener for button state handler
billAmount.addEventListener("change", stateHandle);
cashReceived.addEventListener("input", stateHandle);

// function to calculate change
const changeCalculator = ammountToReturn => {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(ammountToReturn / availableNotes[i]);
    ammountToReturn = ammountToReturn % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}
const message = msg => {
  msgDiv.classList.remove("hidden");
  msgDiv.innerText = msg;
}
const inputValidator = () => {
  if (billAmount.value > 0) {
    const ammountToReturn = Math.trunc(cashReceived.value - billAmount.value);
    if (ammountToReturn < 0) {
      message("Customer needs to pay atleast full bill amount.");
    } else if (ammountToReturn > 0) {
      changeCalculator(ammountToReturn);
    } else {
      message("Amount satisfied with bill!");
    }
  }
  else{
      message("Invalid Bill Amount!")
  }
}


checkBtn.addEventListener("click", inputValidator);
