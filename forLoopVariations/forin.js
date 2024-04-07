//its use for object

const myObject = {
    js : "javaScript",
    rb : "ruby",
    swift : "make by Apple",
    cpp : "c++"
}

for (const key in myObject) {
    console.log(key);
   console.log(`The Language ${key} is ${myObject[key]}`);
}




//use for arrays   
const languages = ['pythan' ,'java','javaScript','html'];

for (const key in languages) {
    console.log(key);       
    console.log(languages[key]);    
}
