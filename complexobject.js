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

for(let i = 0;i < allUser.length;i++){
    if(allUser[i]["gender"] == "male"){
        console.log(allUser[i]["firstName"]);
    }
}