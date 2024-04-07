

const map = new Map();
map.set('IN',"India");
map.set('USA',"United State of America");
map.set('Rus','Russia');
// map.set('Rus','Russia');  //! you cant repeat the key and value;


//todo (for of) : can we apply the loop here
for (const [key , values] of map) {  //!put the square bracket and put next value
    console.log(`${key} : ${values}`);
}




// //todo (for in) : can we apply the loop here
// //!the map is not iterable thats why they give us no value
// for (const key in map) {
//    console.log(key);
// }