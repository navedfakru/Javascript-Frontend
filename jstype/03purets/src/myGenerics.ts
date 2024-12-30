const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
  return val
}

function identityTwo(val: any): any{
  return val
}

function identityThree<Type>(val: Type): Type {
  return val
}

// identityThree(3)

function identityForu<T>(val: T): T {
  return val
}

interface Bootle{
  brand: string,
  type: number
}

// identityForu<Bootle>({})

function getSearchProducts<T>(products: T[]): T{
  // do some database operations
  const myIndex = 3
  return products[myIndex]
}

const getMoreSearchProducts = <T,>(products: T[]): T => {
  // do some database operations
  const myIndex = 4
  return products[myIndex]
}

interface Database {
  email: string,
  password: string,
}

function anotherFunction<T, U extends Database>(valOne: T, ValTwo: U): object{
  return {
    valOne, 
    ValTwo
  }
}

// anotherFunction(3, {})

interface Quiz{
  name: string,
  type: string
}

interface Course{
  name: string,
  another: string,
  subject: string
}

class Sellable<T>{
  public carts: T[] = []

  addToCart(product: T){
    this.carts.push(product)
  }
}