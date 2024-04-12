const user = {
    name  : "mahi",
    age : 17,
    address : 'mumbai'
}

const user2 = user;

user2.name = "manoj";

console.log(user2);
console.log(user);