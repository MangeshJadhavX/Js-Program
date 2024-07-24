let Courses = [{
    name : 'Js Course',
    price : 1299
   },
   {
    name :'cs Course',
    price :5999
   },
   {
    name : 'java course',
    price : 6999
   }

]

let CoursePrice = Courses.reduce((acc,item)=>{
  console.log(item.price);
    return acc + item.price;
},0)

console.log(CoursePrice); 