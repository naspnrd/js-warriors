const form = document.getElementById("basicForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    name: form.elements["name"].value,
    email: form.elements["email"].value,
    number: form.elements["number"].value,
  };

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
  <h2>Form Data:</h2>
  <p><strong>Name:</strong> ${formData.name}</p>
  <p><strong>Email:</strong> ${formData.email}</p>
  <p><strong>Number:</strong> ${formData.number}</p>
  `;
});
