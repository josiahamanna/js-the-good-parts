// use single global variable to minimize use of the global variables
// Global variables hold assests of the JavaScript applications

var MYAPP = {}; // reducing global footprint to a single name.

MYAPP.stooge = {
  "first-name": "Joe",
  "last-name": "Howard",
};

MYAPP.flight = {
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
