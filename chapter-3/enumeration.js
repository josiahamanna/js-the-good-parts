var stooge = {
  "first-name": "Jerome",
  "last-name": "Howard",
};

another_stooge = Object.create(stooge);
another_stooge["first-name"] = "Harry";
another_stooge["middle-name"] = "Moses";
another_stooge.nickname = "Moe";
// The enumeration will include all of the properties including functions
// and prototype properties that we might not be interested in.

// We can use hasOwnProperty to filter out values that we don't want.

var name;

for (value in another_stooge) {
  if (typeof another_stooge[value] !== "function") {
    console.log(value, ":", another_stooge[value]);
  }
}

// If you want to maintain order, then use an array
// Iterate through it and get the value in the desired order
