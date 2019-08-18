//how to confirm am instance of an object
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
   let myHouse = new House(4)
  alert(myHouse instanceof House);
  

// confirming the own and prototypes property of an instance
function Bird(name) {
    this.name = name;
    this.color = "Yellow";
  }
  Bird.prototype.numLegs = 4;
  let canary = new Bird("Tweety");
  let ownProps = [];
  let prototypeProp = [];

  
  for(let property in canary){
    if(canary.hasOwnProperty(property)){
    ownProps.push(property);
  }
  else{
    prototypeProp.push(property);
  }
  
  }
  alert(ownProps);
  alert(prototypeProp);