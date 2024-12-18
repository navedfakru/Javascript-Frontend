class User {
  email: string
  name: string
  readonly city: string = ""
  constructor(email: string, name: string){
    this.email = email;
    this.name = name
  }
}

const hitesh = new User("h@h.com", "hitesh")
hitesh.city = "delhi"