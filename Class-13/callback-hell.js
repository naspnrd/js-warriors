// console.log("Namaste");
// setTimeout(() => {
//   console.log("Javasciptionian");
// }, 5000);
// console.log("Students");

// O/P
// Namaste
// Students
// Javasciptionian

setTimeout(() => {
  console.log("first callback");
  setTimeout(() => {
    console.log("second callback");
    setTimeout(() => {
      console.log("Third callback");
      setTimeout(() => {
        console.log("Fourth callback");
        setTimeout(() => {
          console.log("Fifth callback");
          setTimeout(() => {
            console.log("Sixth callback");
            setTimeout(() => {
              console.log("Seventh callback");
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);

// Building an ecommerce website
// Adding items to cart
// Create an order
// Payment

// const cart = ["shoes", "pants", "Kurtas"];

// createOrder(cart, () => {
//   proceedToPayment(function () {
//     showOrderSummary();
//   });
// });

// Steps to Make a Sandwich
/*
 * Get bread
 * Take the bread and add veggies
 * If cheese is requested, add cheese to bread and veggies
 * If toast is requested, toast the sandwich, if not serve it
 * Ask for toppings and then serve the sandwich
 */

function fnc1(fnc2) {
  let sandwich = [];
  sandwich.push("bread");
  console.log("Sandwich so far: ", sandwich);
  fnc2(sandwich, fnc3);
}

function fnc2(sandwich, fnc3) {
  //
  sandwich.push("veggies");
  console.log("Sandwich so far: ", sandwich);

  fnc3(sandwich, true, fnc4);
}

function fnc3(sandwich, addCheese, fnc4) {
  if (addCheese) sandwich.push("cheese");
  console.log("Sandwich so far: ", sandwich);
  fnc4(sandwich, false, fnc5);
}

function fnc4(sandwich, toast, fnc5) {
  if (toast) sandwich.push("toasted");
  console.log("Sandwich so far: ", sandwich);
  fnc5(sandwich);
}

function fnc5(sandwich) {
  let toppings = ["lettuce", "tomoto", "sweet chilli"];
  sandwich.push(...toppings);
  console.log("Sandwich so far: ", sandwich);
}

fnc1(fnc2);
