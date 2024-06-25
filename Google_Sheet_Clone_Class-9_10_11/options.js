let selectedCell = "";

const activeCellElement = document.querySelector(".selected-cell");
const form = document.getElementById("options-form");
const expressionInput = document.getElementById("expression");
body.addEventListener("click", (event) => {
  if (selectedCell) selectedCell.classList.remove("active-cell");
  selectedCell = event.target;
  console.log({ selectedCell });
  activeCellElement.innerText = selectedCell.id;
  selectedCell.classList.add("active-cell");
  console.log(selectedCell);
});

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
  console.log("change event triggered");
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

  console.log({ formData });
  applyStylesToSelectedCell(formData);
});

expressionInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    try {
      // console.log(event.target.value);
      const expResult = eval(event.target.value);
      console.log(expResult);
      selectedCell.innerText = expResult;
    } catch (error) {
      console.error("error evaluating expression: ", error);
      selectedCell.innerText = "";
      alert("Invalid expression. Please enter a valid Javascript expression.");
    }
  }
});
