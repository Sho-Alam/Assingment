const numDays = 5;
const carType = "midsize";
const totalCost = calculateRentalCost(numDays, carType);


function calculateRentalCost(numDays, carType) {
    let rentalCost;
  
    switch (carType) {
      case "economy":
        rentalCost = 4000;
        break;
      case "midsize":
        rentalCost = 10000;
        break;
      case "luxury":
        rentalCost = 20000;
        break;
      default:
        console.log("Invalid car type.");
        return;
    }
  
    const totalCost = rentalCost * numDays;
    return totalCost;
  }
  
  console.log(`Total rental cost for ${carType} car rented for ${numDays} days is Rs. ${totalCost}.`);

