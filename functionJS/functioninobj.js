//we contain object in function

function userInformation(userObj){
   userObj.name = "harsh";
   console.log(userObj);
   console.log(`The name of the user is ${userObj.name}`);
}



const user = {
    name :"raman",
    lastName :"bharatwaj",
    height : "172m"
}


userInformation(user);