const initialPrice = document.getElementById("initial-price"),
  currentPrice = document.getElementById("current-price"),
  quantity = document.getElementById("stocks-quantity"),
  submitBtn = document.getElementById("submit-btn"),
  output = document.getElementById("output");

const calculateAmount = (initial, quantity, current) => {
  const amount = (current - initial) * quantity;
  const percentage = Math.abs((amount / (initial * quantity)) * 100).toFixed(2);
  showOutput(amount, percentage);
};

const showOutput = (amount, percentage) => {
  if (amount < 0) {
    output.innerText = `Your loss is ${Math.abs(
      amount
    )} and the percentage is ${percentage}%`;
    document.body.style.backgroundColor = "#b91c1c";
  } else if (amount > 0) {
    output.innerText = `Your profit is ${amount} and the percentage is ${percentage}%`;
    document.body.style.backgroundColor = "#a3e635";
  } else {
    output.innerText = "No gain No pain";
    document.body.style.backgroundColor = "white";
  }
};

const validate = () => {
  const initial = initialPrice.value,
    currnet = currentPrice.value,
    qty = quantity.value;

  if (initial === "" || currnet === "" || qty === "") {
    output.innerText = "Please enter all the three details";
  } else if (Number(qty) <= 0) {
    output.innerText = "Quantity of stocks must be greater than zero";
  } else if (Number(initial) <= 0) {
    output.innerText = "Initial price must be greater than zero";
  } else if (Number(currentPrice) < 0) {
    output.innerText = "Current price cant be less than zero";
  } else {
    return calculateAmount(Number(initial), Number(qty), Number(currnet));
  }

  document.body.style.backgroundColor = "white";
};

submitBtn.addEventListener("click", validate);
