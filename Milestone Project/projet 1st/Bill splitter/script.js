const dishCosts = [237.50, 75.25, 150.00, 80.75];
const numPeople = 4;
const bill = calculateBill(dishCosts, numPeople);

function calculateBill(dishCosts, numPeople) {
    // Calculate the total bill
    const totalBill = dishCosts.reduce((acc, cost) => acc + cost, 0);
  
    // Calculate the bill per person
    const billPerPerson = totalBill / numPeople;
  
    // Return an object containing the total bill and the bill per person
    return {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
  }
  
  // Example usage
  console.log(`Total bill: ${bill.totalBill}`);
  console.log(`Bill per person: ${bill.billPerPerson}`);