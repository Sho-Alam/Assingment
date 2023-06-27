const customer = {
    name: 'Shoaib Alam',
    balance: 600
  };
  
  // Function to deposit money into the account
  const deposit = (customer, amount) => {
    customer.balance += amount;
    console.log(`Deposit of ${amount} successful. New balance is ${customer.balance}.`);
  };
  
  // Function to withdraw money from the account
  const withdraw = (customer, amount) => {
    if (customer.balance < amount) {
      console.log('Insufficient balance. Transaction cancelled.');
    } else {
      customer.balance -= amount;
      console.log(`Withdrawal of ${amount} successful. New balance is ${customer.balance}.`);
    }
  };
  
  deposit(customer, 200); // Output: Deposit of 100 successful. New balance is 600.
  withdraw(customer, 300); // Output: Withdrawal of 200 successful. New balance is 400.
  withdraw(customer, 600); // Output: Insufficient balance. Transaction cancelled.