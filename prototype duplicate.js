//Use Prototype Properties to Reduce Duplicate Code of instances
function Dog(name) {
  this.name = name;
}


Dog.prototype.numLegs = 2;

let beagle = new Dog("Snoopy");
console.log(beagle);