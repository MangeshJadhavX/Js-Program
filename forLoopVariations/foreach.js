//Array

const arr = [1,2,4,5,6];

arr.forEach( (item) => {
    // console.log(item);
});


//todo : foreach for complex object

const user= 
[ 
    {
    name : "RJ",
    age : '12' 
    },
    {
      name : "manoj",
      age : '45'
    },
    {
     name : 'anurang',
     age : '78'
    }
]

user.forEach((values)=>{
 console.log(values['age']);
 console.log(values.name);
});



//todo : for string
let username = "mangesh";

//! we can use For of use 
// for (const string of username) {
//     console.log(string);
// }

