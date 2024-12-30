"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(3)
function identityForu(val) {
    return val;
}
// identityForu<Bootle>({})
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    // do some database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, ValTwo) {
    return {
        valOne,
        ValTwo
    };
}
class Sellable {
    constructor() {
        this.carts = [];
    }
    addToCart(product) {
        this.carts.push(product);
    }
}
