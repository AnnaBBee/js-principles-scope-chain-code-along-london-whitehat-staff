/* Your code goes here */
var customerName = 'bob';
const leastFavoriteCustomer = 'blah';

const upperCaseCustomerName = () => {
  customerName = customerName.toUpperCase();
  return customerName;
};

 window.setBestCustomer = () => {
  bestCustomer = 'not bob';
  console.log(bestCustomer);
  return bestCustomer;
};



const overWriteBestCustomer = () => {
  bestCustomer = 'maybe bob';
  return bestCustomer;
};

const changeLeastFavoriteCustomer = () => {
  leastFavoriteCustomer = 'me';
  return leastFavoriteCustomer;
};

const attemptTwoFavoriteCustomers = () => {
  let favoriteCustomer = 'ba';
  let favoriteCustomer = 'be';
};
