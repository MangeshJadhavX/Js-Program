//write the program prints all the male people first name given a complex array

const allUser = [{
    firstName :"Mangesh",
    gender : "male"
},{
    firstName :"rahul",
    gender : "male"
},{
    firstName : "Pooja",
    gender :"female"
}]

console.log(allUser[1].firstName);

// //!we can use here forEACH LOOP
// for(let i = 0;i < allUser.length;i++){
//     if(allUser[i]["gender"] == "male"){
//         console.log(allUser[i]["firstName"]);
//     }
// }

allUser.forEach((values)=>{
    if(values.gender == 'female'){
        console.log(values.firstName);
    } 
})