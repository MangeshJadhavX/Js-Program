//!this is proto type inheritance


const user =  {
    username : "mangesh Jadhav",
    courseComplete : '4',
    feesPaid : true,
    amount : 4999
}

const Teacher = {
    completeTopic : 4,
    unCompleteTopic : 2
}

const teacherAssistant = {
    AssistTeacher : true,
    __proto__  : Teacher        
}


console.log(teacherAssistant.__proto__);    //!the old inheritance method is  __proto__   

//todo++NEW--METHOD+++++++++++++++++++++++++++++++++++++++++++++++++

Object.setPrototypeOf(Teacher,user);

console.log(Teacher.amount);





