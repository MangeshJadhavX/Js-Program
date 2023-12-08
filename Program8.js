
//this a second approach to solve this problem statement 
//using filter method. this function is return only true or false value. 

var arr = [{name:"Mangesh", age:24 , gender : "Male"},
           {name : "Rakul", age: 22, gender : "female"},
           {name : "soham", age : 34, gender : "biosexual"},
           {name : "Ramesh" , age : 4, gender : "male"},
           {name : "monika",age : 5,gender :"female"},
            {name : "mohit",age : 7,gender :"male"},
            {name : "sayami",age : 9,gender :"female"},
            {name : "riyaa",age : 9,gender :"female"},
          ]


var arr2 = arr.filter(function(val){
   return val.age>12;
})

console.log(arr2);