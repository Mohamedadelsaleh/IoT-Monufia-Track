// const person1= {
//     fname: "Omar",
//     lname: "Alaa",
//     age: 25
// };

// const person2= person1

// person2.age = 10;

// console.log("person 2",person2);
// console.log("*************************************************************************")
// console.log("person 1",person1);

const person1= {
    fname: "Omar",
    lname: "Alaa",
    age: 25
};


const person2= {...person1}

person2.age = 10;


console.log("person 2",person2);
console.log("*************************************************************************")
console.log("person 1",person1);
