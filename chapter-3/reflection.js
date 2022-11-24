var stooge = {
  "first-name": "Jerome",
  "last-name": "Howard",
};

var flight = {
  airline: "Oceanic",
  number: 815,
  departure: {
    IATA: "SYD",
    time: "2004-09-22 14:55",
    city: "Sydney",
  },
  arrival: {
    IATA: "LAX",
    time: "2004-09-23 10:42",
    city: "Los Angeles",
  },
};

// Checking type
console.log(typeof flight.number);
console.log(typeof flight.arrival);

console.log(typeof flight.toString); // 'function'
console.log(typeof flight.constructor); // 'function'
// The above is the result of property on the prototype chain.
// When reflecting, be aware that some values could be functions

// Make use of hasOwnProperty method.
console.log(flight.hasOwnProperty("number")); // true
console.log(flight.hasOwnProperty("constructor")); // false
