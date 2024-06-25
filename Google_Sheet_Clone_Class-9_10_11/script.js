const headRow = document.querySelector(".head-row");
const headCol = document.querySelector(".serialNo");
const body = document.querySelector(".body");
const rows = 500,
  columns = 27;

(() => {
  for (let i = 1; i < columns; i++) {
    // create a cell;
    const headCell = document.createElement("div");
    // if (i === 0) {
    //   //   headRow.appendChild(headCell);
    //   continue;
    // }
    headCell.innerText = String.fromCharCode(64 + i);
    headCell.classList.add("col-head");
    headRow.appendChild(headCell);
  }
})();

(() => {
  for (let i = 0; i < rows; i++) {
    const headColCell = document.createElement("div");
    headColCell.innerHTML = i + 1;
    headColCell.classList.add("sno-cell");
    headCol.appendChild(headColCell);
  }
})();

(() => {
  for (let row = 1; row <= rows; row++) {
    const rowCells = document.createElement("div");
    rowCells.classList.add("row");
    for (let col = 1; col < columns; col++) {
      // console.log(`${String.fromCharCode(64 + col)}${row}`);
      const colCell = document.createElement("cite");
      colCell.classList.add("cell");
      colCell.id = `${String.fromCharCode(64 + col)}${row}`;
      colCell.contentEditable = true;
      rowCells.appendChild(colCell);
    }
    body.appendChild(rowCells);
  }
})();
