const button = document.querySelector(".btn");
const result = document.querySelector(".result");

const onClick = (e) => {
  const amount = document.querySelector(".Am").value;
  const interest = document.querySelector(".In").value;
  const years = document.querySelector(".Ye").value;
  console.log(amount);
  let total = amount * Math.pow(1 + interest / 100, years);
  result.innerHTML = "Total amount is $" + total.toFixed(2);
};

button.addEventListener("click", onClick);
