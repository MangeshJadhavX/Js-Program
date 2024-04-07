const arr = [1,2,3,4,5];

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);   
}



//!this is for of
const arr2 = ['manish','rahul','damini','rambha'];

for (const Names of arr2) {
    console.log(Names);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
} 



//!we can't use this loop for object we can use another
const user = { name: "mangesh", Address: "Lives in Jamner", Id: 8502 };

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
