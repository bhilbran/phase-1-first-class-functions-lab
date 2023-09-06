// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2)
}
function returnLastTwoDrivers(drivers){
    return drivers.slice(-2)
}  
const selectingDrivers = [
    returnFirstTwoDrivers, returnLastTwoDrivers
  ];

  
function createFareMultiplier(multiplier) {
    return function(fare){
        return fare * multiplier

    }
}

console.log(createFareMultiplier(2)(4))

const fareDoubler = createFareMultiplier(2)

console.log(fareDoubler(6))

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, cb){
    return cb (arrayOfDrivers)
}
