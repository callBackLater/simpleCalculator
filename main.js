document.getElementById("equal").addEventListener("click", getNumberAndToFixed);
document.getElementById("equal").addEventListener("click", saveResults);

const a = document.getElementById("a");
const b = document.getElementById("b");
const operator = document.getElementById("select");
const result = document.querySelector(".result");

function getNumberAndToFixed() {
  if (isNotValidData()) return result.textContent = "Error";
  result.textContent = Number(calc().toFixed(3));
}

const calc = function () {
  switch (operator.value) {
    case "add":
      return Number(a.value) + Number(b.value);
    case "subtract":
      return a.value - b.value;
    case "multi":
      return a.value * b.value;
    case "divide":
      return a.value / b.value;
    default:
      alert("Houston, we have a problem");
  }
};

function saveResults() {
  let div2 = result.cloneNode(true);
  saveresult.append(div2);
  div2.setAttribute("onclick", "this.remove()");
}

function isNotValidData() {
  if (isNaN(a.value) || isNaN(b.value) || a.value == "" || b.value == "") {
    container.classList.add("error");
    setTimeout(() => container.classList.remove("error"), 300);
    return true;
  }
}
