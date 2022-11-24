var stooge = {
  "first-name": "Jerome",
  "last-name": "Howard",
};

/*
    Every object is linked to a prototype object from which it can inherit properties.
    All objects created from object literals are linked to Object.prototype, an object
    that comes standard with Javascript.
*/
console.log(Object.prototype); // [Object: null prototype] {}

// Adding create method to Object function
if (typeof Object.create !== "function") {
  Object.create = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  };
}

var another_stooge = Object.create(stooge);

// The prototype link has no effect on updating
// When we make changes to an object, the object's prototype is not touched
another_stooge["first-name"] = "Harry";
another_stooge["middle-name"] = "Moses";
another_stooge.nickname = "Moe";

console.log("another_stooge", another_stooge);
console.log("stooge", stooge);

/* 
    The prototype link is used only in retrieval
    If the object lacks the property name, and we try to retrieve it, 
    JavaScript tries to retrieve the property value from the prototype object
*/

stooge.profession = "actor";
console.log(another_stooge.profession); // actor
