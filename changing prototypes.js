function Dog(name) {
    this.name = name; 
  }
  
  //Changing prototype to new Object and defining the constructor
  
  Dog.prototype = {
    constructor : Dog,
    numLegs: 2, 
    eat: function() {
      console.log("nom nom nom"); 
    }, 
    describe: function() {
      console.log("My name is " + this.name); 
    }
  };
let corrier = new Dog("sezzy");
if (corrier.constructor === Dog){
  console.log(true);
}
else{
  console.log(false);
};