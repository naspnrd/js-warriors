const downloadBtn = document.getElementById("download");

let jsonData = {
  name: "Neeraj",
  age: 25,
  profession: "Software Developer",
};
downloadBtn.addEventListener("click", () => {
  // TODO: download the json file // .json extension
  const stringifiedData = JSON.stringify(jsonData);
  console.log(stringifiedData);
  const blob = new Blob([stringifiedData], { type: "plain/text" });
  console.log(blob);
  const downloadUrl = URL.createObjectURL(blob);
  console.log(downloadUrl);
  let a = document.createElement("a");
  a.download = "sheet.txt";
  a.href = downloadUrl;
  a.innerText = "Download the file";
  // document.body.appendChild(a);
  a.click();
});

const upload = document.getElementById("upload");

upload.addEventListener("change", () => {
  console.log(upload.files[0]);
  let file = upload.files[0];
  if (file.type === "text/plain") {
    // do something
    const fileReader = new FileReader();
    fileReader.onload = function (event) {
      console.log(event.target.result);
    };
    fileReader.readAsText(file);
  } else {
    alert("Please upload a text file");
  }
});
