// classes -> syntactical sugar over JS's existing prototype-based inheritance
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.loggedIN = false;
  }
  // Methods for loggin in a user
  //   login() {
  //     console.log(this === p1);
  //     this.loggedIN = true;
  //     console.log(`${this.username} is logged in`);
  //   }
  login = () => {
    console.log(this === p1);
    this.loggedIN = true;
    console.log(`${this.username} is logged in`);
  };
  logout() {
    this.loggedIN = false;
    console.log(`${this.username} is logged out`);
  }
}

// const p1 = new User("Neeraj", "neeraj@gmail.com");

// console.log(p1);

// console.log(p1.login()); // true

// Pitfall: separating method from its object

// a. when a method called without an object
// const alone = p1.login;
// alone(); // function invocation

// bind the function

// const alone = p1.login.bind(p1);
// alone();

// const alone = p1.login;
// alone(); // function invocation

// class Parent {
//   constructor(name, gender) {
//     this.name = name;
//     this.gender = gender;
//   }
// }

// class Child extends Parent {
//   constructor(name, gender, id) {
//     // super we call parent class constructor function
//     super(name, gender);
//     this.id = id;
//   }
// }

// const child = new Child("Neeraj", "M", 22);
// console.log(child);
