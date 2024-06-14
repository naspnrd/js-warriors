// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const person1 = new Person("Neeraj", 26);
// const person2 = new Person("Rahul", 29);

// console.log(typeof person1);
// console.log(person2);

function User(username, email) {
  this.username = username;
  this.email = email;
  this.loggedIN = false;
}

// Methods for loggin in a user
User.prototype.login = function () {
  this.loggedIN = true;
  console.log(`${this.username} is logged in`);
};

User.prototype.logout = function () {
  this.loggedIN = false;
  console.log(`${this.username} is logged out`);
};

const user1 = new User("neeraj", "neeraj@gamil.com");
const user2 = new User("madhav", "madhav@gamil.com");

user1.age = 25; // wanted to add something execusively in user1

console.log(user2);

user1.login();

console.log(user1);
