const download = document.getElementById("download");
const upload = document.getElementById("upload");

download.addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  let link = document.createElement("a");
  link.href = url;
  link.download = "spreadsheet.json";
  link.click();
});

upload.addEventListener("change", (event) => {
  let file = event.target.files[0];
  if (file.type !== "application/json") {
    alert("Please upload JSON file only");
    return;
  }
  const fileReader = new FileReader();
  fileReader.onload = function (event) {
    const fileData = JSON.parse(event.target.result);
    console.log(fileData);

    //HW: Fill all the cells of the sheet with the fileData
  };
  fileReader.readAsText(file);
});

// HW: Implement multiSheet functionality

/*
AllSheets = {
  sheet1: state1,
  sheet2: state2,
  sheet3: stat3
}
// every sheet is like a radio button becuase you can select only
one at a time out of all given sheet

*/
