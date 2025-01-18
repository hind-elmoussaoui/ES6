///////////////// Make them bark! ///////////////////////
function Dog(name, breed, gender, age) {
    this.name = name;
    this.breed = breed;
    this.gender = gender;
    this.age = age;
}

Dog.prototype.bark = function() {
    return 'Woof!';
};

const dog1 = new Dog('Buddy', 'Golden Retriever', 'Male', 3);
const dog2 = new Dog('Lucy', 'Beagle', 'Female', 5);

console.log(dog1.bark()); // ➞ 'Buddy says Woof!'
console.log(dog2.bark()); // ➞ 'Lucy says Woof!'
