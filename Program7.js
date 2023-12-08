
//remove object using for loop

var arr = [{name:"Mangesh", age:24 , gender : "Male"},
   {name : "Rakul", age: 22, gender : "female"},
   {name : "soham", age : 34, gender : "biosexual"},
   {name : "Ramesh" , age : 4, gender : "male"},
   {name : "monika",age : 5,gender :"female"},
    {name : "mohit",age : 7,gender :"male"},
    {name : "sayami",age : 9,gender :"female"},
    {name : "riyaa",age : 9,gender :"female"},
  ]
var count = 0;

for(var i = 0; i < arr.length; i++){
if(arr[i].age < 10){
count++;
}
}

for(var j = 0;j <= count;j++) {
for(var i = 0; i < arr.length;i++) {
if(arr[i].age < 12) {
arr.splice(i,1);     
} 
}
}



console.log(arr);