var stooge = {
  "first-name": "Sachin",
  "last-name": "Tendulkar",
};

var another_stooge = Object.create(stooge);

stooge.nickname = "Sacchi";
stooge["middle-name"] = "Pakkadmane";
another_stooge.nickname = "Tendu";

// The delete operator removes the property from the object if it has one
// It does not touch the object in the prototype linkage

delete another_stooge["middle-name"];

console.log(stooge["middle-name"]); // Pakkadmane

delete another_stooge.nickname;

console.log(another_stooge.nickname); // Sacchi
