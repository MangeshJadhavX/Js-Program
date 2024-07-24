let user = {
    name : 'manoj',
    surname : 'reddy',  
    id : "23",
    Information:function(){
        console.log("Information is not available for this user");
    }
}


 Object.getOwnPropertyDescriptor(user,'id');



 Object.defineProperties(user ,{
    id : {
        writable: false,
        enumerable: false
    },
    surname : {
        writable: false,
        enumerable: false
    }
});

console.log( Object.getOwnPropertyDescriptor(user,'id'));


for (const [key , value] of Object.entries(user)) {
    if (typeof value  !== 'function') {
        console.log(`${key} = ${value}`);
    }
}