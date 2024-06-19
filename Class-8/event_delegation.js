document.querySelector("#category").addEventListener("click", (e) => {
  // e -> event object
  // e.target -> refer to point where we clicked
  // e.currentTarget -> refer t point where event has been attached
  console.log(e);
  console.log(e.target);
  console.log(e.currentTarget);
  if (e.target.tagName === "LI") {
    window.location.href = "/Class-8/" + e.target.id + ".html";
  }
});
