const users = {
    id : 21121,
    email : "manoj@gmail.com",
    userStatus : true,
    purchaseDetails :{
         mobile : "onePlus",
         price : "12000",
         userAddress : {
            Address : "Amrnath Nagar,up"
         }
    }
}


console.log(users.purchaseDetails.userAddress.Address);  //access the value using . (dot);

console.log(users['purchaseDetails']['price']);  //you can access also square bracket