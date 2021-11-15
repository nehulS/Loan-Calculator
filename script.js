const button = document.querySelector(".btn");
const result = document.querySelector(".result");

const onClick = (e) => {
  const amount = document.querySelector(".Am").value;
  const interest = document.querySelector(".In").value;
  const years = document.querySelector(".Ye").value;
  console.log(amount);
  let total = (amount * interest * years) / 100;
  result.innerHTML = total;
};

button.addEventListener("click", onClick);
