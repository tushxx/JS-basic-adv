const promiseone = new Promise((resolve, reject)=>{
    //DO an Async task
    //like DB calls, cryptography, network related
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    }, 1000)
})
promiseone.then(function(){
    console.log("promise consumed");
    
})
///same can written as

new Promise((resolve, reject)=>{
    setTimeout(function(){
        console.log('Async task is complete for 2nd time')
        resolve()
    }, 1000)
}).then(()=> console.log("async 2 is resolved"))

////promise 3
const promisthree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username: "tushar", email: "tush@google.com"})
    }, 1000)
})
promisthree.then((user)=>{
  console.log(user); //-->>>{ username: 'tushar', email: 'tush@google.com' }
})


///promise 4
const promisefour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({ username: 'tushar', password: '1234' })
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
promisefour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log("promise is either resolved or rejected."))


/// promise 5

const promisefive = new Promise((resolve, reject) =>{
    setTimeout(() => {
      let error = true;
      if (!error) {
        resolve({ username: "javascript", password: "1234" });
      } else {
        reject("ERROR: JS went wrong");
      }
    }, 1000);
})
// async function consumepromisefive(){ ////////async await cannot handle errors directly
//    const response =  await promisefive
//    console.log(response);
// }
// consumepromisefive() // if error = false then we will get output but now it is true so we are getting error not printed one another error
/////////// we need to write it in catch block

async function consumepromisefive() {
  try {
    const response = await promisefive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumepromisefive() /////---->>>>output : ERROR: JS went wrong


// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json(); //you need to await respons too
//     console.log(data);
//     //  data.then(()=>{  /// you can follow this too
//     //  console.log(data)})


//   } catch (error) {
//     console.log(error);
    
//   }
// }
// getAllUsers()


fetch("https://jsonplaceholder.typicode.com/users", {})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error)=> console.log(error)) 
