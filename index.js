// Write your solution in this file!
var customerName = 'bob'
// console.log(customerName);
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}
function setBestCustomer() {
    bestCustomer = 'not bob'
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}
const leastFavouriteCustomer = 'least favorite customer';

function changeLeastFavoriteCustomer() {
    leastFavouriteCustomer = 'worst customer'
}