// json - its a java scripts object Notation

const users = '{"firstName" : "rahul", "age" : 24, "city" : "pune"}'  // if we send our data to someone to convert the object into string


// console.log(users["firstName"]);  this is undefine because you  fetch the value from the string.

//JSON.parse: its convert the stringObj to the object.   
    

//JSON.stringify : its total opposite to json.parse its convert the object to string

const persons = JSON.parse(users);
console.log(persons["city"]); 


const animal = {  // convert this into string;

    animalName : "horse",
    legCount : 4,
    animalBrad : "German"
}

const output = JSON.stringify(animal);
console.log(output);
console.log(output["animalBrad"]);


