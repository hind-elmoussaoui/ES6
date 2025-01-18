class Dinglemouse{

  constructor( firstName, lastName ){
     this.firstName = firstName;
     this.lastName = lastName;
  }
  getFullName(){
    return `${this.firstName} ${this.lastName}`.trim();
  }
}
const person = new Dinglemouse("John", "Doe");
console.log(person.getFullName()); // Output: "John Doe"

const personWithNoLastName = new Dinglemouse("John", "");
console.log(personWithNoLastName.getFullName()); // Output: "John"

const personWithNoFirstName = new Dinglemouse("", "Doe");
console.log(personWithNoFirstName.getFullName()); // Output: "Doe"
