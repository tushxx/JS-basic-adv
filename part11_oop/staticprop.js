class Car {
  constructor(name) {
    this.name = name;
  }

  drive() {
    console.log(`${this.name} is driving`);
  }

  static companyInfo() {
    console.log("We build electric cars");
  }
}

const myCar = new Car("Tesla");

// Instance method
myCar.drive(); // ✅ Tesla is driving

// Static method
Car.companyInfo(); // ✅ We build electric cars
myCar.companyInfo(); // ❌ Error: myCar.companyInfo is not a function


// static do not give access to it , it is being created bnut do not give access

//In JavaScript, the static keyword is used inside classes to define methods or properties that belong to the class itself, not to instances of the class.


