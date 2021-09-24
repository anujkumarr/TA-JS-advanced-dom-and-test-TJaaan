let form = document.getElementById("form");
let display = document.getElementById("display_data");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let first = document.getElementById("first_input").value;
  let second = document.getElementById("second_input").value;
  createUI(first, second);
});

function createUI(first, second) {
  let box = document.createElement("div");
  box.classList.add("box");

  let fristInput = document.createElement("h3");
  fristInput.innerHTML = first;
  fristInput.contentEditable = true;

  let secondInput = document.createElement("h4");
  secondInput.innerHTML = second;
  secondInput.contentEditable = true;

  box.append(fristInput, secondInput);
  display.append(box);

  document.getElementById("first_input").value = "";
  document.getElementById("second_input").value = "";
}
