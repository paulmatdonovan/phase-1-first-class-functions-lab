// Define the function returnFirstTwoDrivers
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}

// Define the function returnLastTwoDrivers
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

// Create an array selectingDrivers with the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



function createFareMultiplier(multiplier) {
    // Return a function that multiplies a given value by the specified multiplier
    return function (fare) {
        return fare * multiplier;
    };
}
const fareDoubler = createFareMultiplier(2);

// Define fareTripler function using createFareMultiplier

const fareTripler = createFareMultiplier(3);


// Assuming you already have the returnFirstTwoDrivers and returnLastTwoDrivers functions defined

// Define selectDifferentDrivers function
function selectDifferentDrivers(drivers, driverSelectorFunction) {
    // Use the provided driverSelectorFunction to select and return a subset of drivers
    return driverSelectorFunction(drivers);
  }
  
  // Your test cases can now use this function
  
  // Example usage:
  // selectDifferentDrivers(drivers, returnFirstTwoDrivers);
  
  
  
