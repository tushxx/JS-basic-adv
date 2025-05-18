const user = {
  name: "tushar",
  email: "tushar@gmail.com",
};
const teacher = {
  makeVideo: true,
};
teacher.__proto__ = user
console.log(teacher.name);// tushar
// console.log(user.makeVideo);  // undefined 



const teachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: teachingSupport,
};
console.log(TASupport.isAvailable); // flase
console.log(teachingSupport.fullTime); //undefined 

// console.log(TASupport.__proto__); //{} they are so many methods present but node do not show them we can see them in browser





///////////////////////// MODERN SYNTAX >>>>>>>>>
const teacher = {
  makeVideo: true,
};
const teachingSupport2 = {
  isAvailable: false,
};

Object.setPrototypeOf(teachingSupport2, teacher) //ObjectConstructor.setPrototypeOf(o: any, proto: object | null): any

//Sets the prototype of a specified object o to object proto or null. Returns the object o.

// teachingSupport can access all property of teacher but
// teacher cant access it from teachingSupport

console.log(Object.getPrototypeOf(teachingSupport2));//  { makeVideo: true }
console.log(teachingSupport2.makeVideo); // true
console.log(teachingSupport2.__proto__); //{ makeVideo: true } 


