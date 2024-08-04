
// ******for of loop ****** : 

let arr = [2,3,4,5,6]
for (const num of arr) {
  console.log(num)
}

const greeting = "Ali Yahya" 
for (const greet of greeting) {
  if (greet =='h') {
    console.log(`value detected is  :  ${ greet}`)
    continue ;
  }
  console.log(`Each char value is : ${greet}`)
}


// ****** maps ****** //

 const map = new Map();

map.set('PK' , 'pakistan')
map.set('USA' , 'umited state america')
map.set('CH' , 'china')
map.set ('AFG' , 'afghanistan')

// console.log(map.set())

for (const [name,value] of map) {
  console.log(name , ':' , value)  
}






