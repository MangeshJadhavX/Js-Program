
//object

const user = {
   name : 'rahul',
   work : "airlines",
   address : {
    home : "london",
    workaddress : "washington"
   }
}

console.log(user.address.home?.salary?.abovelakh); //! (?.) this operator resolve the error(give undefine or null )


const userTwo = [
    {
        companyname : "google",
        address : "nyc"
    },
    
    {
        companyname : "amazon",
        address : "LA"
    },
    
    {
        companyname : "ubar",
        address : "india"
    },
    

]

console.log(userTwo[4]?.name);  //give us undefine 