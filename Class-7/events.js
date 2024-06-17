function callMe(button) {
  //   alert("you clicked me");
  //   let a = 20,
  //     b = 30;
  //   console.log("hello neeraj", a, b);
  //   function abc() {
  //     console.log(a, b);
  //   }
  //   abc();
  //   console.log("button clicked -- ", button);
  //   console.log(button.innerText);
  //   //   debugger;
  //   button.classList.add("secondary");
  //   button.disabled = true;
  //   button.draggable = true;
  const b = document.createElement("b");
  b.innerText = "Neeraj Chaudhary";
  document.body.appendChild(b);
}

const students = [
  {
    name: "Lokesh",
    age: 22,
  },
  {
    name: "Ankit",
    age: 29,
  },
  {
    name: "Kotesh",
    age: 20,
  },
  {
    name: "Neeraj",
    age: 29,
  },
  {
    name: "Rahul",
    age: 20,
  },
];

const container = document.getElementById("container");

function createStudents() {
  students.forEach((student) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const name = document.createElement("span");
    const age = document.createElement("span");
    name.innerText = student.name;
    age.innerText = student.age;
    //   card.appendChild(name);
    //   card.appendChild(age);
    card.append(name, age);

    container.appendChild(card);
  });
}
