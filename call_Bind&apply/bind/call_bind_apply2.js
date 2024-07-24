let userOne = {
    name : 'smaay',
    surname : 'chitodiya'
}

let userTwo = {
    name : 'sanket',
    surname : 'patil'
}

let userThree = {
    name : 'shamsundar',
    surname : 'sharma'
}




function fullname(homeTown,state){  
    console.log(`${this.name} ${this.surname} he lives in ${homeTown} state ${state} `);
}


fullname.call(userOne,'pune','maharashtra'); //this is access the useOne obj in this line

fullname.apply(userTwo,['SambhajiNagar','maharashtra']);

let getName =  fullname.bind(userThree,'New Delhi','punjab');
console.log(getName);
getName();




