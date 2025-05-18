const user = {
  name: "Tushar",
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

user.greet() // Hi, I'm Tushar


//but here we are transferring this context to other so , context is being lost therefore bind it
const greetFn = user.greet;
// greetFn();           // ❌ undefined, because 'this' is lost

const boundGreet = user.greet.bind(user); //we can bind anything else if we weant to change context like
// .bind({name: "gargee"}) ,,, this will change from tushar to gargee
boundGreet(); // ✅ Hi, I'm Tushar
