class User {
    #email;
    #password;
    constructor(email, password){
        this.#email = email
        this.#password = password
    }

    get email(){
        return this.#email.toUpperCase()
    }

    // set email(value){
    //     this._email = value
    // }

    get password(){
        return `${this.#password}hitesh`
    }
    
    
    // set password(value){
    //     this._password = value
    // }
}
const hitesh = new User("hitesh@ai.com", "12ab3");

console.log(hitesh.email)

class Person {
    #name; // Private property
  
    constructor(name) {
      this.#name = name;
    }
  
    getName() {
      return `${this.#name.toUpperCase()} Hello`;
    }
  }
  
  const person = new Person('John Doe');
  
  console.log(person.getName()); // 'John Doe'
  
  // Trying to access the private property outside the class will result in an error.
//   console.log(person.name); // Error