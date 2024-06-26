let selectedCell = "";

const activeCellElement = document.querySelector(".selected-cell");
const form = document.getElementById("options-form");
const expressionInput = document.getElementById("expression");
body.addEventListener("click", (event) => {
  form.reset();
  if (selectedCell) selectedCell.classList.remove("active-cell");
  selectedCell = event.target;
  activeCellElement.innerText = selectedCell.id;
  selectedCell.classList.add("active-cell");
  console.log(state[selectedCell.id]);
  if (!state[selectedCell.id]) {
    state[selectedCell.id] = {
      ...defaultState,
      innerText: selectedCell.innerText,
    };
    return;
  }
  // already data present inside state object

  state[selectedCell.id]["innerText"] = selectedCell.innerText;
  // console.log(selectedCell);
  applyCellInfoToForm();
});

body.addEventListener("input", (event) => {
  selectedCell = event.target;
  if (!state[selectedCell.id]) {
    state[selectedCell.id] = {
      ...defaultState,
      innerText: selectedCell.innerText,
    };
    return;
  }
  // already data present inside state object

  state[selectedCell.id]["innerText"] = selectedCell.innerText;
});
function syncFormOptions(selectedCellState) {
  // form["fontFamily"].value = selectedCellState.fontFamily;
  // form["fontSize"].value = selectedCellState.fontSize;
  // form["isBold"].checked = selectedCellState.isBold;
  // form["isItalic"].checked = selectedCellState.isItalic;
  // form["isUnderlined"].checked = selectedCellState.isUnderlined;
  // form["align"].value = selectedCellState.align;
  // form["textColor"].value = selectedCellState.textColor;
  // form["backgroundColor"].value = selectedCellState.backgroundColor;

  for (let key in selectedCellState) {
    if (key === "isBold" || key === "isItalic" || key === "isUnderlined") {
      form[key].checked = selectedCellState[key];
    } else if (key === "innerText") continue;
    else form[key].value = selectedCellState[key];
    // undefined.value = selectedCellState[key]; // TypeError
  }
}
function applyCellInfoToForm() {
  if (!state[selectedCell.id]) {
    form.reset();
    return;
  }
  syncFormOptions(state[selectedCell.id]);
}
function applyStylesToSelectedCell(styles) {
  selectedCell.style.fontSize = styles.fontSize + "px";
  selectedCell.style.fontFamily = styles.fontFamily;
  selectedCell.style.fontWeight = styles.isBold ? "bold" : "normal";
  selectedCell.style.fontStyle = styles.isItalic ? "italic" : "normal";
  selectedCell.style.textDecoration = styles.isUnderlined
    ? "underline"
    : "none";
  selectedCell.style.textAlign = styles.align;
  selectedCell.style.color = styles.textColor;
  selectedCell.style.backgroundColor = styles.backgroundColor;
}

form.addEventListener("change", () => {
  if (!selectedCell) {
    alert("Please select a cell before making any change on the options");
    form.reset();
    return;
  }
  const formData = {
    fontFamily: form["fontFamily"].value,
    fontSize: form["fontSize"].value,
    isBold: form["isBold"].checked,
    isItalic: form["isItalic"].checked,
    isUnderlined: form["isUnderlined"].checked,
    align: form["align"].value,
    textColor: form["textColor"].value,
    backgroundColor: form["backgroundColor"].value,
  };

  state[selectedCell.id] = { ...formData, innerText: selectedCell.innerText };
  applyStylesToSelectedCell(formData);
});

expressionInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    try {
      const expResult = eval(event.target.value);
      selectedCell.innerText = expResult;
    } catch (error) {
      console.error("error evaluating expression: ", error);
      selectedCell.innerText = "";
      alert("Invalid expression. Please enter a valid Javascript expression.");
    }
  }
});

const state = {};

/* 
state: {
  c4: {
    innerText : "neeraj",
    isBold: true,
    isItalic: false,
    isUnderlined: true,
    align: "right",
    fontSize: 16,
    fontFamily: default,
    color: "",
    backgroundColor: ""
  }
}
*/

const defaultState = {
  innerText: "",
  isBold: false,
  isItalic: false,
  isUnderlined: false,
  align: "left",
  fontSize: "16",
  fontFamily: "default",
  textColor: "#000000",
  backgroundColor: "#ffffff",
};
